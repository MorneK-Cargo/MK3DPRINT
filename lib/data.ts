// MK 3D Print - Data

export const services = [
  {
    id: '3d-printing',
    title: '3D Printing',
    description: 'Precision 3D printing for prototypes, functional parts, and custom solutions tailored to your needs.',
    features: [
      'Multiple material options',
      'High precision & detail',
      'Agreed production times',
      'Cost-effective solutions'
    ],
    icon: 'printer'
  },
  {
    id: 'product-imports',
    title: 'Product Imports',
    description: 'Import smaller products directly from USA, Europe, and Asia. Significant cost savings on transport with fast 2-3 week delivery—without the massive costs of traditional importing. Available on request only.',
    features: [
      'USA, Europe & Asia sourcing',
      '2-3 weeks delivery time',
      'Significant cost savings',
      'Direct from destination'
    ],
    icon: 'package'
  },
  {
    id: '3d-scanning',
    title: '3D Scanning',
    description: 'Advanced scanning services to digitize physical objects and create precise digital files for reproduction or analysis.',
    features: [
      'Precision capture',
      'Reverse engineering',
      'Quality control',
      'Digital archiving'
    ],
    icon: 'scan'
  }
];

export const shopProducts = [
  {
    id: 'sample-item-1',
    title: 'Drill Dust Collector',
    price: 'N$ 35',
    images: [
      '/images/products/sample-item-1/image1.jpg',
      '/images/products/sample-item-1/image2.jpg',
      '/images/products/sample-item-1/image3.jpg'
    ],
    description: 'What happens in the wall... stays OFF the floor! This genius dust catcher saves you from the "oops I drilled without a vacuum again" dance. No more explaining to your spouse why there\'s concrete dust on the cat. Works for both lefties and righties because discrimination is SO last century. 360° protection from your own mess!',
    whatsapp: 'Drill Dust Collector'
  },
  {
    id: 'sample-item-2',
    title: 'Screw Measuring Tool, M2-M10, 4-120mm',
    price: 'N$ 50',
    images: [
      '/images/products/sample-item-2/image1.jpg',
      '/images/products/sample-item-2/image2.jpg',
      '/images/products/sample-item-2/image3.jpg'
    ],
    description: 'End the "is this M6 or M8?" guessing game forever! Tired of making three trips to the hardware store because you SWORE it was the right size? This magical ruler identifies M2-M10 screws from 4-120mm instantly.',
    whatsapp: 'Screw%20Measuring%20Tool'
  },
  {
    id: 'sample-item-3',
    title: 'Door Hanger - Downloading',
    price: 'N$ 45',
    images: [
      '/images/products/sample-item-3/image1.jpg',
      '/images/products/sample-item-3/image2.jpg',
      '/images/products/sample-item-3/image3.jpg'
    ],
    description: 'The perfect bathroom door hanger for those extended "downloads". Hang this on your door and everyone will know you\'re in the middle of an important data transfer. Features a progress bar that\'s way more honest than your web browser\'s.',
    whatsapp: 'Door%20Hanger%20Downloading'
  },
  {
    id: 'sample-item-4',
    title: 'Battery Holder AA & AAA',
    price: 'N$ 40',
    images: [
      '/images/products/sample-item-4/image1.jpg',
      '/images/products/sample-item-4/image2.jpg',
      '/images/products/sample-item-4/image3.jpg'
    ],
    description: 'Stop the battery chaos! Keep your AA and AAA batteries neatly organized in one convenient holder. No more digging through junk drawers or testing dead batteries. Simple, practical, and keeps you organized.',
    whatsapp: 'Battery%20Holder'
  },
  {
    id: 'sample-item-5',
    title: 'Gravity Towel Hook',
    price: 'N$ 25',
    images: [
      '/images/products/sample-item-5/image1.jpg',
      '/images/products/sample-item-5/image2.jpg',
      '/images/products/sample-item-5/image3.jpg'
    ],
    description: 'Defying physics, one towel at a time! This hook uses the ancient power of gravity (discovered by that apple guy) to keep your towels exactly where you hung them. No screws, no anchors, no "oops I drilled into a water pipe" moments.',
    whatsapp: 'Gravity%20Towel%20Hook'
  }
];

export const galleryItems = [];

export const platforms = [
  {
    name: 'Yeggi',
    url: 'https://www.yeggi.com',
    description: 'The ultimate 3D model search engine. Search across millions of models from all major platforms in one place.',
    features: ['Search across all sites', 'Millions of free models', 'Advanced filtering', 'Best for discovery']
  },
  {
    name: 'Printables',
    url: 'https://www.printables.com',
    description: 'One of the largest communities of 3D printing enthusiasts. Thousands of high-quality, tested designs.',
    features: ['100% free downloads', 'Active community', 'Tested designs', 'Print settings included']
  },
  {
    name: 'MakerWorld',
    url: 'https://makerworld.com',
    description: 'Bambu Lab\'s official platform for sharing and discovering creative 3D designs from makers worldwide.',
    features: ['High-quality models', 'Verified creators', 'Print profiles', 'Growing library']
  }
];

