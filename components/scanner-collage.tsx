'use client';

import { motion } from 'framer-motion';

export default function ScannerCollage() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
      alt: 'Professional 3D scanning in industrial setting',
      span: 'md:col-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1581092168562-40038f63dd5b?w=400&h=400&fit=crop',
      alt: 'Precision scanning of mechanical components',
      span: 'md:col-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=400&fit=crop',
      alt: 'Medical device scanning application',
      span: 'md:col-span-1',
    },
    {
      src: '/images/scanning/raptor-versatile-scanning.png',
      alt: 'Handheld 3D scanner device in operation',
      span: 'md:col-span-2',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow group ${image.span}`}
            >
              <div className="aspect-square md:aspect-auto relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
