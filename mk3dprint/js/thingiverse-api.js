/**
 * Thingiverse API Integration
 * Handles trending prints and search functionality
 * DevSecOps: Uses caching to reduce API calls and prevent rate limiting
 */

class ThingiverseAPI {
  constructor() {
    this.baseUrl = 'https://api.thingiverse.com';
    this.cacheKey = 'mk3d_thingiverse_cache';
    this.searchCacheKey = 'mk3d_search_cache';
    this.cacheExpiry = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    this.searchCacheExpiry = 1 * 60 * 60 * 1000; // 1 hour for search results
  }

  /**
   * Get trending designs from Thingiverse
   * Uses RSS feed for better compatibility (no API key required)
   */
  async getTrendingDesigns(limit = 20) {
    try {
      // Check cache first
      const cached = this.getFromCache(this.cacheKey);
      if (cached && cached.data && cached.data.length > 0) {
        console.log('Loading trending designs from cache');
        return cached.data;
      }

      // Fetch from RSS feed (no authentication required)
      const response = await fetch('https://www.thingiverse.com/rss/trending', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`Thingiverse API Error: ${response.status}`);
      }

      // Parse RSS feed
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');

      if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        throw new Error('Failed to parse RSS feed');
      }

      // Extract items from RSS
      const items = xmlDoc.getElementsByTagName('item');
      const designs = [];

      for (let i = 0; i < Math.min(items.length, limit); i++) {
        const item = items[i];
        const design = this.parseRSSItem(item, i);
        if (design) designs.push(design);
      }

      // Cache the results
      this.saveToCache(this.cacheKey, designs);

      return designs;
    } catch (error) {
      console.error('Error fetching trending designs:', error);
      // Return cached data if available, even if expired
      const cached = this.getFromCache(this.cacheKey);
      if (cached && cached.data) {
        console.warn('Using expired cache due to API error');
        return cached.data;
      }
      return [];
    }
  }

  /**
   * Parse individual RSS item
   */
  parseRSSItem(item, index) {
    try {
      const title = item.getElementsByTagName('title')[0]?.textContent || 'Untitled';
      const link = item.getElementsByTagName('link')[0]?.textContent || '';
      const description = item.getElementsByTagName('description')[0]?.textContent || '';
      const pubDate = item.getElementsByTagName('pubDate')[0]?.textContent || new Date().toISOString();

      // Extract creator/author
      const creator = item.getElementsByTagName('creator')[0]?.textContent || 'Anonymous';

      // Extract image from description (often contains img tag)
      let image = this.extractImageFromDescription(description);
      if (!image) {
        // Fallback to generic placeholder
        image = `https://cdn.thingiverse.com/renders/placeholder.jpg`;
      }

      // Extract metrics from description if available
      const stats = this.extractStats(description);

      return {
        id: `thing-${index}`,
        title: title.substring(0, 60),
        creator: creator.substring(0, 40),
        link: link,
        image: image,
        description: this.stripHtml(description).substring(0, 150),
        category: 'Design',
        downloads: stats.downloads || 0,
        rating: stats.rating || 0,
        difficulty: stats.difficulty || 'Medium',
        publishedDate: pubDate,
        source: 'Thingiverse'
      };
    } catch (error) {
      console.warn('Error parsing RSS item:', error);
      return null;
    }
  }

  /**
   * Search for designs on Thingiverse
   */
  async searchDesigns(query, limit = 10) {
    try {
      if (!query || query.trim().length === 0) {
        return [];
      }

      // Sanitize query
      const sanitizedQuery = this.sanitizeQuery(query);
      const cacheKey = `${this.searchCacheKey}_${sanitizedQuery}`;

      // Check cache
      const cached = this.getFromCache(cacheKey);
      if (cached && cached.data) {
        console.log(`Loading search results for "${query}" from cache`);
        return cached.data;
      }

      // Build search URL using Thingiverse public search
      const searchUrl = `https://www.thingiverse.com/search?q=${encodeURIComponent(sanitizedQuery)}&type=things&sort=relevant`;

      // For now, return search instructions with link
      const searchResult = {
        type: 'search_redirect',
        query: sanitizedQuery,
        url: searchUrl,
        message: `Search results for "${sanitizedQuery}"`
      };

      this.saveToCache(cacheKey, [searchResult]);
      return [searchResult];

    } catch (error) {
      console.error('Error searching designs:', error);
      return [];
    }
  }

  /**
   * Extract image URL from description HTML
   */
  extractImageFromDescription(description) {
    try {
      const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/);
      if (imgMatch && imgMatch[1]) {
        return imgMatch[1];
      }
    } catch (error) {
      console.warn('Error extracting image:', error);
    }
    return null;
  }

  /**
   * Extract statistics from description
   */
  extractStats(description) {
    const stats = {
      downloads: 0,
      rating: 0,
      difficulty: 'Medium'
    };

    try {
      // Look for common patterns in descriptions
      const downloadMatch = description.match(/(\d+)\s*downloads/i);
      const ratingMatch = description.match(/(\d+\.?\d*)\s*stars?/i);

      if (downloadMatch) stats.downloads = parseInt(downloadMatch[1]) || 0;
      if (ratingMatch) stats.rating = parseFloat(ratingMatch[1]) || 0;
    } catch (error) {
      console.warn('Error extracting stats:', error);
    }

    return stats;
  }

  /**
   * Remove HTML tags from string
   */
  stripHtml(html) {
    try {
      const temp = document.createElement('div');
      temp.innerHTML = html;
      return temp.textContent || temp.innerText || '';
    } catch (error) {
      console.warn('Error stripping HTML:', error);
      return html;
    }
  }

  /**
   * Sanitize search query (XSS prevention)
   */
  sanitizeQuery(query) {
    return query
      .trim()
      .substring(0, 100)
      .replace(/[<>\"']/g, '')
      .replace(/\s+/g, ' ');
  }

  /**
   * Cache utility: Save data with timestamp
   */
  saveToCache(key, data) {
    try {
      const cacheData = {
        data: data,
        timestamp: Date.now()
      };
      localStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
      console.warn('Error saving to cache:', error);
    }
  }

  /**
   * Cache utility: Get data if not expired
   */
  getFromCache(key, customExpiry = null) {
    try {
      const cached = localStorage.getItem(key);
      if (!cached) return null;

      const cacheData = JSON.parse(cached);
      const expiry = customExpiry || this.cacheExpiry;
      const isExpired = (Date.now() - cacheData.timestamp) > expiry;

      if (isExpired) {
        localStorage.removeItem(key);
        return null;
      }

      return cacheData;
    } catch (error) {
      console.warn('Error reading from cache:', error);
      return null;
    }
  }

  /**
   * Clear cache
   */
  clearCache() {
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('mk3d_')) {
          localStorage.removeItem(key);
        }
      });
      console.log('Cache cleared');
    } catch (error) {
      console.warn('Error clearing cache:', error);
    }
  }

  /**
   * Get cache info for debugging
   */
  getCacheInfo() {
    try {
      const keys = Object.keys(localStorage);
      const mk3dKeys = keys.filter(k => k.startsWith('mk3d_'));
      return {
        totalCacheItems: mk3dKeys.length,
        cacheKeys: mk3dKeys
      };
    } catch (error) {
      console.warn('Error getting cache info:', error);
      return { totalCacheItems: 0, cacheKeys: [] };
    }
  }
}

// Initialize API instance
const thingiverseAPI = new ThingiverseAPI();
