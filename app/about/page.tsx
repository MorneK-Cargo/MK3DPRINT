import Navigation from '@/components/navigation';
import AboutSection from '@/components/about-section';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'About - MK 3D Printing',
  description: 'Learn about MK 3D Printing and Investments CC, our journey, expertise, and why we\'re different.',
};

export default function AboutPage() {
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
              About <span className="text-[#36c1b3]">MK 3D Printing</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#86868b] mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading innovation in 3D printing, scanning, and manufacturing solutions. Our expertise, commitment to quality, and customer-first approach set us apart.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#about-content"
                className="btn-apple btn-primary px-8 py-4 text-lg inline-flex items-center justify-center"
              >
                Learn Our Story
              </a>
              <a
                href="/#quote"
                className="btn-apple btn-secondary px-8 py-4 text-lg"
              >
                Get in Touch
              </a>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Professional Services</h3>
                <p className="text-[#86868b]">Expert teams delivering precision solutions across all services</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Proven Expertise</h3>
                <p className="text-[#86868b]">Years of experience serving diverse industries and clients</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#36c1b3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Client Focused</h3>
                <p className="text-[#86868b]">Your satisfaction and success are our top priorities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <AboutSection />
      
      {/* Stats Section */}
      <section className="section bg-[#f5f5f7]">
        <div className="container-apple">
          <h2 className="section-title text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#36c1b3] mb-2">500+</div>
              <p className="text-[#86868b]">Successful Projects</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#36c1b3] mb-2">100%</div>
              <p className="text-[#86868b]">Client Satisfaction</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#36c1b3] mb-2">24h</div>
              <p className="text-[#86868b]">Standard Turnaround</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-[#36c1b3] mb-2">3</div>
              <p className="text-[#86868b]">Service Divisions</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
