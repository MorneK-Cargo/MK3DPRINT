import { Metadata } from 'next';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import ThreeDScanningForm from '@/components/3d-scanning-form';
import ThreeDScanningHero from '@/components/3d-scanning-hero';
import ScanningExamples from '@/components/scanning-examples';
import SpecsSpotlight from '@/components/specs-spotlight';
import ScannerApplications from '@/components/scanner-applications';

export const metadata: Metadata = {
  title: '3D Scanning Services | MK 3D Printing Windhoek',
  description: 'Professional 3D scanning services in Windhoek, Namibia. Convert physical objects into digital 3D models for printing, CAD, and reverse engineering.',
  openGraph: {
    title: '3D Scanning Services | MK 3D Printing',
    description: 'Professional 3D scanning services in Windhoek, Namibia.',
    type: 'website',
  },
};

export default function ThreeDScanningPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ThreeDScanningHero />
      <SpecsSpotlight />
      <ScannerApplications />
      <ScanningExamples />
      <ThreeDScanningForm />
      <Footer />
    </main>
  );
}
