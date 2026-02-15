'use client';

import { motion } from 'framer-motion';
import { Zap, Box, Eye } from 'lucide-react';

export default function ThreeDScanningHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Floating animation
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity },
    },
  };

  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-white via-[#f5f5f7] to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#36c1b3]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#36c1b3]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-apple relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-6"
          >
            3D Scanning{' '}
            <span className="text-[#36c1b3]">Services</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-[#86868b] mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Convert your physical objects into precise digital 3D models. Perfect for manufacturing, reverse engineering, and rapid prototyping.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#scan-form"
              className="btn-apple btn-primary px-8 py-4 text-lg inline-flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Request a Scan
            </a>
            <a
              href="#how-it-works"
              className="btn-apple btn-secondary px-8 py-4 text-lg"
            >
              Learn More
            </a>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#36c1b3] transition-colors"
              >
                <Box className="w-8 h-8 text-[#36c1b3] group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Precision</h3>
              <p className="text-[#86868b]">High-accuracy 3D models suitable for manufacturing and CAD workflows</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 0.5 }}
                className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#36c1b3] transition-colors"
              >
                <Eye className="w-8 h-8 text-[#36c1b3] group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Quick Turnaround</h3>
              <p className="text-[#86868b]">Fast processing with standard, express, and high-resolution scan options</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: 1 }}
                className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#36c1b3] transition-colors"
              >
                <Zap className="w-8 h-8 text-[#36c1b3] group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Multiple Formats</h3>
              <p className="text-[#86868b]">Output in STL, OBJ, PLY, and CAD-ready formats for any application</p>
            </motion.div>
          </motion.div>

          {/* Scanner Specifications Image */}
          <motion.div
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto"
          >
            <img
              src="/images/scanning/raptor-versatile-scanning.png"
              alt="Creality CR-Scan Raptor Specifications"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* How It Works Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="how-it-works"
        className="mt-20 pt-20 border-t border-[#d2d2d7]"
      >
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-4">How It Works</h2>
            <p className="text-xl text-[#86868b]">Simple process from object to digital model</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Submit Request', desc: 'Fill out the form below with your scanning needs' },
              { step: '2', title: 'Consultation', desc: 'We confirm details and provide a quote' },
              { step: '3', title: 'Scanning', desc: 'Our team captures and processes your object' },
              { step: '4', title: 'Delivery', desc: 'Receive your 3D model in your preferred format' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#36c1b3] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-[#1d1d1f] mb-2">{item.title}</h4>
                <p className="text-sm text-[#86868b]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Supported Formats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 pt-20 border-t border-[#d2d2d7]"
      >
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-4">Supported Formats & Applications</h2>
            <p className="text-xl text-[#86868b]">Output in any format you need</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f5f5f7] rounded-2xl p-8"
            >
              <h3 className="font-semibold text-[#1d1d1f] mb-4 text-lg">Export Formats</h3>
              <ul className="space-y-2 text-[#86868b]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  STL (3D Printing)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  OBJ (CAD/Modeling)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  PLY (Point Cloud)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  STEP (Engineering)
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f5f5f7] rounded-2xl p-8"
            >
              <h3 className="font-semibold text-[#1d1d1f] mb-4 text-lg">Common Uses</h3>
              <ul className="space-y-2 text-[#86868b]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  3D Printing & Manufacturing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  Reverse Engineering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  Quality Control & Inspection
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#36c1b3] rounded-full" />
                  Digital Archiving
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
