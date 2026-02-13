import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import FeaturedProducts from '@/components/featured-products';
import ThingiversePopular from '@/components/thingiverse-popular';
import Gallery from '@/components/gallery';
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
      <ThingiversePopular />
      <Gallery />
      <QuoteCalculator />
      <Contact />
      <Footer />
    </main>
  );
}
