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
      <div className="pt-24 pb-20">
        <div className="container-apple">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">International Imports</h1>
          <p className="text-lg text-[#86868b] max-w-2xl">We source and import products from Amazon, Walmart, and other international retailers in the USA, Europe, and Asia at significantly more affordable prices than traditional courier services.</p>
        </div>
      </div>
      <ImportsSection />
      <Contact />
      <Footer />
    </main>
  );
}
