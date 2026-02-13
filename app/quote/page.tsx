'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Printer, Zap } from 'lucide-react';

export default function QuotePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-white via-[#f5f5f7] to-white">
        <div className="container-apple">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center mb-16"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6"
            >
              Get a <span className="text-[#36c1b3]">Quote</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[#86868b] max-w-3xl mx-auto"
            >
              What are you interested in? Choose an option below to get started.
            </motion.p>
          </motion.div>

          {/* Quote Options */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* 3D Print Quote */}
            <motion.div variants={itemVariants}>
              <Link href="/#quote">
                <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col justify-between">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#36c1b3]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#36c1b3] transition-colors duration-300">
                      <Printer className="w-10 h-10 text-[#36c1b3] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">3D Print Quote</h2>
                    <p className="text-[#86868b] text-lg mb-6">
                      Get a detailed quote for your 3D printing project. Specify your design, materials, and requirements.
                    </p>
                    <ul className="space-y-3 text-left text-[#86868b]">
                      <li className="flex items-start gap-3">
                        <span className="text-[#36c1b3] font-bold mt-1">✓</span>
                        <span>Material selection (PLA, ABS, PETG, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#36c1b3] font-bold mt-1">✓</span>
                        <span>Turnaround time estimates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#36c1b3] font-bold mt-1">✓</span>
                        <span>Detailed pricing breakdown</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10 mt-8">
                    <span className="inline-flex items-center gap-2 text-[#36c1b3] font-semibold group-hover:gap-3 transition-all duration-300">
                      Get Quote
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* 3D Scan Quote */}
            <motion.div variants={itemVariants}>
              <Link href="/3d-scanning">
                <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col justify-between">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#36c1b3]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#36c1b3] transition-colors duration-300">
                      <Zap className="w-10 h-10 text-[#36c1b3] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h2 className="text-3xl font-semibold text-[#1d1d1f] mb-4">3D Scan Request</h2>
                    <p className="text-[#86868b] text-lg mb-6">
                      Convert your physical objects into precise 3D digital models. Perfect for manufacturing and CAD.
                    </p>
                    <ul className="space-y-3 text-left text-[#86868b]">
                      <li className="flex items-start gap-3">
                        <span className="text-[#36c1b3] font-bold mt-1">✓</span>
                        <span>Multiple scan sizes (Small to Extra Large)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#36c1b3] font-bold mt-1">✓</span>
                        <span>High-accuracy digital models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#36c1b3] font-bold mt-1">✓</span>
                        <span>Multiple export formats</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10 mt-8">
                    <span className="inline-flex items-center gap-2 text-[#36c1b3] font-semibold group-hover:gap-3 transition-all duration-300">
                      Request Scan
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
