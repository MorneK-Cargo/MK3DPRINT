import Navigation from '@/components/navigation';
import ShopSection from '@/components/shop-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Shop - MK 3D Printing',
  description: 'Browse and purchase 3D printed products and accessories.',
};

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-[#f5f5f7] to-white pt-32 pb-12">
        <div className="container-apple">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-6">Shop Premium 3D Prints</h1>
            <p className="text-xl text-[#86868b] mb-8">
              Discover our curated collection of high-quality 3D printed products, custom designs, and specialty items crafted with precision and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Custom Orders Available</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Fast Turnaround</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Products */}
      <ShopSection />
      
      {/* Info Section */}
      <section className="section bg-[#f5f5f7]">
        <div className="container-apple">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Why Shop With Us</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Professional-grade 3D printing with precision tolerances</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Wide selection of materials and finishing options</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Custom design services available upon request</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#36c1b3] font-bold shrink-0">→</span>
                  <span className="text-[#1d1d1f]">Same-day quotes for standard orders</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Our Process</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">1. Browse & Select</div>
                  <p className="text-[#86868b]">Explore our catalog or upload your own design</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">2. Customize</div>
                  <p className="text-[#86868b]">Choose materials, colors, and finishing options</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">3. Get Quote</div>
                  <p className="text-[#86868b]">Receive instant pricing and production timeline</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#36c1b3] mb-1">4. Order & Receive</div>
                  <p className="text-[#86868b]">Fast production and reliable shipping to your location</p>
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
