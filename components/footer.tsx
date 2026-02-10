'use client';

import Link from 'next/link';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white py-16">
      <div className="container-apple">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-[#36c1b3] font-semibold mb-4">MK 3D Printing</h4>
            <p className="text-[#86868b] text-sm">Scan • Print • Build</p>
            <p className="text-[#86868b] text-sm mt-2">
              Precision 3D Printing & Manufacturing Solutions in Windhoek, Namibia
            </p>
          </div>

          <div>
            <h4 className="text-[#36c1b3] font-semibold mb-4">Browse 3D Models</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.yeggi.com" target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  Yeggi - Search All Sites
                </a>
              </li>
              <li>
                <a href="https://www.printables.com" target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  Printables - Free Models
                </a>
              </li>
              <li>
                <a href="https://makerworld.com" target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  MakerWorld - Bambu Lab
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#36c1b3] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#browse-models" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  Find 3D Models
                </Link>
              </li>
              <li>
                <Link href="#quote" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#36c1b3] font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="text-[#86868b] hover:text-white transition-colors text-sm">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#86868b] hover:text-white transition-colors text-sm">
                  WhatsApp: {contactInfo.whatsapp}
                </a>
              </li>
              <li>
                <span className="text-[#86868b] text-sm">{contactInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 text-center">
          <p className="text-[#86868b] text-sm">
            © 2025 mk3dprint.org. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`${contactInfo.whatsappLink}?text=Hi%2C%20I%27m%20interested%20in%20your%203D%20printing%20services`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.483 2.031 7.788L0 32l8.463-2.031A15.921 15.921 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.412c-2.431 0-4.75-.631-6.738-1.744l-.488-.287-4.894 1.181 1.181-4.894-.287-.488A13.313 13.313 0 012.588 16C2.588 8.581 8.581 2.588 16 2.588S29.412 8.581 29.412 16 23.419 29.412 16 29.412z"/>
          <path d="M23.381 19.419c-.406-.206-2.4-1.188-2.775-1.325-.375-.137-.65-.206-.925.206-.275.406-1.063 1.325-1.306 1.594-.238.275-.481.306-.887.1-.406-.206-1.719-.631-3.269-2.019-1.206-1.075-2.019-2.406-2.256-2.813-.238-.406-.025-.625.175-.825.181-.181.406-.481.606-.719.206-.238.275-.406.413-.681.137-.275.069-.512-.031-.719-.1-.206-.925-2.212-1.263-3.031-.331-.8-.669-.688-.925-.7-.238-.013-.512-.013-.787-.013s-.719.1-1.094.512c-.375.413-1.438 1.4-1.438 3.419s1.475 3.969 1.681 4.244c.206.275 2.906 4.431 7.031 6.213.981.425 1.75.681 2.344.875.987.319 1.881.275 2.588.169.787-.119 2.4-.975 2.738-1.919.337-.944.337-1.75.238-1.919-.1-.169-.375-.275-.781-.481z"/>
        </svg>
      </a>
    </footer>
  );
}
