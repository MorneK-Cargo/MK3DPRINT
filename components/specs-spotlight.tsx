'use client';

import { motion } from 'framer-motion';

interface ApplicationCard {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

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

  const applications: ApplicationCard[] = [
    {
      id: 'auto',
      title: 'Automotive Parts',
      description:
        'Precision scanning of engine components, brackets, and assemblies for reverse engineering, quality control, and manufacturing optimization.',
      image: 'https://www.javelin-tech.com/3d/wp-content/uploads/bb-plugin/cache/honda-engine-3d-scan-landscape-f390fdf9c2b13dff88df35dd7b33da37-.jpg',
      benefits: [
        'OEM specifications capture',
        'Manufacturing-ready models',
        'CAD integration',
        'Tolerance analysis',
      ],
    },
    {
      id: 'reverse-eng',
      title: 'Reverse Engineering',
      description:
        'Capture complex mechanical assemblies to exact specifications for replication, improvement, and complete CAD documentation.',
      image: 'https://www.javelin-tech.com/3d/wp-content/uploads/bb-plugin/cache/compressor-3d-scan-landscape-9c850b5d6a446e3b2e775698d4082bb2-.jpg',
      benefits: [
        'Full assembly capture',
        'Complete geometry preservation',
        'Production-ready CAD',
        'Design optimization',
      ],
    },
    {
      id: 'medical',
      title: 'Medical Devices',
      description:
        'Precision scanning for dental implants, orthopedic components, and surgical instruments with biocompatible accuracy requirements.',
      image: 'https://www.javelin-tech.com/3d/wp-content/uploads/bb-plugin/cache/teeth-3d-scan-landscape-262b206285198c0bdf49a2c259c28667-.jpg',
      benefits: [
        'Biocompatible specifications',
        'Patient-specific models',
        'Surgical accuracy',
        'Regulatory compliance',
      ],
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
          </motion.div>
        </div>

        {/* Applications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-20 border-t border-[#d2d2d7]"
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Professional Applications</h2>
            <p className="section-intro">
              Real-world use cases for precision 3D scanning across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#f5f5f7] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56 bg-[#e5e5ea]">
                  <img
                    src={app.image}
                    alt={`${app.title} application`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#36c1b3] transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-[#86868b] text-sm mb-4 leading-relaxed">{app.description}</p>

                  {/* Benefits */}
                  <div className="space-y-2 pt-4 border-t border-[#d2d2d7]">
                    {app.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-[#36c1b3] font-bold">✓</span>
                        <span className="text-sm text-[#1d1d1f]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
