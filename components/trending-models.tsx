'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface Model {
  id: string;
  name: string;
  creator: string;
  thumbnail: string;
  url: string;
  category?: string;
}

// Curated trending models from popular 3D printing platforms
const CURATED_MODELS: Model[] = [
  {
    id: '1',
    name: 'Functional Desk Organizer',
    creator: 'PrintDesigner',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134ef2944f5?w=400&h=300&fit=crop',
    url: 'https://www.printables.com',
    category: 'Organizer'
  },
  {
    id: '2',
    name: 'Phone Stand Pro',
    creator: 'MakerStudio',
    thumbnail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop',
    url: 'https://makerworld.com',
    category: 'Phone Accessories'
  },
  {
    id: '3',
    name: 'Cable Management Box',
    creator: 'TechPrinter',
    thumbnail: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop',
    url: 'https://www.yeggi.com',
    category: 'Storage'
  },
  {
    id: '4',
    name: 'Plant Pot with Drainage',
    creator: 'GardenMaker',
    thumbnail: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop',
    url: 'https://www.printables.com',
    category: 'Garden'
  },
  {
    id: '5',
    name: 'Modular Shelf Brackets',
    creator: 'BuilderTools',
    thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
    url: 'https://makerworld.com',
    category: 'Home'
  },
  {
    id: '6',
    name: 'Articulated Dragon Toy',
    creator: 'FunDesigns',
    thumbnail: 'https://images.unsplash.com/photo-1617638924702-92f37fcb0f6d?w=400&h=300&fit=crop',
    url: 'https://www.yeggi.com',
    category: 'Toys'
  },
  {
    id: '7',
    name: 'Mechanical Keyboard Case',
    creator: 'KeyCraft',
    thumbnail: 'https://images.unsplash.com/photo-1587829191301-26d5e67342d2?w=400&h=300&fit=crop',
    url: 'https://www.printables.com',
    category: 'Electronics'
  },
  {
    id: '8',
    name: 'Customizable Lithophane Frame',
    creator: 'ArtPrinter',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=400&h=300&fit=crop',
    url: 'https://makerworld.com',
    category: 'Art & Decor'
  },
  {
    id: '9',
    name: 'Adjustable LED Lamp Base',
    creator: 'LightDesign',
    thumbnail: 'https://images.unsplash.com/photo-1565636192335-14a38d8ae3b0?w=400&h=300&fit=crop',
    url: 'https://www.yeggi.com',
    category: 'Lighting'
  },
  {
    id: '10',
    name: 'Hexagonal Wall Shelves',
    creator: 'WallArt',
    thumbnail: 'https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=400&h=300&fit=crop',
    url: 'https://www.printables.com',
    category: 'Storage'
  },
  {
    id: '11',
    name: 'Fidget Spinner Hybrid',
    creator: 'ToyMaker',
    thumbnail: 'https://images.unsplash.com/photo-1589985643562-40460ef6bfe5?w=400&h=300&fit=crop',
    url: 'https://makerworld.com',
    category: 'Toys'
  },
  {
    id: '12',
    name: 'Multi-Tool Organizer Rack',
    creator: 'WorkshopPro',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    url: 'https://www.yeggi.com',
    category: 'Tools'
  }
];

export default function TrendingModels() {
  const [models, setModels] = useState<Model[]>(CURATED_MODELS);
  const [filteredModels, setFilteredModels] = useState<Model[]>(CURATED_MODELS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    let filtered = models;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        model =>
          model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          model.creator.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(model => model.category === selectedCategory);
    }

    setFilteredModels(filtered);
  }, [searchQuery, selectedCategory, models]);

  const categories = Array.from(
    new Set(models.map(m => m.category).filter((c): c is string => Boolean(c)))
  );

  return (
    <section className="section bg-[#f5f5f7]">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Browse Trending 3D Models</h2>
          <p className="text-center text-[#86868b] text-lg max-w-2xl mx-auto mb-12">
            Explore popular designs from our community. Click any model to view it on the original platform.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#86868b] w-5 h-5" />
            <input
              type="text"
              placeholder="Search models by name or creator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-[#d5d5d7] bg-white text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#36c1b3] transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === null
                ? 'bg-[#36c1b3] text-white'
                : 'bg-white text-[#1d1d1f] border-2 border-[#d5d5d7] hover:border-[#36c1b3]'
            }`}
          >
            All Models
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-[#36c1b3] text-white'
                  : 'bg-white text-[#1d1d1f] border-2 border-[#d5d5d7] hover:border-[#36c1b3]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredModels.map((model, index) => (
            <motion.a
              key={model.id}
              href={model.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                {/* Model Image */}
                <div className="relative overflow-hidden h-48 bg-[#f5f5f7]">
                  <img
                    src={model.thumbnail}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Model Info */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#36c1b3] transition-colors line-clamp-2">
                    {model.name}
                  </h3>
                  <p className="text-sm text-[#86868b] mb-3 flex-1">By {model.creator}</p>
                  
                  {model.category && (
                    <span className="inline-block text-xs bg-[#36c1b3] bg-opacity-10 text-[#36c1b3] px-3 py-1 rounded-full mb-3 w-fit">
                      {model.category}
                    </span>
                  )}

                  <button className="w-full py-2 bg-[#36c1b3] text-white rounded-lg font-medium group-hover:bg-[#2aa39a] transition-colors">
                    View Model →
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* No Results Message */}
        {filteredModels.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#86868b] text-lg">No models found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="mt-4 px-6 py-2 bg-[#36c1b3] text-white rounded-lg font-medium hover:bg-[#2aa39a] transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Explore More Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 pt-12 border-t-2 border-[#d5d5d7]"
        >
          <p className="text-[#86868b] mb-6">Want to explore even more models?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.printables.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#36c1b3] text-white rounded-lg font-medium hover:bg-[#2aa39a] transition-colors"
            >
              Visit Printables →
            </a>
            <a
              href="https://www.yeggi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#36c1b3] text-[#36c1b3] rounded-lg font-medium hover:bg-[#36c1b3] hover:text-white transition-colors"
            >
              Visit Yeggi →
            </a>
            <a
              href="https://makerworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#36c1b3] text-[#36c1b3] rounded-lg font-medium hover:bg-[#36c1b3] hover:text-white transition-colors"
            >
              Visit MakerWorld →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
