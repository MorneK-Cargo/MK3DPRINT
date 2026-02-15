'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { importsInfo } from '@/lib/data';

export default function ImportsSection() {
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

        {/* Import Demo Images - Clickable to Amazon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {importsInfo.images.map((item, index) => (
            <a
              key={index}
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-video relative rounded-2xl overflow-hidden bg-[#f5f5f7] shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
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
    </section>
  );
}
