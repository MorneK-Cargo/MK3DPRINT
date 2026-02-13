'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ThreeDScanningForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    scanType: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const scanTypes = [
    {
      value: 'small',
      label: 'Small (< 10cm)',
      description: 'Compact objects, jewelry, small parts'
    },
    {
      value: 'medium',
      label: 'Medium (10-50cm)',
      description: 'Standard objects, tools, components'
    },
    {
      value: 'large',
      label: 'Large (50-200cm)',
      description: 'Large assemblies, furniture, industrial parts'
    },
    {
      value: 'extra-large',
      label: 'Extra Large (> 200cm)',
      description: 'Full-scale objects, machinery, architectural elements'
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/3d-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', scanType: '', description: '' });
      } else {
        setError('Failed to submit. Please try again or contact us directly.');
      }
    } catch (err) {
      console.error('Error submitting scan request:', err);
      setError('An error occurred. Please contact us via WhatsApp or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-gradient-to-br from-[#f5f5f7] to-[#e5e5ea] rounded-3xl p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-[#36c1b3] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-4">Request Received!</h3>
            <p className="text-[#86868b] text-lg mb-2">
              Thank you for your 3D scanning request. We've received your information.
            </p>
            <p className="text-[#86868b] text-lg mb-8">
              Our team will review your request and contact you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-apple btn-secondary"
            >
              Submit Another Request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">Request a 3D Scan</h2>
          <p className="section-intro">Tell us about your scanning needs, and we'll provide a detailed quote</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gradient-to-br from-[#f5f5f7] to-[#e5e5ea] rounded-3xl p-8 md:p-12 mt-12"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Name and Email */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Full Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#36c1b3] transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#36c1b3] transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+264 61 123 4567"
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#36c1b3] transition-colors"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Company/Organization</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Your company name"
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#36c1b3] transition-colors"
              />
            </motion.div>
          </div>

          {/* Scan Type Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <label className="block text-sm font-medium text-[#1d1d1f] mb-4">Scan Size *</label>
            <div className="grid md:grid-cols-2 gap-3">
              {scanTypes.map((type) => (
                <label
                  key={type.value}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.scanType === type.value
                      ? 'border-[#36c1b3] bg-[#36c1b3]/10'
                      : 'border-[#d2d2d7] bg-white hover:border-[#36c1b3]'
                  }`}
                >
                  <input
                    type="radio"
                    name="scanType"
                    value={type.value}
                    checked={formData.scanType === type.value}
                    onChange={(e) => setFormData({ ...formData, scanType: e.target.value })}
                    required
                    className="sr-only"
                  />
                  <div className="font-medium text-[#1d1d1f]">{type.label}</div>
                  <div className="text-sm text-[#86868b] mt-1">{type.description}</div>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Object Description *</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the object you want scanned: materials, dimensions, special features, end-use (3D printing, CAD modeling, reverse engineering, etc.)"
              rows={5}
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] resize-none focus:outline-none focus:border-[#36c1b3] transition-colors"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            type="submit"
            disabled={isSubmitting}
            className="btn-apple btn-primary w-full py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? 'Sending Request...' : 'Send Scan Request'}
          </motion.button>

          <p className="text-sm text-[#86868b] text-center mt-6">
            * Required fields. We'll contact you within 24 hours to confirm and discuss your scanning project.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
