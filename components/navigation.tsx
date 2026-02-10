'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#quick-prints', label: 'Quick Prints' },
  { href: '#thingiverse-browser', label: 'Browse Models' },
  { href: '#scanning', label: '3D Scanning' },
  { href: '#imports', label: 'Imports' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#quote', label: 'Quote' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <nav className="container-apple">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0">
            <Image
              src="/images/branding/logo.png"
              alt="MK 3D Printing"
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#1d1d1f] hover:text-[#36c1b3] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/264836750117"
            className="hidden md:flex btn-apple btn-primary text-sm px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1d1d1f]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#d2d2d7]"
          >
            <div className="container-apple py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-[#1d1d1f] hover:text-[#36c1b3] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/264836750117"
                className="block py-3 text-[#36c1b3] font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
