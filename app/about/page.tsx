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
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-32 bg-[#f5f5f7]">
        <div className="container-apple py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#1d1d1f] mb-6">
              About <span className="text-[#36c1b3]">MK 3D Printing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#86868b] leading-relaxed mb-8 max-w-3xl mx-auto">
              Leading innovation in 3D printing, scanning, and manufacturing solutions with expertise and customer-first approach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#about-content" className="btn-apple btn-primary text-lg px-8 py-4">
                Learn Our Story
              </a>
              <a href="/#quote" className="btn-apple btn-secondary text-lg px-8 py-4">
                Get in Touch
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-[#86868b]">
              <span className="flex items-center gap-2">
                <span className="text-[#36c1b3]">✓</span> Professional
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#36c1b3]">✓</span> Proven Expertise
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#36c1b3]">✓</span> Client Focused
              </span>
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
