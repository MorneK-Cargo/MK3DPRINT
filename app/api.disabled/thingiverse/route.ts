import { NextResponse } from 'next/server';

const THINGIVERSE_API = 'https://api.thingiverse.com';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'popular';
  const page = searchParams.get('page') || '1';
  const perPage = searchParams.get('per_page') || '12';
  
  const accessToken = process.env.THINGIVERSE_ACCESS_TOKEN;
  
  if (!accessToken) {
    // Return sample data if no API key configured
    return NextResponse.json({
      items: getSampleData(),
      source: 'sample',
      message: 'Thingiverse API not configured - showing sample data'
    });
  }
  
  try {
    let endpoint = `${THINGIVERSE_API}/${category}`;
    const url = `${endpoint}?access_token=${accessToken}&per_page=${perPage}&page=${page}`;
    
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Thingiverse API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform the data to a cleaner format
    const items = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      thumbnail: item.thumbnail || item.preview_image,
      url: item.public_url,
      creator: item.creator?.name || 'Unknown',
      creatorUrl: item.creator?.public_url,
      likes: item.like_count || 0,
      downloads: item.download_count || 0,
      views: item.view_count || 0,
      description: item.description?.substring(0, 150) + '...' || '',
    }));
    
    return NextResponse.json({
      items,
      source: 'thingiverse',
      page: parseInt(page),
      perPage: parseInt(perPage)
    });
    
  } catch (error) {
    console.error('Thingiverse API error:', error);
    // Fallback to sample data on error
    return NextResponse.json({
      items: getSampleData(),
      source: 'sample',
      error: 'Failed to fetch from Thingiverse'
    });
  }
}

function getSampleData() {
  return [
    {
      id: 1,
      name: 'Articulated Dragon',
      thumbnail: '/images/trending/articulated-dragon.png',
      url: 'https://www.thingiverse.com/thing:3505006',
      creator: 'McGybeer',
      likes: 12500,
      downloads: 285000,
      views: 950000,
      description: 'Print-in-place articulated dragon with moveable joints...'
    },
    {
      id: 2,
      name: 'Flexi Rex',
      thumbnail: '/images/trending/flexi-trex.jpg',
      url: 'https://www.thingiverse.com/thing:2738211',
      creator: 'DrLex',
      likes: 8900,
      downloads: 320000,
      views: 1200000,
      description: 'A flexible T-Rex that prints in one piece...'
    },
    {
      id: 3,
      name: 'Phone Stand',
      thumbnail: '/images/trending/phone-stand.jpg',
      url: 'https://www.thingiverse.com/thing:3075562',
      creator: 'MakerBot',
      likes: 5600,
      downloads: 180000,
      views: 450000,
      description: 'Universal adjustable phone and tablet stand...'
    },
    {
      id: 4,
      name: 'Cable Clips',
      thumbnail: '/images/trending/cable-clips.jpg',
      url: 'https://www.thingiverse.com/thing:4611554',
      creator: 'Thingiverse',
      likes: 3200,
      downloads: 95000,
      views: 280000,
      description: 'Desktop cable management clips and holders...'
    },
    {
      id: 5,
      name: 'Keyboard Keycaps',
      thumbnail: '/images/trending/keyboard-keycaps.jpg',
      url: 'https://www.thingiverse.com/thing:4743264',
      creator: 'KeyboardMaker',
      likes: 4100,
      downloads: 75000,
      views: 220000,
      description: 'Custom keycaps for mechanical keyboards...'
    },
    {
      id: 6,
      name: 'Headphone Stand',
      thumbnail: '/images/trending/headphone-stand.webp',
      url: 'https://www.thingiverse.com/thing:3846753',
      creator: 'DesignStudio',
      likes: 6700,
      downloads: 142000,
      views: 380000,
      description: 'Minimalist headphone holder for your desk...'
    },
    {
      id: 7,
      name: 'Plant Pot',
      thumbnail: '/images/trending/plant-pot.jpg',
      url: 'https://www.thingiverse.com/thing:4887632',
      creator: 'GreenThumb3D',
      likes: 2800,
      downloads: 68000,
      views: 195000,
      description: 'Self-watering plant pot with built-in drainage...'
    },
    {
      id: 8,
      name: 'Desk Organizer',
      thumbnail: '/images/trending/desk-organizer.png',
      url: 'https://www.thingiverse.com/thing:3912547',
      creator: 'OfficePro',
      likes: 3900,
      downloads: 112000,
      views: 310000,
      description: 'Modular desk organization system...'
    }
  ];
}
