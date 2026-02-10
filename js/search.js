// Get search query from URL
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('q');

// Display query
document.getElementById('query-display').textContent = searchQuery || 'No query';

// Search sources configuration
const searchSources = [
  {
    name: 'MakerWorld',
    searchUrl: (query) => `https://makerworld.com/en/search/models?keyword=${encodeURIComponent(query)}`,
    color: '#00AE42',
    description: 'Browse thousands of 3D printable models from the MakerWorld community. Find STL files, project details, and printing instructions.',
    logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%2300AE42'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'%3EMaker%0AWorld%3C/text%3E%3C/svg%3E`
  },
  {
    name: 'Printables',
    searchUrl: (query) => `https://www.printables.com/model?q=${encodeURIComponent(query)}`,
    color: '#FA6831',
    description: 'Explore Printables.com for high-quality 3D printing models. Download free STL files with detailed instructions and community ratings.',
    logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23FA6831'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='white' font-weight='bold'%3EPrintables%3C/text%3E%3C/svg%3E`
  },
  {
    name: 'Yeggi',
    searchUrl: (query) => `https://www.yeggi.com/q/${encodeURIComponent(query)}/`,
    color: '#0088CC',
    description: 'Search Yeggi\'s comprehensive 3D model database. Find designs from multiple sources in one place with direct download links.',
    logo: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%230088CC'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='white' font-weight='bold'%3EYeggi%3C/text%3E%3C/svg%3E`
  }
];

// Render search platform cards
function renderSearchPlatforms() {
  const loadingSection = document.getElementById('loading-section');
  const resultsSection = document.getElementById('results-section');
  const resultsGrid = document.getElementById('results-grid');

  setTimeout(() => {
    loadingSection.style.display = 'none';
    resultsSection.style.display = 'block';

    resultsGrid.innerHTML = searchSources.map(source => {
      const searchUrl = source.searchUrl(searchQuery);
      return `
        <div class="search-result-card" style="height: auto;">
          <div class="search-result-image" style="background: ${source.color}; height: 150px;">
            <img src="${source.logo}" alt="${source.name}" style="width: 80px; height: 80px; object-fit: contain;">
          </div>
          <div class="search-result-content">
            <h3 class="search-result-title">${source.name}</h3>
            <p class="search-result-description">${source.description}</p>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin: var(--space-md) 0; font-style: italic;">
              Search query: "${searchQuery}"
            </p>
            <a href="${searchUrl}" target="_blank" class="search-result-btn" style="background: ${source.color};" onclick="trackSiteVisit('${source.name}', '${searchUrl}')">
              🔍 Search on ${source.name}
            </a>
          </div>
        </div>
      `;
    }).join('');

    // Add instruction card
    resultsGrid.innerHTML += `
      <div class="search-result-card" style="grid-column: 1 / -1; background: linear-gradient(135deg, var(--color-primary-light) 0%, #ffffff 100%); border: 2px solid var(--color-primary);">
        <div class="search-result-content" style="text-align: center;">
          <h3 class="search-result-title" style="color: var(--color-primary);">📋 How to Request a Quote</h3>
          <p class="search-result-description" style="text-align: left; line-height: 1.8;">
            <strong>1.</strong> Click on any of the search buttons above to browse real 3D models<br>
            <strong>2.</strong> Find a design you like on the website<br>
            <strong>3.</strong> Copy the URL (link) of that design<br>
            <strong>4.</strong> Close this tab and return to the main page<br>
            <strong>5.</strong> Scroll to "Request a Quote" and paste the link in the Project Details field<br>
            <strong>6.</strong> Submit your quote request!
          </p>
          <a href="index.html#quote" class="search-result-btn" style="margin-top: var(--space-lg);">
            📝 Go to Quote Form Now
          </a>
        </div>
      </div>
    `;
  }, 800);
}

// Track when user visits a site (for analytics/future features)
function trackSiteVisit(siteName, url) {
  console.log(`User searching ${siteName} for: ${searchQuery}`);
  // You could add analytics here if needed
}

// Load and display search platforms
if (searchQuery) {
  renderSearchPlatforms();
} else {
  document.getElementById('loading-section').innerHTML = `
    <div class="container">
      <p style="text-align: center; color: var(--color-text-muted); padding: 3rem 0;">
        No search query provided. Please return to the home page and try again.
      </p>
    </div>
  `;
}
