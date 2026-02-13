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
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-[#f5f5f7] to-white pt-32 pb-12">
        <div className="container-apple">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-6">
              About MK 3D Printing
            </h1>
            <p className="text-xl text-[#86868b] mb-8">
              Leading innovation in 3D printing and manufacturing solutions. Our expertise, commitment to quality, and customer-first approach set us apart in Windhoek.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Professional Services</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Proven Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl text-[#36c1b3]">✓</span>
                <span className="text-[#1d1d1f]">Client Satisfaction</span>
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
