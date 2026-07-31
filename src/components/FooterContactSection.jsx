'use client';

import { Phone, Instagram, MapPin, MessageSquare } from 'lucide-react';
import { SPA_CONFIG, createWhatsAppUrl } from '../data/spaData';

export default function FooterContactSection({ onOpenBooking }) {
  const waUrl = createWhatsAppUrl();

  return (
    <footer id="contact" className="bg-[#140c08] text-[#f7f2eb] pt-16 pb-12 relative overflow-hidden border-t border-[#8c664d]/30">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#c49a6c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#35271e]">
          
          {/* Column 1: Brand Info with logos.png Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img
                src="/logos.png"
                alt="Aquarius Spa Logo"
                className="h-20 sm:h-24 w-auto object-contain shrink-0 filter brightness-110 drop-shadow-md"
              />
            </div>

            <p className="text-xs text-[#c7b7aa] leading-relaxed font-light">
              {SPA_CONFIG.name} brings exclusive spa experiences directly to your place. Enjoy peace of mind and body rejuvenation anytime.
            </p>

            <div className="pt-1 text-xs text-[#c49a6c] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Fast Response Service</span>
            </div>
          </div>

          {/* Column 2: Quick Links Menu */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-semibold uppercase tracking-[0.2em] text-[#c49a6c]">NAVIGATION</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#c7b7aa]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services & Pricing</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Our Features</a></li>
              <li><a href="#flow" className="hover:text-white transition-colors">How to Order</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Hubungi Kami */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-semibold uppercase tracking-[0.2em] text-[#c49a6c]">CONTACT US</h4>
            <div className="space-y-2.5 text-xs text-[#c7b7aa]">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-medium hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#251b14] border border-[#8c664d]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#c49a6c]" />
                </div>
                <span>{SPA_CONFIG.phone}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#251b14] border border-[#8c664d]/30 flex items-center justify-center shrink-0">
                  <Instagram className="w-3.5 h-3.5 text-[#c49a6c]" />
                </div>
                <span>@aquariusmassagehomespa</span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#251b14] border border-[#8c664d]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c49a6c]" />
                </div>
                <span>Jakarta, Tangerang, Bekasi, Depok</span>
              </div>
            </div>
          </div>

          {/* Column 4: Booking Button */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-semibold uppercase tracking-[0.2em] text-[#c49a6c]">RESERVATION</h4>
            <p className="text-[11px] text-[#c7b7aa] font-light">
              Book now via WhatsApp.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#f2e3d3] via-[#c49a6c] to-[#8c664d] text-[#140c08] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:brightness-110"
            >
              <MessageSquare className="w-4 h-4 text-[#140c08]" />
              <span>Book Now</span>
            </button>
          </div>

        </div>

        {/* Bottom Minimalist Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#c7b7aa]/80 font-light">
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
          </div>
          <p>© 2026 Aquarius Massage Home Spa. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}


