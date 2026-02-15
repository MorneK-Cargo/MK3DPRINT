interface ThingiverseModel {
  title: string;
  url: string;
  image: string;
}

interface CacheData {
  week: string;
  models: ThingiverseModel[];
  timestamp: number;
}

interface HandlerEvent {
  body?: string;
  headers?: Record<string, string>;
  httpMethod?: string;
  path?: string;
  queryStringParameters?: Record<string, string>;
}

interface HandlerContext {
  metadata?: {
    environment?: string;
  };
}

interface HandlerResponse {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
}

// In-memory cache as fallback
let memoryCache: CacheData | null = null;

function getWeekKey(timezone: string = 'Africa/Windhoek'): string {
  const now = new Date();

  // Convert to Africa/Windhoek timezone
  const windhoekTime = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);

  const year = windhoekTime.find(p => p.type === 'year')?.value || '2024';
  const month = windhoekTime.find(p => p.type === 'month')?.value || '01';
  const day = windhoekTime.find(p => p.type === 'day')?.value || '01';

  const windhoekDate = new Date(`${year}-${month}-${day}T00:00:00`);

  // Calculate ISO week number
  const firstDay = new Date(parseInt(year), 0, 1);
  const daysDiff = (windhoekDate.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000);
  const weekNum = Math.ceil((daysDiff + firstDay.getDay() + 1) / 7);

  return `${year}-W${String(weekNum).padStart(2, '0')}`;
}

function parseThingiverseHTML(html: string): ThingiverseModel[] {
  const models: ThingiverseModel[] = [];

  try {
    // Look for popular models in the HTML
    // Thingiverse structure varies, but we look for model links and images
    const modelRegex = /href="(\/thing:\d+[^"]*)"[^>]*>[^<]*<[^>]*src="([^"]*)"[^>]*alt="([^"]*)"?/gi;

    let match;
    const seenUrls = new Set<string>();

    // Alternative approach: look for data attributes or specific patterns
    const scriptRegex = /<script[^>]*type="application\/json"[^>]*>(.*?)<\/script>/gs;
    let scriptMatch;

    while ((scriptMatch = scriptRegex.exec(html)) && models.length < 12) {
      try {
        const data = JSON.parse(scriptMatch[1]);
        if (data.props?.pageProps?.initialState?.models?.results) {
          const results = data.props.pageProps.initialState.models.results;
          for (const model of results) {
            if (models.length >= 12) break;
            if (!seenUrls.has(model.id)) {
              seenUrls.add(model.id);
              models.push({
                title: model.name || 'Untitled',
                url: `https://www.thingiverse.com/thing:${model.id}`,
                image: model.thumbnail || model.images?.[0]?.sizes?.large || '',
              });
            }
          }
        }
      } catch (e) {
        // Continue if JSON parse fails
      }
    }

    // Fallback: Parse traditional HTML structure
    if (models.length < 12) {
      const divRegex = /<div[^>]*class="[^"]*thing-[^"]*"[^>]*>[\s\S]*?<a[^>]*href="(\/thing:\d+[^"]*)"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[\s\S]*?<\/div>/gi;

      while ((match = divRegex.exec(html)) && models.length < 12) {
        const url = match[1];
        if (!seenUrls.has(url)) {
          seenUrls.add(url);
          models.push({
            title: match[3] || 'Untitled',
            url: `https://www.thingiverse.com${url}`,
            image: match[2],
          });
        }
      }
    }
  } catch (e) {
    console.error('Error parsing Thingiverse HTML:', e);
  }

  return models.slice(0, 12);
}

async function fetchThingiverseModels(): Promise<ThingiverseModel[]> {
  try {
    const response = await fetch('https://www.thingiverse.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Thingiverse: ${response.status}`);
    }

    const html = await response.text();
    return parseThingiverseHTML(html);
  } catch (error) {
    console.error('Error fetching Thingiverse:', error);
    return [];
  }
}

export const handler = async (
  event: HandlerEvent,
  context: HandlerContext
): Promise<HandlerResponse> => {
  try {
    const weekKey = getWeekKey();

    // Check memory cache first
    if (memoryCache && memoryCache.week === weekKey) {
      return {
        statusCode: 200,
        body: JSON.stringify(memoryCache.models),
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
      };
    }

    // Try to use Netlify Blobs if available
    if (context.metadata?.environment === 'production') {
      try {
        const blob = await (globalThis as any).netlifyBlob?.get?.(weekKey);
        if (blob) {
          const data = JSON.parse(blob.text);
          memoryCache = { week: weekKey, models: data, timestamp: Date.now() };
          return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'public, max-age=86400',
            },
          };
        }
      } catch (e) {
        // Blob storage not available, proceed to fetch
      }
    }

    // Fetch fresh data
    const models = await fetchThingiverseModels();

    // Cache in memory
    memoryCache = { week: weekKey, models, timestamp: Date.now() };

    // Try to save to Netlify Blobs
    try {
      if ((globalThis as any).netlifyBlob?.put) {
        await (globalThis as any).netlifyBlob.put(weekKey, JSON.stringify(models));
      }
    } catch (e) {
      console.error('Could not save to Netlify Blobs:', e);
    }

    // Calculate time until next Monday 00:05 Africa/Windhoek
    const now = new Date();
    const windhoekFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Windhoek',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const windhoekDateStr = windhoekFormatter.format(now);
    const [date, time] = windhoekDateStr.split(', ');
    const [month, day, year] = date.split('/');
    const [hour, minute, second] = time.split(':');

    const windhoekDate = new Date(
      `${year}-${month}-${day}T${hour}:${minute}:${second}`
    );

    const daysUntilMonday =
      (1 - windhoekDate.getDay() + 7) % 7 || 7;
    const nextMonday = new Date(windhoekDate);
    nextMonday.setDate(nextMonday.getDate() + daysUntilMonday);
    nextMonday.setHours(0, 5, 0, 0);

    const maxAge = Math.max(
      300, // Minimum 5 minutes
      Math.floor((nextMonday.getTime() - now.getTime()) / 1000)
    );

    return {
      statusCode: 200,
      body: JSON.stringify(models),
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': `public, max-age=${maxAge}`,
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Thingiverse models' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
