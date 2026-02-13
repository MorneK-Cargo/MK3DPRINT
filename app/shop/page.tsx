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
      <div className="pt-24 pb-20">
        <div className="container-apple">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4">Shop</h1>
          <p className="text-lg text-[#86868b] max-w-2xl">Browse our curated selection of 3D printed products and accessories.</p>
        </div>
      </div>
      <ShopSection />
      <Contact />
      <Footer />
    </main>
  );
}
