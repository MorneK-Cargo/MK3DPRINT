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
      title: 'Automotive 3D Scanning',
      description:
        'Capture precise 3D scans of engine blocks, brake calipers, body panels, and custom parts. Ideal for restoration projects, aftermarket part development, and quality inspection of automotive components.',
      image: '/images/gallery_automotive.png',
      benefits: [
        'Engine & drivetrain scanning',
        'Custom part reproduction',
        'Damage assessment & repair',
        'Aftermarket fitment verification',
      ],
    },
    {
      id: 'reverse-eng',
      title: 'Reverse Engineering',
      description:
        'Turn any physical object into a precise digital 3D model. Perfect for reproducing legacy parts with no existing drawings, improving existing designs, or creating CAD models from hand-made prototypes.',
      image: '/images/gallery_mechanical.png',
      benefits: [
        'Legacy part reproduction',
        'CAD model generation',
        'Design improvement & iteration',
        'Replacement part manufacturing',
      ],
    },
    {
      id: 'medical',
      title: 'Medical & Body Scanning',
      description:
        'High-precision scanning of prosthetics, orthotic devices, dental models, and anatomical features. Create patient-specific 3D models for custom-fitted medical devices and surgical planning.',
      image: '/images/gallery_medical.png',
      benefits: [
        'Custom prosthetics & orthotics',
        'Dental model digitisation',
        'Anatomical documentation',
        'Patient-specific device design',
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
