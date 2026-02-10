'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-[#f5f5f7]">
      <div className="container-apple py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] mb-6"
          >
            Precision 3D Printing<br />
            <span className="text-[#36c1b3]">in Windhoek</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#86868b] leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            A one-man startup business specializing in 3D scanning and 3D printing for local solutions. 
            We also source and import smaller products directly from overseas—from Amazon, Walmart, 
            and other international retailers in the USA, Europe, and Asia—delivering them to you at 
            significantly more affordable prices than traditional courier services.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[#86868b] mb-10"
          >
            Fast, reliable, and focused on solving your sourcing challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="#browse-models" className="btn-apple btn-primary text-lg px-8 py-4">
              Browse 3D Models
            </Link>
            <Link href="#quote" className="btn-apple btn-secondary text-lg px-8 py-4">
              Request a Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-[#86868b]"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#36c1b3]">✓</span> Honest
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#36c1b3]">✓</span> Transparent
            </span>
            <span className="flex items-center gap-2">
              <span className="text-[#36c1b3]">✓</span> Open
            </span>
          </motion.div>

          {/* Service Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#scanning"
              className="px-6 py-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-[#1d1d1f] font-medium"
            >
              3D Scanning
            </Link>
            <Link
              href="#shop"
              className="px-6 py-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-[#1d1d1f] font-medium"
            >
              3D Printing
            </Link>
            <Link
              href="#imports"
              className="px-6 py-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-[#1d1d1f] font-medium"
            >
              Imports
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
