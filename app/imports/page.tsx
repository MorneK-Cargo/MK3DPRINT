import Navigation from '@/components/navigation';
import ImportsSection from '@/components/imports-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Imports - MK 3D Printing',
  description: 'Import products from overseas retailers at affordable prices. We source from Amazon, Walmart, and other international retailers.',
};

export default function ImportsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-[#f5f5f7] to-white pt-32 pb-12">
        <div className="container-apple">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-6">International Product Imports</h1>
            <p className="text-xl text-[#86868b] mb-8">
              Access global products at local prices. We source from Amazon, Walmart, and premium international retailers across the USA, Europe, and Asia—with significantly better pricing than traditional courier services.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Global Sources</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Competitive Rates</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Hassle-Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imports Section */}
      <ImportsSection />
      
      {/* Benefits Section */}
      <section className="section bg-[#f5f5f7]">
        <div className="container-apple">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Why Our Import Service</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Save 30-50% versus direct international shipping</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Access exclusive products unavailable locally</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Consolidated shipments reduce customs delays</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Professional handling of international documentation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">How It Works</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">1. Request Item</div>
                  <p className="text-[#86868b]">Provide product link or details from your preferred retailer</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">2. Price Quote</div>
                  <p className="text-[#86868b]">We source and provide landed cost including all fees</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">3. Procurement</div>
                  <p className="text-[#86868b]">We purchase and consolidate your order overseas</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">4. Delivery</div>
                  <p className="text-[#86868b]">Fast shipment to Windhoek with full tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
