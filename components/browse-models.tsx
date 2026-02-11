'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function BrowseModels() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchPlatform = (platform: string) => {
    if (!searchQuery.trim()) return;
    
    const urls: Record<string, string> = {
      'yeggi': `https://www.yeggi.com/q/${encodeURIComponent(searchQuery)}/`,
      'printables': `https://www.printables.com/search/models?q=${encodeURIComponent(searchQuery)}`,
      'makerworld': `https://makerworld.com/en/search?q=${encodeURIComponent(searchQuery)}`
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank');
      setSearchQuery('');
    }
  };

  return (
    <section id="browse-models" className="section section-alt">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Explore 3D Printable Designs</h2>
          <p className="section-intro">Find the perfect design from the world’s largest 3D model libraries</p>
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
            Search Thousands of Free 3D Models
          </h3>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#86868b] w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for 3D models (e.g., phone stand, vase, gear...)"
              className="w-full pl-12 pr-4 py-4 bg-[#f5f5f7] rounded-xl border-2 border-transparent focus:border-[#36c1b3] transition-colors text-[#1d1d1f]"
              onKeyDown={(e) => e.key === 'Enter' && searchPlatform('makerworld')}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => searchPlatform('makerworld')}
              className="btn-apple btn-primary px-6 py-3 flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search MakerWorld
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
