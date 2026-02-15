'use client';

import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { featuredProducts } from '@/lib/data';

export default function FeaturedProducts() {
  const handleWhatsApp = (product: typeof featuredProducts[0]) => {
    const message = `Hi! I'm interested in the ${product.title} for ${product.price}. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/264836750117?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#36c1b3]/10 rounded-full text-sm font-medium text-[#36c1b3] mb-4">
            <Star className="w-4 h-4" />
            Premium Figurines
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-3">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exclusive collectible figurines - limited availability
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  unoptimized={product.image.startsWith('http')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-3d.svg';
                  }}
                />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#36c1b3] text-white px-4 py-2 rounded-full font-semibold text-lg">
                  {product.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#36c1b3] transition-colors">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => handleWhatsApp(product)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#36c1b3] hover:bg-[#2da99c] text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
