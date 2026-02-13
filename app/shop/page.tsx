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
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Matches 3D Scanning Page */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-white via-[#f5f5f7] to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#36c1b3]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#36c1b3]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container-apple relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-6">
              Premium 3D <span className="text-[#36c1b3]">Shop</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#86868b] mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of high-quality 3D printed products, custom designs, and specialty items crafted with precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#shop-products"
                className="btn-apple btn-primary px-8 py-4 text-lg inline-flex items-center justify-center"
              >
                Browse Products
              </a>
              <a
                href="/#quote"
                className="btn-apple btn-secondary px-8 py-4 text-lg"
              >
                Custom Orders
              </a>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Custom Orders</h3>
                <p className="text-[#86868b]">Design your own or modify existing products to your specifications</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Fast Turnaround</h3>
                <p className="text-[#86868b]">Quick production and shipping to get your products when you need them</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Quality Materials</h3>
                <p className="text-[#86868b]">Premium materials and professional finishing for exceptional results</p>
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
