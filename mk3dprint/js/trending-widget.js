/**
 * Trending Designs Widget
 * Displays top 20 trending prints from Thingiverse with auto-refresh
 */

class TrendingWidget {
  constructor() {
    this.container = null;
    this.designs = [];
    this.isLoading = false;
  }

  /**
   * Initialize the widget
   */
  async init() {
    this.container = document.getElementById('trending-widget-grid');
    if (!this.container) {
      console.warn('Trending widget container not found');
      return;
    }

    // Show loading state
    this.showLoading();

    // Load trending designs
    await this.loadTrendingDesigns();

    // Render designs
    this.render();

    // Setup refresh button
    this.setupRefreshButton();

    // Setup search functionality
    this.setupSearch();
  }

  /**
   * Load trending designs from API
   */
  async loadTrendingDesigns() {
    this.isLoading = true;
    try {
      this.designs = await thingiverseAPI.getTrendingDesigns(20);
      console.log(`Loaded ${this.designs.length} trending designs`);
    } catch (error) {
      console.error('Error loading trending designs:', error);
      this.showError();
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Render designs in widget
   */
  render() {
    if (!this.container) return;

    if (this.designs.length === 0) {
      this.container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
          <p style="color: var(--color-text-muted); font-size: 1.1rem;">No trending designs available at the moment.</p>
          <p style="color: var(--color-text-muted); font-size: 0.95rem;">Please try again later or search for specific designs.</p>
        </div>
      `;
      return;
    }

    const designsHTML = this.designs.map((design, index) => {
      return this.createDesignCard(design, index);
    }).join('');

    this.container.innerHTML = designsHTML;

    // Add event listeners to all cards
    this.attachEventListeners();
  }

  /**
   * Create individual design card HTML
   */
  createDesignCard(design, index) {
    const imageUrl = design.image || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23e5f5f3%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%2336c1b3%22 font-family=%22sans-serif%22 font-size=%2224%22 font-weight=%22bold%22%3E3D Design%3C/text%3E%3C/svg%3E';

    return `
      <div class="trending-card" data-design-index="${index}">
        <div class="trending-image">
          <img src="${this.escapeHtml(imageUrl)}"
               alt="${this.escapeHtml(design.title)}"
               loading="lazy"
               onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2220%22%3EImage%3C/text%3E%3C/svg%3E'">
          <div class="trending-overlay">
            <a href="${this.escapeHtml(design.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              View on Thingiverse
            </a>
          </div>
        </div>

        <div class="trending-content">
          <h4 class="trending-title">${this.escapeHtml(design.title)}</h4>

          <p class="trending-creator">by <strong>${this.escapeHtml(design.creator)}</strong></p>

          <p class="trending-description">${this.escapeHtml(design.description)}</p>

          <div class="trending-stats">
            <span class="stat-item">
              <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              ${design.downloads.toLocaleString()} downloads
            </span>
            <span class="stat-item">
              <svg class="stat-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              ${design.rating.toFixed(1)} rating
            </span>
          </div>

          <div class="trending-actions">
            <button class="btn btn-primary btn-full get-quote-btn" data-design-index="${index}">
              Get Quote for This Design
            </button>
            <a href="${this.escapeHtml(design.link)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-full">
              More Details
            </a>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Attach event listeners to design cards
   */
  attachEventListeners() {
    // Get quote buttons
    const quoteButtons = this.container.querySelectorAll('.get-quote-btn');
    quoteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(button.getAttribute('data-design-index'));
        this.handleGetQuote(this.designs[index]);
      });
    });
  }

  /**
   * Handle "Get Quote" button click
   */
  handleGetQuote(design) {
    // Store design info in localStorage
    const designData = {
      title: design.title,
      creator: design.creator,
      url: design.link,
      source: 'Thingiverse',
      category: design.category
    };

    localStorage.setItem('selectedPrint', JSON.stringify(designData));

    // Scroll to quote section
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Setup refresh button
   */
  setupRefreshButton() {
    const refreshBtn = document.getElementById('trending-refresh-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', async () => {
        refreshBtn.disabled = true;
        refreshBtn.textContent = 'Refreshing...';

        // Clear cache and reload
        thingiverseAPI.clearCache();
        await this.loadTrendingDesigns();
        this.render();

        refreshBtn.disabled = false;
        refreshBtn.textContent = 'Refresh Designs';
      });
    }
  }

  /**
   * Setup search functionality
   */
  setupSearch() {
    const searchBtn = document.getElementById('trending-search-btn');
    const searchInput = document.getElementById('trending-search-input');

    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', () => this.performSearch(searchInput.value));
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.performSearch(searchInput.value);
        }
      });
    }
  }

  /**
   * Perform search
   */
  async performSearch(query) {
    if (!query.trim()) {
      alert('Please enter a search term');
      return;
    }

    // Open search on Thingiverse
    const searchUrl = `https://www.thingiverse.com/search?q=${encodeURIComponent(query)}&type=things&sort=relevant`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  }

  /**
   * Show loading state
   */
  showLoading() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <div class="loading-spinner"></div>
        <p style="color: var(--color-text-muted); margin-top: 1rem;">Loading trending designs...</p>
      </div>
    `;
  }

  /**
   * Show error state
   */
  showError() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <p style="color: var(--color-text); font-size: 1.1rem; margin-bottom: 1rem;">Unable to load trending designs</p>
        <p style="color: var(--color-text-muted); margin-bottom: 1.5rem;">Please check your connection and try again.</p>
        <button class="btn btn-primary" onclick="location.reload();">Retry</button>
      </div>
    `;
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize widget when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  const widget = new TrendingWidget();
  await widget.init();
});
