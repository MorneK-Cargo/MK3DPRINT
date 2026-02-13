import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import FeaturedProducts from '@/components/featured-products';
import QuoteCalculator from '@/components/quote-calculator';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'MK 3D Printing - Precision 3D Printing in Windhoek',
  description: 'Professional 3D printing services in Windhoek. High-quality 3D models and prints for manufacturing, prototyping, and more.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <QuoteCalculator />
      <Contact />
      <Footer />
    </main>
  );
}
