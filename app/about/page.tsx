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
      <div className="pt-24 pb-12">
        <div className="container-apple">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">
            About MK 3D Printing
          </h1>
          <p className="text-lg text-[#86868b] max-w-2xl">
            Discover our story, experience, and commitment to excellence in 3D printing and manufacturing solutions.
          </p>
        </div>
      </div>
      <AboutSection />
      <Contact />
      <Footer />
    </main>
  );
}
