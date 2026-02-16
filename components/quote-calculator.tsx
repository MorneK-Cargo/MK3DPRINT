'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function QuoteCalculatorInner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const item = searchParams.get('item');
    if (item) {
      setFormData((prev) => ({
        ...prev,
        projectType: '3d-printing',
        details: `I'd like to get this printed: ${item}`,
      }));
      // Scroll to quote section
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setError('Please consent to data processing to submit your request.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      const body = new URLSearchParams({
        'form-name': 'quote-request',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        details: formData.details,
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', projectType: '', details: '', consent: false });
      } else {
        setError('Something went wrong. Please try WhatsApp instead.');
      }
    } catch {
      setError('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'd like a quote for ${formData.projectType || '3D printing'}.\n\nName: ${formData.name}\nEmail: ${formData.email}\n${formData.phone ? `Phone: ${formData.phone}\n` : ''}Details: ${formData.details}`;
    window.open(`https://wa.me/264836750117?text=${encodeURIComponent(message)}`, '_blank');
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
              Thank you for your interest. We'll review your project details and get back to you within 24 hours.
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
          <p className="section-intro">Tell us about your project, and we'll provide a detailed quote</p>
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
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#36c1b3] focus:border-transparent"
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
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#36c1b3] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">WhatsApp Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+264 61 123 4567"
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:ring-2 focus:ring-[#36c1b3] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Project Type</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#36c1b3] focus:border-transparent"
              >
                <option value="">Select a type...</option>
                <option value="3d-printing">3D Printing</option>
                <option value="3d-scanning">3D Scanning</option>
                <option value="import-usa">Import from USA</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Project Details</label>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Describe your project, dimensions, quantities, and any special requirements..."
              rows={5}
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] resize-none focus:outline-none focus:ring-2 focus:ring-[#36c1b3] focus:border-transparent"
            />
          </div>

          {/* Consent checkbox */}
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-[#d2d2d7] text-[#36c1b3] focus:ring-[#36c1b3]"
              />
              <span className="text-sm text-[#86868b]">
                I consent to the processing of my personal data for this quote request.{' '}
                <a href="/privacy" className="text-[#36c1b3] underline">Privacy Policy</a>
              </span>
            </label>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-apple btn-primary flex-1 py-4 text-lg disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Quote Request'}
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 py-4 text-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium rounded-full transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Send via WhatsApp
            </button>
          </div>

          <p className="text-sm text-[#86868b] text-center mt-6">
            We'll respond within 24 hours via your preferred contact method.
          </p>
        </motion.form>
      </div>
    </section>
  );
}

export default function QuoteCalculator() {
  return (
    <Suspense>
      <QuoteCalculatorInner />
    </Suspense>
  );
}
