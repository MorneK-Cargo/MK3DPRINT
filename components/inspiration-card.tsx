'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Printer } from 'lucide-react';
import { InspirationItem, categories } from '@/lib/inspiration-data';

interface InspirationCardProps {
  item: InspirationItem;
  index: number;
}

export default function InspirationCard({ item, index }: InspirationCardProps) {
  const categoryMeta = categories.find((c) => c.slug === item.category);

  const handleGetPrinted = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      // Update URL with item param for the quote form to pick up
      const url = new URL(window.location.href);
      url.searchParams.set('item', item.title);
      window.history.replaceState({}, '', url.toString());
      // Dispatch a popstate-like event so the quote form re-reads params
      window.dispatchEvent(new Event('inspiration-select'));
      quoteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-3d.svg';
          }}
        />
        {/* Category Badge */}
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
          style={{ backgroundColor: categoryMeta?.color || '#36c1b3' }}
        >
          {categoryMeta?.name}
        </span>
        {/* Price Badge */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1d1d1f] px-3 py-1 rounded-full text-xs font-semibold">
          N${item.priceEstimate.min}–{item.priceEstimate.max}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1d1d1f] mb-1 group-hover:text-[#36c1b3] transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-[#86868b] mb-4 line-clamp-2">
          {item.description}
        </p>
        <button
          onClick={handleGetPrinted}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#36c1b3] hover:bg-[#2da99c] text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-sm"
        >
          <Printer className="w-4 h-4" />
          Get This Printed
        </button>
      </div>
    </motion.div>
  );
}
