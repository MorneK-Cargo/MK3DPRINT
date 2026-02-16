import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | MK 3D Printing',
  description: 'Privacy policy for MK 3D Printing - how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="container-apple max-w-3xl">
        <h1 className="text-4xl font-semibold text-[#1d1d1f] mb-2">Privacy Policy</h1>
        <p className="text-[#86868b] mb-10">Last updated: February 2026</p>

        <div className="space-y-8 text-[#1d1d1f]">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Who We Are</h2>
            <p className="text-[#424245] leading-relaxed">
              MK 3D Printing and Investments CC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website{' '}
              <a href="https://mk3dprint.org" className="text-[#36c1b3]">mk3dprint.org</a>. We are a 3D printing and scanning service based in Windhoek, Namibia. This privacy policy explains how we collect, use, and protect your personal information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-[#424245] leading-relaxed mb-3">We collect information you voluntarily provide through our website forms:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424245]">
              <li><strong>Quote Request Form:</strong> Full name, email address, WhatsApp number (optional), project type, and project details.</li>
              <li><strong>3D Scanning Request Form:</strong> Full name, email address, phone number (optional), company name (optional), scan size preference, and object description.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-[#424245] leading-relaxed mb-3">We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424245]">
              <li>Respond to your quote or service requests</li>
              <li>Communicate with you about your project via email or WhatsApp</li>
              <li>Provide accurate pricing and project timelines</li>
              <li>Improve our services based on customer needs</li>
            </ul>
            <p className="text-[#424245] leading-relaxed mt-3">We do not use your information for marketing purposes unless you explicitly opt in.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
            <p className="text-[#424245] leading-relaxed mb-3">Our website uses the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424245]">
              <li><strong>Netlify:</strong> Our website hosting provider. Form submissions are processed and stored by Netlify. See <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#36c1b3] underline">Netlify&apos;s Privacy Policy</a>.</li>
              <li><strong>Abacus.AI Chat Widget:</strong> We use an AI-powered chat assistant on our website. Conversations with the chat widget may be processed by Abacus.AI&apos;s servers. See <a href="https://abacus.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-[#36c1b3] underline">Abacus.AI&apos;s Privacy Policy</a>.</li>
            </ul>
            <p className="text-[#424245] leading-relaxed mt-3">We do not sell, trade, or transfer your personal information to any other parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Storage and Retention</h2>
            <p className="text-[#424245] leading-relaxed">
              Form submissions are stored securely via Netlify&apos;s infrastructure. We retain your information for as long as necessary to fulfill your request and for a reasonable period thereafter for record-keeping purposes (typically 12 months). After this period, your data is deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-[#424245] leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424245]">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-[#424245] leading-relaxed mt-3">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:info@mk3dprint.org" className="text-[#36c1b3]">info@mk3dprint.org</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Security</h2>
            <p className="text-[#424245] leading-relaxed">
              We implement appropriate technical measures to protect your personal information, including HTTPS encryption for all data transmission, secure form handling via Netlify, and restricted access to submitted data. However, no method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Cookies</h2>
            <p className="text-[#424245] leading-relaxed">
              Our website does not use tracking cookies or analytics services that collect personal data. Essential cookies may be set by our hosting provider (Netlify) for the functioning of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p className="text-[#424245] leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-[#424245] leading-relaxed">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <ul className="list-none space-y-2 text-[#424245] mt-3">
              <li><strong>Email:</strong> <a href="mailto:info@mk3dprint.org" className="text-[#36c1b3]">info@mk3dprint.org</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/264836750117" className="text-[#36c1b3]">+264 83 675 0117</a></li>
              <li><strong>Location:</strong> Windhoek, Namibia</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#d2d2d7]">
          <Link href="/" className="text-[#36c1b3] font-medium hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
