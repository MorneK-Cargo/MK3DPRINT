'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { categories, inspirationItems, Category } from '@/lib/inspiration-data';
import CategoryFilter from './category-filter';
import InspirationCard from './inspiration-card';

export default function InspirationGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    activeCategory === 'all'
      ? inspirationItems
      : inspirationItems.filter((item) => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 9);

  return (
    <section id="inspiration" className="py-16 md:py-24 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#36c1b3]/10 rounded-full text-sm font-medium text-[#36c1b3] mb-4">
            <Sparkles className="w-4 h-4" />
            Inspiration Gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-3">
            What Can We Print For You?
          </h2>
          <p className="text-lg text-[#86868b] max-w-2xl mx-auto">
            Browse ideas, pick your favourite, and we'll print it for you.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={(cat) => {
              setActiveCategory(cat);
              setShowAll(false);
            }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
            <InspirationCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Show More */}
        {!showAll && filteredItems.length > 9 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-white text-[#1d1d1f] font-medium rounded-full border border-[#d2d2d7] hover:border-[#36c1b3] hover:text-[#36c1b3] transition-all"
            >
              Show more ideas ({filteredItems.length - 9} more)
            </button>
          </div>
        )}

        {/* Tip */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-[#86868b] mt-8"
        >
          Don't see what you're looking for? Send us any design from{' '}
          <a href="https://www.printables.com" target="_blank" rel="noopener noreferrer" className="text-[#36c1b3] underline">Printables</a>,{' '}
          <a href="https://makerworld.com" target="_blank" rel="noopener noreferrer" className="text-[#36c1b3] underline">MakerWorld</a>, or{' '}
          <a href="https://www.yeggi.com" target="_blank" rel="noopener noreferrer" className="text-[#36c1b3] underline">Yeggi</a>{' '}
          and we'll print it for you.
        </motion.p>
      </div>
    </section>
  );
}