export const scanningInfo = {
  title: 'Our Scanning Technology',
  description: [
    'We use the advanced Creality CR-Scan Raptor, a professional-grade 3D scanner that captures intricate details with remarkable accuracy. This portable scanner allows us to digitize almost any object, creating precise 3D models for reproduction, modification, or archival purposes.',
    'The CR-Scan Raptor combines line lasers with infrared structured light technology, offering versatile scanning capabilities for objects ranging from tiny 5×5×5 mm³ components to large 2000×2000×2000 mm³ items. It can effortlessly scan small figurines, bolts, faces, human bodies, automotive components, and more.',
    'Using advanced infrared structured light scanning with speckle matching 3D imaging, the Raptor requires no markers for feature-rich workpieces. Objects can be scanned quickly and directly, making it ideal for reverse engineering, quality control, and digital archiving.',
    'From small mechanical parts to larger sculptures, our scanning technology preserves every detail of your object in the digital realm—ready for analysis, modification, or 3D printing reproduction.'
  ],
  capabilities: [
    'Small to medium objects: jewelry, mechanical parts, household items, sculptures',
    'Complex geometries: intricate details, curved surfaces, hard-to-measure components',
    'Reverse engineering: create CAD models from existing parts for reproduction or modification',
    'Quality control: compare manufactured parts against original designs',
    'Digital archiving: preserve physical objects as accurate digital models',
    'Works with various materials: plastic, metal, wood, ceramic'
  ],
  images: [
    '/images/scanning/raptor-versatile-scanning.png',
    '/images/scanning/raptor-infrared-scanning.png'
  ]
};

export const importsInfo = {
  title: 'Direct Imports from USA, Europe & Asia',
  description: [
    "Can't find what you need locally? We offer a cost-effective import service for smaller products directly from international retailers like Amazon, Walmart, and other major suppliers across the USA, Europe, and Asia.",
    "Share the product link or description with us, we'll calculate the total cost including shipping, and once approved, we handle the entire import process. Your product arrives in 2-3 weeks at a fraction of traditional courier costs.",
    'Available on request only. Minimum order requirements may apply.'
  ],
  benefits: [
    'Shop from 23 countries worldwide including USA, Europe & Asia',
    'Significant savings compared to traditional courier services',
    'Access to products not available in Namibia',
    'Transparent pricing with no hidden fees',
    '2-3 week delivery timeframe',
    'Perfect for specialized tools, electronics, hobby items, and more'
  ],
  images: [
    {
      title: 'Electronics & Audio Equipment',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Smart Home & Automation',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop&q=80'
    },
    {
      title: 'Home Security & Smart Devices',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80'
    }
  ]
};

export const aboutInfo = {
  story: [
    'MK 3D Printing and investments CC was born from a passion for technology, fabrication, and problem-solving. During the COVID-19 pandemic, I invested in a 3D printer to tackle household projects and repair broken items—discovering the incredible power of turning digital designs into physical reality.',
    "As I developed my 3D printing and scanning capabilities, I encountered a fundamental challenge: some items simply can't be 3D printed. That's when my existing import network became the missing piece. I realized I could combine my 3D design and fabrication expertise with direct sourcing from the world's largest markets.",
    "Today, MK 3D Printing and investments CC offers a complete solution. Need a custom bracket? I'll design and 3D print it. Need to replace a sensor? I'll import it directly. This integrated approach is what sets this startup apart."
  ],
  benefits: [
    'Several years of hands-on experience in 3D printing and fabrication',
    'Reliable, well-maintained equipment for consistent quality',
    'Dedicated personal support—involved in every project',
    'Realistic and competitive pricing',
    'Complete support from design to delivery',
    'Locally based in Windhoek, Namibia'
  ]
};

export const featuredProducts = [
  {
    id: 'photo-trophy',
    title: 'Photo to 3D Print',
    price: 'TBC',
    image: '/images/gallery/photo-trophy-1.jpg',
    description: 'Transform your favorite photo into a stunning 3D printed trophy! Personalized with names, dates, and decorative elements. Perfect for birthdays, anniversaries, and achievements.',
    whatsapp: 'Photo%20to%203D%20Print'
  },
  {
    id: 'darth-vader-monitor',
    title: 'Darth Vader Monitor Figurine',
    price: 'N$ 100',
    image: 'https://cdn.jsdelivr.net/gh/MorneK-Cargo/mk3dprint@main/public/images/figurines/darth-vader.jpg',
    description: 'Premium Darth Vader collectible figurine - perfect desk companion',
    whatsapp: 'Darth%20Vader%20Monitor%20Figurine'
  },
  {
    id: 'stormtrooper-figurine',
    title: 'Stormtrooper Figurine',
    price: 'N$ 100',
    image: 'https://cdn.jsdelivr.net/gh/MorneK-Cargo/mk3dprint@main/public/images/figurines/stormtrooper.jpg',
    description: 'Classic Stormtrooper figurine - premium quality',
    whatsapp: 'Stormtrooper%20Figurine'
  }
];

export const contactInfo = {
  email: 'info@mk3dprint.org',
  whatsapp: '+264 83 675 0117',
  whatsappLink: 'https://wa.me/264836750117',
  location: 'Windhoek, Namibia'
};
