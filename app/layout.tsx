import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mk3dprint.org'),
  title: 'MK 3D Printing | Premium 3D Printing Services in Windhoek, Namibia',
  description: 'Precision 3D printing, scanning, and modeling services in Windhoek, Namibia. Custom parts, rapid prototyping, and engineering solutions.',
  openGraph: {
    title: 'MK 3D Printing | Professional 3D Printing in Windhoek, Namibia',
    description: 'Precision 3D printing, scanning, and modeling services in Windhoek, Namibia.',
    type: 'website',
    images: [{ url: 'https://mk3dprint.org/og-image.png', width: 1200, height: 630, alt: 'MK 3D Printing - Professional 3D Printing Services in Windhoek, Namibia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MK 3D Printing | Professional 3D Printing in Windhoek, Namibia',
    description: 'Precision 3D printing, scanning, and modeling services in Windhoek, Namibia.',
    images: ['https://mk3dprint.org/og-image.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'MK 3D Printing',
              description: 'Professional 3D printing and scanning services in Windhoek, Namibia',
              url: 'https://mk3dprint.org',
              telephone: '+264836750117',
              email: 'info@mk3dprint.org',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Windhoek',
                addressCountry: 'NA',
              },
              priceRange: '$$',
              image: 'https://mk3dprint.org/og-image.png',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Script src="https://apps.abacus.ai/chatllm/appllm-lib.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
