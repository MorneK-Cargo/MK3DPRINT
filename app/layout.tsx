import type { Metadata } from 'next';
import './globals.css';

const metadataBase = process.env.NEXTAUTH_URL
  ? new URL(process.env.NEXTAUTH_URL)
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: 'MK 3D Printing and investments CC | Premium 3D Printing in Windhoek, Namibia',
  description: 'Precision 3D printing, scanning, and modeling services in Windhoek, Namibia. Custom parts, rapid prototyping, and engineering solutions.',
  openGraph: {
    title: 'MK 3D Printing and investments CC',
    description: 'Precision 3D printing, scanning, and modeling services in Windhoek, Namibia.',
    type: 'website',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
