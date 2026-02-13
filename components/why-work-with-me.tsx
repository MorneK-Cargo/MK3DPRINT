'use client';

import { motion } from 'framer-motion';
import { aboutInfo } from '@/lib/data';

export default function WhyWorkWithMe() {
  return (
    <section className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="section-title text-center mb-12">Why Work With MK 3D Printing</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f5f5f7] rounded-3xl p-8"
          >
            <ul className="space-y-4">
              {aboutInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
