import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import Services from '@/components/services';
import ScanningSection from '@/components/scanning-section';
import ShopSection from '@/components/shop-section';
import Gallery from '@/components/gallery';
import BrowseModels from '@/components/browse-models';
import TrendingPrints from '@/components/trending-prints';
import FeaturedProducts from '@/components/featured-products';
import ImportsSection from '@/components/imports-section';
import AboutSection from '@/components/about-section';
import QuoteCalculator from '@/components/quote-calculator';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <BrowseModels />
      <TrendingPrints />
      <FeaturedProducts />
      <ShopSection />
      <ScanningSection />
      <ImportsSection />
      <Gallery />
      <AboutSection />
      <QuoteCalculator />
      <Contact />
      <Footer />
    </main>
  );
}
