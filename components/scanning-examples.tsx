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
    title: 'Industrial Parts',
    category: 'Manufacturing',
    description: 'Reverse engineering complex mechanical components with precision scanning for CAD recreation and production.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
    capabilities: ['±0.05mm accuracy', 'Complex geometry', 'Full CAD output']
  },
  {
    id: '2',
    title: '3D Printed Models',
    category: 'Verification',
    description: 'Quality control and verification of 3D printed prototypes to ensure dimensional accuracy and tolerances.',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=400&fit=crop',
    capabilities: ['Surface analysis', 'Tolerance checking', 'QA documentation']
  },
  {
    id: '3',
    title: 'Product Design',
    category: 'Development',
    description: 'Capturing existing product dimensions for rapid prototyping and design iteration cycles.',
    image: 'https://images.unsplash.com/photo-1586253408161-4674a45a0b15?w=500&h=400&fit=crop',
    capabilities: ['Design capture', 'Comparison analysis', 'Modification mapping']
  },
  {
    id: '4',
    title: 'Tooling & Molds',
    category: 'Manufacturing',
    description: 'Precise scanning of custom tooling and injection molds for documentation and reproduction.',
    image: 'https://images.unsplash.com/photo-1581092168562-40038f63dd5b?w=500&h=400&fit=crop',
    capabilities: ['Mold documentation', 'Insert positioning', 'Flow analysis']
  },
  {
    id: '5',
    title: 'Consumer Products',
    category: 'Benchmarking',
    description: 'Digitizing existing consumer products for competitive analysis and reverse engineering studies.',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=400&fit=crop',
    capabilities: ['Product digitization', 'Competitor analysis', 'Feature mapping']
  },
  {
    id: '6',
    title: 'Custom Components',
    category: 'Adaptation',
    description: 'Scanning specialized components for custom fitting and integration into new assemblies.',
    image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&h=400&fit=crop',
    capabilities: ['Precision mounting', 'Assembly integration', 'Custom fitting']
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

        {/* Technology Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t-2 border-[#d5d5d7]"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-6">Our Scanning Technology</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-[#1d1d1f] mb-3">Creality CR-Scan Raptor</h4>
                <p className="text-[#86868b] mb-4">
                  Professional-grade 3D scanner combining line lasers with infrared structured light technology for exceptional accuracy and versatility.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                    <span className="text-[#1d1d1f] text-sm">Scan range: 5mm to 2000mm</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                    <span className="text-[#1d1d1f] text-sm">No markers required for feature-rich objects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                    <span className="text-[#1d1d1f] text-sm">Works with various materials</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#1d1d1f] mb-3">What We Can Do</h4>
                <p className="text-[#86868b] mb-4">
                  From quality control to reverse engineering, our scanning capabilities enable precision digital modeling.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                    <span className="text-[#1d1d1f] text-sm">Reverse engineering of existing parts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                    <span className="text-[#1d1d1f] text-sm">Quality control and inspection</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                    <span className="text-[#1d1d1f] text-sm">Digital archiving and preservation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#86868b] mb-6">
            Have an object that needs scanning? Let's discuss your project.
          </p>
          <a
            href="/#quote"
            className="btn-apple btn-primary px-8 py-3"
          >
            Request a Scan Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
