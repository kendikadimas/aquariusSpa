'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavLinks = [
    { name: 'BERANDA', href: '#hero' },
    { name: 'TENTANG KAMI', href: '#about' },
    { name: 'LAYANAN', href: '#services' },
    { name: 'GALERI', href: '#gallery' },
    { name: 'KONTAK', href: '#contact' },
  ];

  const mobileNavLinks = [
    { name: 'BERANDA', href: '#hero' },
    { name: 'TENTANG KAMI', href: '#about' },
    { name: 'LAYANAN & HARGA', href: '#services' },
    { name: 'KEUNGGULAN', href: '#features' },
    { name: 'CARA PESAN', href: '#flow' },
    { name: 'GALERI VISUAL', href: '#gallery' },
    { name: 'TESTIMONI & AREA', href: '#testimonials' },
    { name: 'HUBUNGI KAMI', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className={`transition-all duration-500 ${scrolled ? 'pt-4 px-3 sm:px-6' : ''}`}>
        <div
          className={`mx-auto transition-all duration-500 flex items-center justify-between ${
            scrolled
              ? 'max-w-5xl rounded-full px-6 py-2.5 bg-white/95 backdrop-blur-xl text-[#2c251e] shadow-2xl'
              : 'w-full px-6 sm:px-12 py-4 bg-transparent text-[#2c251e]'
          }`}
        >
          {/* Official Aquarius Spa Logo from big-logo.png + AQUARIUS Spa Text */}
          <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
            <img
              src="/big-logo.png"
              alt="Aquarius Spa Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-bold text-base sm:text-lg tracking-[0.18em] uppercase text-[#2b1c15]">
                AQUARIUS
              </span>
              <span className="font-serif italic font-normal text-xs sm:text-sm text-[#6b5e4c]">
                Spa
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {desktopNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 py-1 ${
                  scrolled
                    ? 'text-[#2c251e]/85 hover:text-[#6b5e4c]'
                    : 'text-[#2c251e]/90 hover:text-[#6b5e4c]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-300 shadow-md flex items-center gap-2 bg-[#6b5e4c] hover:bg-[#524637] text-white hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>RESERVASI</span>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-[#2c251e] hover:bg-stone-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-5xl mx-auto rounded-3xl bg-white/95 px-6 pt-5 pb-6 space-y-4 shadow-2xl backdrop-blur-2xl text-[#2c251e]">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <img
                src="/big-logo.png"
                alt="Aquarius Spa Logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <div className="flex flex-col space-y-3">
              {mobileNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold tracking-[0.18em] uppercase text-[#2c251e] py-2 hover:text-[#6b5e4c] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#6b5e4c] text-white font-bold text-xs tracking-[0.2em] uppercase text-center shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>RESERVASI SEKARANG</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
