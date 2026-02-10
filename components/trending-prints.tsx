'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Heart, Download, Eye, Loader2, RefreshCw, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface PrintItem {
  id: number;
  name: string;
  thumbnail: string;
  url: string;
  creator: string;
  creatorUrl?: string;
  likes: number;
  downloads: number;
  views: number;
  description: string;
}

interface ApiResponse {
  items: PrintItem[];
  source: string;
  message?: string;
  error?: string;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
};

export default function TrendingPrints() {
  const [prints, setPrints] = useState<PrintItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<string>('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const fetchPrints = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/thingiverse?category=popular&per_page=8');
      const data: ApiResponse = await response.json();
      setPrints(data.items);
      setSource(data.source);
    } catch (error) {
      console.error('Failed to fetch prints:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrints();
  }, []);

  return (
    <section id="trending" className="py-24 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 mb-6">
            <TrendingUp className="w-4 h-4 text-[#36c1b3]" />
            Popular on Thingiverse
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Trending 3D Prints
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover what the community is printing. Get inspired and find your next project.
          </p>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#36c1b3]" />
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {prints.map((print, index) => (
                  <motion.a
                    key={print.id}
                    href={print.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredId(print.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src={print.thumbnail}
                        alt={print.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder-3d.svg';
                        }}
                      />
                      
                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredId === print.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-4"
                      >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900">
                          View on Thingiverse
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 line-clamp-1 mb-1 group-hover:text-[#36c1b3] transition-colors">
                        {print.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        by {print.creator}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5" />
                          {formatNumber(print.likes)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Download className="w-3.5 h-3.5" />
                          {formatNumber(print.downloads)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {formatNumber(print.views)}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Refresh & Source info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            >
              <button
                onClick={fetchPrints}
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#36c1b3] transition-all shadow-sm"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              
              <a
                href="https://www.thingiverse.com/explore/popular"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#36c1b3] rounded-full text-sm font-medium text-white hover:bg-[#2da99c] transition-all shadow-sm"
              >
                Explore More on Thingiverse
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>


          </>
        )}
      </div>
    </section>
  );
}
