'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-intro">We’d love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href={`mailto:${contactInfo.email}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-16 h-16 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#36c1b3] transition-colors">
              <Mail className="w-8 h-8 text-[#36c1b3] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Email</h3>
            <p className="text-[#36c1b3] font-medium">{contactInfo.email}</p>
          </motion.a>

          <motion.a
            href={contactInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-16 h-16 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#36c1b3] transition-colors">
              <Phone className="w-8 h-8 text-[#36c1b3] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">WhatsApp</h3>
            <p className="text-[#36c1b3] font-medium">{contactInfo.whatsapp}</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 text-center shadow-lg"
          >
            <div className="w-16 h-16 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#36c1b3]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Location</h3>
            <p className="text-[#86868b]">{contactInfo.location}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
