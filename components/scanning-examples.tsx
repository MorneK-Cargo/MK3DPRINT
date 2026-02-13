'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ScanExample {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  capabilities: string[];
}

const scanExamples: ScanExample[] = [
  {
    id: '1',
    title: 'Auto Parts',
    category: 'Automotive',
    description: 'Precision scanning of automotive components for reverse engineering, manufacturing, and quality assurance.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
    capabilities: ['OEM specifications', 'Manufacturing ready', 'CAD integration']
  },
  {
    id: '2',
    title: 'Reverse Engineering',
    category: 'Manufacturing',
    description: 'Complex mechanical assemblies scanned to exact specifications for replication, improvement, and CAD documentation.',
    image: 'https://images.unsplash.com/photo-1581092168562-40038f63dd5b?w=500&h=400&fit=crop',
    capabilities: ['Full assembly capture', 'Tolerance analysis', 'Production CAD']
  },
  {
    id: '3',
    title: 'Medical Devices',
    category: 'Healthcare',
    description: 'Precision scanning of dental, orthopedic, and medical devices for patient-specific applications and manufacturing.',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=400&fit=crop',
    capabilities: ['Biocompatible', 'Patient-specific', 'Surgical accuracy']
  },
  {
    id: '4',
    title: 'Industrial Equipment',
    category: 'Industrial',
    description: 'Heavy machinery and industrial components scanned for maintenance, spare parts, and process optimization.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    capabilities: ['Large format', 'Material analysis', 'Documentation']
  }
];

export default function ScanningExamples() {
  return (
    <section className="section bg-[#f5f5f7]">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Scanning Capabilities & Examples</h2>
          <p className="text-center text-[#86868b] text-lg max-w-2xl mx-auto">
            See what we can scan and digitize. From precision industrial parts to delicate artifacts, our Creality CR-Scan Raptor handles it all.
          </p>
        </motion.div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scanExamples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 bg-[#e5e5ea]">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#36c1b3] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {example.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#36c1b3] transition-colors">
                  {example.title}
                </h3>
                <p className="text-[#86868b] text-sm mb-4">
                  {example.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2">
                  {example.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#36c1b3] font-bold">✓</span>
                      <span className="text-sm text-[#1d1d1f]">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
