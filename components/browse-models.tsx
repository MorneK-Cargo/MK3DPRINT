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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto"
        >
          <p className="text-xl text-[#1d1d1f] mb-6">
            <strong>Found something you’d like to print?</strong><br />
            Send us the link and we’ll provide a quote within 24 hours!
          </p>
          <Link href="#quote" className="btn-apple btn-primary px-8 py-4">
            Get a Quote
          </Link>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-20 border-t border-[#d2d2d7]"
        >
          <h3 className="text-3xl font-semibold text-center text-[#1d1d1f] mb-4">How It Works</h3>
          <p className="section-intro">From design to delivery in three simple steps</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Find or Design',
                description: 'Browse Printables, MakerWorld, or Yeggi for thousands of free models, or send us your custom STL file. Can\'t find what you need? We can help source the perfect design.'
              },
              {
                step: 2,
                title: 'Get a Quote',
                description: 'Submit your project details using our quote form or send the model link via WhatsApp. We\'ll provide material options, pricing, and estimated production time within 24 hours.'
              },
              {
                step: 3,
                title: 'We Print & Deliver',
                description: 'Once approved, your item is printed with precision using quality materials. We\'ll keep you updated on progress and deliver your finished print directly to you in Windhoek.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center relative"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#36c1b3] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-[#1d1d1f] mt-4 mb-4">{item.title}</h4>
                <p className="text-[#86868b] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#86868b]">
              Questions?{' '}
              <a href="https://wa.me/264836750117" className="text-[#36c1b3] font-semibold hover:underline">
                Chat with us on WhatsApp
              </a>{' '}
              or{' '}
              <Link href="#contact" className="text-[#36c1b3] font-semibold hover:underline">
                get in touch
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
