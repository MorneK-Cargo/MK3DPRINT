'use client';

import { motion } from 'framer-motion';

export default function SpecsSpotlight() {
  const specs = [
    {
      label: 'Accuracy',
      value: '±0.02mm',
      description: 'Metrology-grade precision for manufacturing-ready models',
    },
    {
      label: 'Resolution',
      value: '0.02-2mm',
      description: 'Adjustable point cloud density for any application',
    },
    {
      label: 'Scan Speed',
      value: 'Up to 60 fps',
      description: 'Fast capture in blue light mode for efficient workflows',
    },
    {
      label: 'Working Range',
      value: '150-1000mm',
      description: 'Flexible distance modes for objects of any size',
    },
    {
      label: 'Object Size',
      value: '5mm - 2000mm³',
      description: 'Scan everything from small components to large assemblies',
    },
    {
      label: 'Output Formats',
      value: 'STL, OBJ, PLY',
      description: 'Compatible with all major CAD and 3D printing software',
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
          className="text-center mb-12"
        >
          <h2 className="section-title">3D Scanner Specs Spotlight</h2>
          <p className="section-intro">
            Professional-grade specifications for precision scanning and digital modeling
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Specs Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f5f5f7] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm text-[#86868b] font-medium mb-2">{spec.label}</p>
                <p className="text-2xl font-bold text-[#1d1d1f] mb-3">{spec.value}</p>
                <p className="text-sm text-[#86868b] leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scanner Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-[#f5f5f7]">
              <img
                src="/images/scanning/raptor-versatile-scanning.png"
                alt="Handheld 3D scanner in use"
                className="w-full h-auto"
              />
            </div>

            <p className="text-[#86868b] leading-relaxed">
              Our professional 3D scanner delivers metrology-grade accuracy with flexible working modes for everything from precise industrial parts to larger assemblies. Whether you need high-speed scanning or maximum detail, this tool handles complex geometries with ease.
            </p>

            <a
              href="https://www.creality.com/products/creality-cr-scan-raptor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-apple btn-primary"
            >
              View Product Page
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
