'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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

  const mobileNavGroups = [
    { name: 'BERANDA', href: '#hero' },
    {
      name: 'LAYANAN & CARA PESAN',
      subItems: [
        { name: 'Layanan & Paket Spa', href: '#services' },
        { name: 'Cara Pemesanan', href: '#flow' },
      ],
    },
    {
      name: 'TENTANG & INFORMASI',
      subItems: [
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Keunggulan Kami', href: '#features' },
        { name: 'Galeri Visual', href: '#gallery' },
        { name: 'Testimoni & Area Layanan', href: '#testimonials' },
      ],
    },
    { name: 'HUBUNGI KAMI', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className={`transition-all duration-500 ${scrolled ? 'pt-4 px-3 sm:px-6' : ''}`}>
        <div
          className={`mx-auto transition-all duration-500 flex items-center justify-between ${
            scrolled
              ? 'max-w-5xl rounded-full px-6 py-2.5 bg-[#140c08]/60 backdrop-blur-2xl border border-white/15 border-t-white/30 text-[#f7f2eb] shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_15px_35px_rgba(0,0,0,0.6)]'
              : 'w-full px-6 sm:px-12 py-4 bg-transparent text-[#f7f2eb]'
          }`}
        >
          {/* Aquarius Spa Logo: biglogo emblem (always) + desclogo text (desktop only) */}
          <a href="#hero" className="flex items-center gap-3 sm:gap-4 group shrink-0">
            <img
              src="/biglogo.png"
              alt="Aquarius Spa Emblem"
              className="h-11 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105 filter brightness-110 drop-shadow-md"
            />
            <img
              src="/desclogo.png"
              alt="Aquarius Spa Text"
              className="hidden sm:block h-12 sm:h-16 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105 filter brightness-110 drop-shadow-md"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {desktopNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 py-1 text-[#e6dfd5]/90 hover:text-[#c49a6c]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full font-bold text-[11px] tracking-[0.18em] uppercase transition-all duration-300 shadow-md flex items-center gap-2 bg-[#c49a6c] hover:bg-[#b0875b] text-[#1c120c] hover:scale-[1.02] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1c120c]" />
              <span>RESERVASI</span>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-5xl mx-auto rounded-3xl bg-[#140c08]/85 border border-white/15 border-t-white/30 px-6 pt-5 pb-6 space-y-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl text-[#f7f2eb]">
            <div className="flex flex-col space-y-1">
              {mobileNavGroups.map((group) => {
                if (group.subItems) {
                  const isOpen = openSubmenu === group.name;
                  return (
                    <div key={group.name} className="border-b border-[#35271e]/50 py-1">
                      <button
                        onClick={() => setOpenSubmenu(isOpen ? null : group.name)}
                        className="w-full flex items-center justify-between text-xs font-bold tracking-[0.18em] uppercase text-[#e6dfd5] py-2.5 hover:text-[#c49a6c] transition-colors"
                      >
                        <span>{group.name}</span>
                        <ChevronDown className={`w-4 h-4 text-[#c49a6c] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="pl-3 pb-2 pt-1 flex flex-col space-y-2 border-l border-[#c49a6c]/30 ml-1 mt-1">
                          {group.subItems.map((sub) => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenSubmenu(null);
                              }}
                              className="text-[11px] font-medium tracking-wider text-[#c7b7aa] hover:text-[#c49a6c] py-1 transition-colors flex items-center gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c49a6c]"></span>
                              <span>{sub.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={group.name}
                    href={group.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setOpenSubmenu(null);
                    }}
                    className="text-xs font-bold tracking-[0.18em] uppercase text-[#e6dfd5] py-2.5 border-b border-[#35271e]/50 hover:text-[#c49a6c] transition-colors block"
                  >
                    {group.name}
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setOpenSubmenu(null);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#c49a6c] text-[#1c120c] font-bold text-xs tracking-[0.2em] uppercase text-center shadow-md flex items-center justify-center gap-2 hover:bg-[#b0875b] transition-colors mt-2"
            >
              <Calendar className="w-4 h-4 text-[#1c120c]" />
              <span>RESERVASI SEKARANG</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
