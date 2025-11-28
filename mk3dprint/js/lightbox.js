// Lightbox functionality
let currentItemIndex = 0;
let currentImageIndex = 0;
let currentDataSource = 'shop'; // 'shop' or 'gallery'

function openLightbox(itemIndex, imageIndex) {
  currentDataSource = 'shop';
  if (!window.shopDataGlobal || !window.shopDataGlobal[itemIndex]) {
    console.error('Item not found');
    return;
  }

  currentItemIndex = itemIndex;
  currentImageIndex = imageIndex;

  const item = window.shopDataGlobal[currentItemIndex];
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const lightboxCounter = document.getElementById('lightbox-counter');

  // Set content
  if (item.images && item.images.length > 0) {
    lightboxImage.src = item.images[currentImageIndex];
    lightboxImage.alt = item.title;
  }

  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description;

  if (item.images && item.images.length > 1) {
    lightboxCounter.textContent = `Image ${currentImageIndex + 1} of ${item.images.length}`;
  } else {
    lightboxCounter.textContent = '';
  }

  // Show lightbox
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openGalleryLightbox(itemIndex, imageIndex) {
  currentDataSource = 'gallery';
  if (!window.galleryDataGlobal || !window.galleryDataGlobal[itemIndex]) {
    console.error('Gallery item not found');
    return;
  }

  currentItemIndex = itemIndex;
  currentImageIndex = imageIndex;

  const item = window.galleryDataGlobal[currentItemIndex];
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const lightboxCounter = document.getElementById('lightbox-counter');

  // Set content
  if (item.images && item.images.length > 0) {
    lightboxImage.src = item.images[currentImageIndex];
    lightboxImage.alt = item.title;
  }

  lightboxTitle.textContent = item.title;
  lightboxDescription.textContent = item.description;

  if (item.images && item.images.length > 1) {
    lightboxCounter.textContent = `Image ${currentImageIndex + 1} of ${item.images.length}`;
  } else {
    lightboxCounter.textContent = '';
  }

  // Show lightbox
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  const dataSource = currentDataSource === 'gallery' ? window.galleryDataGlobal : window.shopDataGlobal;
  const item = dataSource[currentItemIndex];

  if (!item || !item.images || item.images.length <= 1) {
    return;
  }

  if (direction === 'next') {
    currentImageIndex = (currentImageIndex + 1) % item.images.length;
  } else if (direction === 'prev') {
    currentImageIndex = (currentImageIndex - 1 + item.images.length) % item.images.length;
  }

  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCounter = document.getElementById('lightbox-counter');

  // Add transition effect
  lightboxImage.style.opacity = '0';
  lightboxImage.style.transform = 'scale(0.95)';

  setTimeout(() => {
    lightboxImage.src = item.images[currentImageIndex];
    lightboxCounter.textContent = `Image ${currentImageIndex + 1} of ${item.images.length}`;

    lightboxImage.style.opacity = '1';
    lightboxImage.style.transform = 'scale(1)';
  }, 150);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightbox = document.getElementById('lightbox');

  // Close button
  lightboxClose.addEventListener('click', closeLightbox);

  // Navigation buttons
  lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
  lightboxNext.addEventListener('click', () => navigateLightbox('next'));

  // Close on background click
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateLightbox('prev');
    } else if (e.key === 'ArrowRight') {
      navigateLightbox('next');
    }
  });

  // Add smooth transition to image
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

  // Initialize demo image lightbox handlers for scanning and imports
  const imageData = {
    scanning: [
      {
        src: '/images/scanning/raptor-versatile-scanning.png',
        title: 'Creality Raptor - Versatile Scanning for All Sizes',
        description: 'Combining line lasers with infrared structured light, the CR-Scan Raptor can scan objects ranging from tiny 5×5×5 mm³ components to large 2000×2000×2000 mm³ items. Effortlessly scans small figurines, bolts, faces, human bodies, automotive components, and more.'
      },
      {
        src: '/images/scanning/raptor-infrared-scanning.png',
        title: 'Creality Raptor - Infrared Structured Light Scanning',
        description: 'The CR-Scan Raptor utilizes speckle matching 3D imaging with markerless scanning capability. No markers needed for feature-rich workpieces - objects can be scanned quickly and directly, making it ideal for reverse engineering, quality control, and digital archiving.'
      }
    ],
    imports: [
      {
        src: '/images/imports/import-demo-1.jpg',
        title: 'Shop from 23 Countries Worldwide',
        description: 'We can source and import products from 23 countries including USA, UK, Canada, China, Japan, Germany, France, Australia, and many more. Access to millions of products not available locally in Namibia.'
      },
      {
        src: '/images/imports/import-demo-2.jpg',
        title: 'Real Import Examples - October 2024',
        description: 'Recent successful imports including smart home devices, sensors, and electronics. All delivered within 2-3 weeks at competitive prices compared to traditional courier services.'
      },
      {
        src: '/images/imports/import-demo-3.jpg',
        title: 'Real Import Examples - September 2024',
        description: 'Various products successfully imported from USA including beauty products, office supplies, pet toys, and household items. Transparent pricing with no hidden fees.'
      }
    ]
  };

  // Add click handlers to all items with data-lightbox attribute
  const lightboxItems = document.querySelectorAll('[data-lightbox]');
  console.log('Found ' + lightboxItems.length + ' lightbox items');

  lightboxItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const type = this.getAttribute('data-lightbox');
      const index = parseInt(this.getAttribute('data-index'));
      console.log('Clicked item type:', type, 'index:', index);

      if (imageData[type] && imageData[type][index]) {
        const img = imageData[type][index];
        console.log('Opening lightbox with:', img.title);
        openImageLightbox(img.src, img.title, img.description);
      } else {
        console.error('Image data not found for type:', type, 'index:', index);
      }
    });
  });
});

// Scanning lightbox function
function openScanningLightbox(itemIndex, imageIndex) {
  currentDataSource = 'scanning';
  if (!window.scanningDataGlobal || !window.scanningDataGlobal[itemIndex]) {
    console.error('Scanning item not found');
    return;
  }

  currentItemIndex = itemIndex;
  currentImageIndex = imageIndex || 0;

  const item = window.scanningDataGlobal[currentItemIndex];
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const lightboxCounter = document.getElementById('lightbox-counter');

  lightboxImage.src = item.image;
  lightboxImage.alt = item.title || 'Scanned object';
  lightboxTitle.textContent = item.title || 'Scanned Object';
  lightboxDescription.textContent = item.description || '';
  lightboxCounter.textContent = '';

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Imports lightbox function
function openImportsLightbox(itemIndex, imageIndex) {
  currentDataSource = 'imports';
  if (!window.importsDataGlobal || !window.importsDataGlobal[itemIndex]) {
    console.error('Import item not found');
    return;
  }

  currentItemIndex = itemIndex;
  currentImageIndex = imageIndex || 0;

  const item = window.importsDataGlobal[currentItemIndex];
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const lightboxCounter = document.getElementById('lightbox-counter');

  lightboxImage.src = item.image;
  lightboxImage.alt = item.title || 'Imported product';
  lightboxTitle.textContent = item.title || 'Imported Product';
  lightboxDescription.textContent = item.description || '';
  lightboxCounter.textContent = '';

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Simple image lightbox for demo images (scanning/imports)
function openImageLightbox(imageSrc, title, description) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const lightboxCounter = document.getElementById('lightbox-counter');

  lightboxImage.src = imageSrc;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
  lightboxDescription.textContent = description;
  lightboxCounter.textContent = '';

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

