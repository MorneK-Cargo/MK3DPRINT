'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function QuoteCalculator() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectType: '', details: '' });
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="section bg-white">
        <div className="container-apple">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-[#f5f5f7] rounded-3xl p-12"
          >
            <div className="w-20 h-20 bg-[#36c1b3] rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-4">Quote Request Sent!</h3>
            <p className="text-[#86868b] text-lg mb-8">
              Thank you for your interest. We’ll review your project details and get back to you within 24 hours.
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
    <section id="quote" className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Request a Quote</h2>
          <p className="section-intro">Tell us about your project, and we’ll provide a detailed quote</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#f5f5f7] rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">WhatsApp Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+264 61 123 4567"
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Project Type</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f]"
              >
                <option value="">Select a type...</option>
                <option value="3d-printing">3D Printing</option>
                <option value="3d-scanning">3D Scanning</option>
                <option value="import-usa">Import from USA</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Project Details</label>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Describe your project, dimensions, quantities, and any special requirements..."
              rows={5}
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-apple btn-primary w-full py-4 text-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Quote Request'}
          </button>

          <p className="text-sm text-[#86868b] text-center mt-6">
            Can’t submit the form? Send your details via WhatsApp or email. We’ll respond within 24 hours.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
