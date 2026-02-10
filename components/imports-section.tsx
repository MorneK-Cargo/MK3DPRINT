'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { importsInfo } from '@/lib/data';
import { useState } from 'react';

export default function ImportsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="imports" className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Product Imports</h2>
          <p className="section-intro">Affordable international product sourcing</p>
        </motion.div>

        {/* Import Demo Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {importsInfo.images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="aspect-video relative rounded-2xl overflow-hidden bg-[#f5f5f7] shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            >
              <Image
                src={img}
                alt={`Import demo ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">{importsInfo.title}</h3>
            {importsInfo.description.map((para, index) => (
              <p key={index} className="text-[#86868b] leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f5f5f7] rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-6">Why Import With Us</h3>
            <ul className="space-y-4">
              {importsInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <Image
              src={selectedImage}
              alt="Import demo"
              width={800}
              height={600}
              className="rounded-2xl object-contain max-h-[80vh] w-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
