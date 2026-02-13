async function loadJSON(url) {
  const response = await fetch(url + '?cacheBust=' + Date.now());
  return await response.json();
}

// Store shop, gallery, scanning, and imports data globally for lightbox access
window.shopDataGlobal = [];
window.galleryDataGlobal = [];
window.scanningDataGlobal = [];
window.importsDataGlobal = [];

async function renderShop() {
  const shopData = await loadJSON('/data/shop.json');
  window.shopDataGlobal = shopData;
  const container = document.getElementById('shop-grid');

  container.innerHTML = shopData.map((item, index) => {
    const firstImage = item.images && item.images.length > 0 ? item.images[0] : '';

    // Create WhatsApp order message
    const whatsappMessage = `Hello MK 3D Printing! 👋

I would like to place an order:

📦 *ORDER DETAILS*
━━━━━━━━━━━━━━━━━━━
Product: *${item.title}*
Price: *${item.price}*

Quantity: _____ (I will fill this in)

👤 *MY DETAILS*
━━━━━━━━━━━━━━━━━━━
Name:
Phone:
Delivery Address:

📝 *ADDITIONAL NOTES*
━━━━━━━━━━━━━━━━━━━
(Add any special requests, color preferences, etc.)

Thank you!`;

    const whatsappLink = `https://wa.me/264834290501?text=${encodeURIComponent(whatsappMessage)}`;

    return `
      <div class="shop-card">
        <div class="shop-image-wrapper" style="position: relative;">
          <div class="shop-image" onclick="openLightbox(${index}, 0)" style="cursor: pointer; aspect-ratio: 1; width: 100%; overflow: hidden;">
            ${firstImage ?
              `<img src="${firstImage}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.innerHTML='<div class=\\'placeholder-image\\'>3D Model</div>'">` :
              '<div class="placeholder-image">3D Model</div>'
            }
          </div>
          <div class="shop-price-badge" style="position: absolute; top: 12px; right: 12px; background-color: #36c1b3; color: white; padding: 6px 12px; border-radius: 6px; font-weight: 600; font-size: 14px; z-index: 10;">
            ${item.price}
          </div>
          <div class="shop-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; z-index: 5;">
            <a href="${whatsappLink}" class="btn btn-primary" style="white-space: nowrap;">Get Quote</a>
          </div>
        </div>
        <div class="shop-card-body" style="padding: 12px 0;">
          <h4 style="margin: 0; font-size: 14px; font-weight: 600;">${item.title}</h4>
        </div>
      </div>
    `;
  }).join('');
}

async function renderGallery() {
  const galleryData = await loadJSON('/data/gallery.json');
  window.galleryDataGlobal = galleryData;
  const container = document.getElementById('gallery-grid');
  container.innerHTML = galleryData.map((item, index) => {
    const firstImage = item.images && item.images.length > 0 ? item.images[0] : '';
    return `
      <div class="gallery-item">
        <div class="gallery-image" onclick="openGalleryLightbox(${index}, 0)" style="cursor: pointer;">
          ${firstImage ?
            `<img src="${firstImage}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.innerHTML='<div class=\\'gallery-placeholder\\'>Project</div>'">` :
            '<div class="gallery-placeholder">Project</div>'
          }
        </div>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    `;
  }).join('');
}

async function renderScanning() {
  const scanningData = await loadJSON('/data/scanning.json');
  window.scanningDataGlobal = scanningData;
  const container = document.getElementById('scanning-gallery');

  if (!container) return;

  if (scanningData.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-light); padding: var(--space-2xl);">Scanning photos coming soon!</p>';
    return;
  }

  container.innerHTML = scanningData.map((item, index) => {
    return `
      <div class="scanning-gallery-item" onclick="openScanningLightbox(${index}, 0)">
        <img src="${item.image}" alt="${item.title || 'Scanned object'}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2216%22%3EImage%3C/text%3E%3C/svg%3E'">
      </div>
    `;
  }).join('');
}

async function renderImports() {
  const importsData = await loadJSON('/data/imports.json');
  window.importsDataGlobal = importsData;
  const container = document.getElementById('imports-gallery');

  if (!container) return;

  if (importsData.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-light); padding: var(--space-2xl);">Import product photos coming soon!</p>';
    return;
  }

  container.innerHTML = importsData.map((item, index) => {
    return `
      <div class="imports-gallery-item" onclick="openImportsLightbox(${index}, 0)">
        <img src="${item.image}" alt="${item.title || 'Imported product'}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23999%22 font-family=%22sans-serif%22 font-size=%2216%22%3EImage%3C/text%3E%3C/svg%3E'">
      </div>
    `;
  }).join('');
}

renderShop();
// Gallery section removed - replaced with featured prints
// renderGallery();
renderScanning();
renderImports();
