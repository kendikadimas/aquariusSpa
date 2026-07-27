'use client';

import Image from 'next/image';
import { Star, ArrowDown } from 'lucide-react';
import { SPA_CONFIG, SERVICES } from '../data/spaData';

export default function HeroSection({ onOpenBooking }) {
  const featuredTreatments = SERVICES.slice(0, 3);

  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-32 lg:pb-40 bg-[#1c120c]">
      {/* Upper Hero Image Banner Container in Dark Atmosphere */}
      <div className="relative max-w-[94%] mx-auto h-[550px] sm:h-[620px] rounded-3xl overflow-hidden shadow-card-float border border-[#8c664d]/30">
        <Image
          src="/images/hero_sanctuary.png"
          alt="Aquarius Spa Sanctuary"
          fill
          priority
          className="object-cover object-center filter brightness-95 contrast-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c120c]/90 via-[#1c120c]/40 to-black/30" />

        {/* Hero Center Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white max-w-4xl mx-auto space-y-5">
          <span className="inline-flex items-center justify-center text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] font-semibold text-[#f8f4ee] bg-white/15 px-5 sm:px-6 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-sm max-w-full whitespace-nowrap">
            Wellness & Home Spa Sanctuary
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-white leading-tight drop-shadow-sm">
            Rejuvenate Your Soul
          </h1>

          <p className="text-sm sm:text-base text-[#f8f4ee]/95 max-w-xl font-light leading-relaxed drop-shadow-sm">
            {SPA_CONFIG.subTagline}
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-full bg-[#c49a6c] hover:bg-[#b0875b] text-[#1c120c] font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Begin Your Journey
            </button>
          </div>
        </div>

        {/* Down Arrow Badge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center text-white animate-bounce pointer-events-none shadow-sm">
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>

      {/* Overlapping Featured Cards Row - Luxurious Dark Cards */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-24 sm:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => onOpenBooking(treatment)}
              className="group bg-[#251b14] rounded-3xl p-5 shadow-card-float hover:shadow-soft-lift transition-all duration-500 cursor-pointer border border-[#8c664d]/30 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 border border-[#8c664d]/30">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="text-center px-2 pb-2">
                <h3 className="font-serif text-lg font-semibold text-[#f7f2eb] tracking-wide group-hover:text-[#c49a6c] transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-xs text-[#c7b7aa] mt-1 line-clamp-1 font-light">
                  {treatment.subtitle}
                </p>

                <div className="mt-3 pt-3 border-t border-[#35271e] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#c49a6c]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c49a6c]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#c49a6c]">90m / Rp300K</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
