'use client';

import { motion } from 'framer-motion';
import { Printer, Package, ScanLine } from 'lucide-react';
import { services } from '@/lib/data';

const icons = {
  printer: Printer,
  package: Package,
  scan: ScanLine,
};

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-intro">Comprehensive 3D solutions tailored to your needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#f5f5f7] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#36c1b3]/10 flex items-center justify-center mb-6 group-hover:bg-[#36c1b3] group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#36c1b3] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">{service.title}</h3>
                <p className="text-[#86868b] mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#1d1d1f]">
                      <span className="text-[#36c1b3] font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
