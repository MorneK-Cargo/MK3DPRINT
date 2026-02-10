'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { shopProducts } from '@/lib/data';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Box } from 'lucide-react';

export default function ShopSection() {
  const [selectedProduct, setSelectedProduct] = useState<typeof shopProducts[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="shop" className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Shop</h2>
          <p className="section-intro">Items already printed</p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#f5f5f7] transition-colors -ml-6"
          >
            <ChevronLeft className="w-6 h-6 text-[#1d1d1f]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2 -mx-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {shopProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 bg-[#f5f5f7] rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square relative bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] flex items-center justify-center">
                  {product.images && product.images.length > 0 ? (
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#86868b]">
                      <Box className="w-16 h-16 mb-2 text-[#36c1b3]" />
                      <span className="text-sm font-medium">3D Printed</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-[#1d1d1f] mb-2 line-clamp-2">{product.title}</h4>
                  <p className="text-[#86868b] text-sm mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#36c1b3]">{product.price}</span>
                    <a
                      href={`https://wa.me/264834290501?text=Hi%2C%20I%27m%20interested%20in%20${product.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-apple btn-primary text-sm px-4 py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Order
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#f5f5f7] transition-colors -mr-6"
          >
            <ChevronRight className="w-6 h-6 text-[#1d1d1f]" />
          </button>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video relative bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] flex items-center justify-center">
              {selectedProduct.images && selectedProduct.images.length > 0 ? (
                <Image
                  src={selectedProduct.images[0]}
                  alt={selectedProduct.title}
                  fill
                  className="object-contain p-8"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#86868b]">
                  <Box className="w-24 h-24 mb-4 text-[#36c1b3]" />
                  <span className="text-lg font-medium">3D Printed Product</span>
                </div>
              )}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{selectedProduct.title}</h3>
              <p className="text-[#86868b] leading-relaxed mb-6">{selectedProduct.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[#36c1b3]">{selectedProduct.price}</span>
                <a
                  href={`https://wa.me/264834290501?text=Hi%2C%20I%27m%20interested%20in%20${selectedProduct.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apple btn-primary px-6 py-3"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
