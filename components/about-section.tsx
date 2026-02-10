'use client';

import { motion } from 'framer-motion';
import { aboutInfo } from '@/lib/data';

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About MK 3D Printing and investments CC</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-6">My Story</h3>
            {aboutInfo.story.map((para, index) => (
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
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-6">Why Work With Me</h3>
            <ul className="space-y-4">
              {aboutInfo.benefits.map((benefit, index) => (
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
