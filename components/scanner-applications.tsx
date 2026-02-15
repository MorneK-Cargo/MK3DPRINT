'use client';

import { motion } from 'framer-motion';

interface ApplicationCard {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

export default function ScannerApplications() {
  const applications: ApplicationCard[] = [
    {
      id: 'auto',
      title: 'Automotive Parts',
      description:
        'Precision scanning of engine components, brackets, and assemblies for reverse engineering, quality control, and manufacturing optimization.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1581092168562-40038f63dd5b?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
      benefits: [
        'Biocompatible specifications',
        'Patient-specific models',
        'Surgical accuracy',
        'Regulatory compliance',
      ],
    },
  ];

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
          <h2 className="section-title">Professional Applications</h2>
          <p className="section-intro">
            Real-world use cases for precision 3D scanning across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
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
      </div>
    </section>
  );
}
