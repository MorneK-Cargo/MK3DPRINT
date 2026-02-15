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
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-white via-[#f5f5f7] to-white overflow-hidden">
        <div className="container-apple py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
              Global <span className="text-[#36c1b3]">Imports</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed mb-8 max-w-3xl mx-auto">
              Access premium products from Amazon, Walmart, and international retailers at significantly better prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#imports-products" className="btn-apple btn-primary text-lg px-8 py-4">
                Browse Imports
              </a>
              <a href="/#quote" className="btn-apple btn-secondary text-lg px-8 py-4">
                Request Quote
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-[#86868b]">
              <span className="flex items-center gap-2">
                <span className="text-[#36c1b3]">✓</span> Global Sources
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#36c1b3]">✓</span> Save 30-50%
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#36c1b3]">✓</span> Fast Delivery
              </span>
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
