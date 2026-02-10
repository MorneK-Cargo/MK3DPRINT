'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { galleryItems } from '@/lib/data';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (item: typeof galleryItems[0]) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length);
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
    }
  };

  return (
    <section id="gallery" className="section section-alt">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Gallery</h2>
          <p className="section-intro">Showcase of our completed projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">{item.title}</h4>
                <p className="text-[#86868b] text-sm line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-black">
              <Image
                src={selectedItem.images[currentImageIndex]}
                alt={selectedItem.title}
                fill
                className="object-contain"
              />
            </div>

            {selectedItem.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#f5f5f7] transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#f5f5f7] transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg"
            >
              ×
            </button>

            <div className="bg-white rounded-2xl p-6 mt-4">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">{selectedItem.title}</h3>
              <p className="text-[#86868b] leading-relaxed">{selectedItem.description}</p>
              {selectedItem.images.length > 1 && (
                <p className="text-sm text-[#36c1b3] mt-4 font-medium">
                  Image {currentImageIndex + 1} of {selectedItem.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
