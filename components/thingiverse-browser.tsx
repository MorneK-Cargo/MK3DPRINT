'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, ExternalLink, Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ThingiverseModel {
  id: number;
  name: string;
  description: string;
  creator: string;
  url: string;
  thumbnail: string;
  likes: number;
  imageUrl: string;
}

export default function ThingiverseBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [trendingModels] = useState<ThingiverseModel[]>([
    {
      id: 1,
      name: 'Phone Stand',
      description: 'Adjustable phone stand for desk. Great for video calls and streaming.',
      creator: 'Community',
      url: 'https://www.thingiverse.com/search?q=phone+stand&type=things&sort=relevant',
      thumbnail: '📱',
      likes: 5400,
      imageUrl: 'https://cdn.thingiverse.com/assets/1e/34/b5/7f/82/Screen_Shot_2017-06-06_at_3.46.31_PM.png'
    },
    {
      id: 2,
      name: 'Cable Organizer',
      description: 'Keep your desk cables neat and organized with this practical organizer.',
      creator: 'Community',
      url: 'https://www.thingiverse.com/search?q=cable+organizer&type=things&sort=relevant',
      thumbnail: '🔌',
      likes: 3200,
      imageUrl: 'https://cdn.thingiverse.com/assets/2f/51/54/f3/1b/Large_Display.jpg'
    },
    {
      id: 3,
      name: 'Plant Pot',
      description: 'Elegant plant pot with drainage holes. Multiple sizes available.',
      creator: 'Community',
      url: 'https://www.thingiverse.com/search?q=plant+pot&type=things&sort=relevant',
      thumbnail: '🌱',
      likes: 2800,
      imageUrl: 'https://cdn.thingiverse.com/assets/7c/fa/4f/90/f4/large_display.jpg'
    },
    {
      id: 4,
      name: 'Desk Organizer',
      description: 'Multi-compartment desk organizer for pens, clips, and small items.',
      creator: 'Community',
      url: 'https://www.thingiverse.com/search?q=desk+organizer&type=things&sort=relevant',
      thumbnail: '📚',
      likes: 4100,
      imageUrl: 'https://cdn.thingiverse.com/assets/07/63/54/75/42/large_display.jpg'
    },
    {
      id: 5,
      name: 'Door Hanger',
      description: 'Custom door hanger for office or room. Easy to customize.',
      creator: 'Community',
      url: 'https://www.thingiverse.com/search?q=door+hanger&type=things&sort=relevant',
      thumbnail: '🚪',
      likes: 1900,
      imageUrl: 'https://cdn.thingiverse.com/assets/0f/47/a1/0a/92/large_display.jpg'
    },
    {
      id: 6,
      name: 'Pen Holder',
      description: 'Stylish pen holder to organize your writing instruments.',
      creator: 'Community',
      url: 'https://www.thingiverse.com/search?q=pen+holder&type=things&sort=relevant',
      thumbnail: '✏️',
      likes: 3600,
      imageUrl: 'https://cdn.thingiverse.com/assets/87/ba/3d/c0/2f/large_display.jpg'
    }
  ]);

  const searchThingiverseCategory = (category: string) => {
    const url = `https://www.thingiverse.com/search?q=${encodeURIComponent(category)}&type=things&sort=relevant`;
    window.open(url, '_blank');
  };

  const handleSearch = (query: string = searchQuery) => {
    if (!query.trim()) return;
    searchThingiverseCategory(query);
    setSearchQuery('');
  };

  const openThingiverse = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="thingiverse-browser" className="section bg-[#f5f5f7]">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Browse Thingiverse Models</h2>
          <p className="section-intro">
            Discover thousands of 3D-printable designs from Thingiverse. Find inspiration or send us a model to print!
          </p>
        </motion.div>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-[#1d1d1f] mb-6">
            Search for 3D Models to Print
          </h3>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868b] w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Thingiverse (e.g., phone stand, gear, vase...)"
              className="w-full pl-12 pr-4 py-4 bg-[#f5f5f7] rounded-xl border-2 border-transparent focus:border-[#36c1b3] transition-colors text-[#1d1d1f]"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button
            onClick={() => handleSearch()}
            className="w-full btn-apple btn-primary px-6 py-3 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            Search on Thingiverse
          </button>
        </motion.div>

        {/* Quick Search Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center text-[#1d1d1f] mb-6">
            Popular Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Phone Stand', 'Cable Organizer', 'Desk Organizer', 'Plant Pot', 'Drawer Organizer', 'Phone Holder', 'Tool Holder', 'Box & Container'].map((category) => (
              <button
                key={category}
                onClick={() => searchThingiverseCategory(category)}
                className="px-4 py-3 bg-white rounded-2xl border-2 border-[#d2d2d7] text-[#1d1d1f] font-medium hover:border-[#36c1b3] hover:text-[#36c1b3] transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Models Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-left text-[#1d1d1f] mb-8">
            Trending Models
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trendingModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Model Image */}
                <div className="h-40 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={model.imageUrl}
                    alt={model.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Model Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg font-semibold text-[#1d1d1f] mb-2">
                    {model.name}
                  </h4>
                  <p className="text-[#86868b] text-sm mb-4 flex-1">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#d2d2d7]">
                    <span className="text-xs text-[#86868b]">
                      👍 {model.likes.toLocaleString()}
                    </span>
                    <button
                      onClick={() => openThingiverse(model.url)}
                      className="btn-apple btn-primary text-sm px-4 py-2 flex items-center gap-2"
                    >
                      View
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-12 shadow-lg text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-6">
            How to Get Your Design Printed
          </h3>
          <p className="text-[#86868b] mb-8 leading-relaxed">
            Found a model you'd like to print? Simply copy the Thingiverse link and send it to us via WhatsApp.
            We'll review the design, calculate the cost based on material and time, and provide you with a quote within 24 hours.
          </p>
          <a
            href="https://wa.me/264836750117?text=Hi%2C%20I%20found%20a%20model%20on%20Thingiverse%20that%20I%27d%20like%20to%20print"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple btn-primary px-8 py-4 text-lg inline-flex items-center gap-2"
          >
            Send us a Model Link on WhatsApp
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* More Models CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#86868b] mb-6">
            Want to explore more? Visit Thingiverse directly to browse the complete collection.
          </p>
          <a
            href="https://www.thingiverse.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple btn-secondary px-8 py-3 inline-flex items-center gap-2"
          >
            Explore All Models
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
