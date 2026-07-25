'use client';

import Image from 'next/image';
import { Star, ArrowDown } from 'lucide-react';
import { SPA_CONFIG, SERVICES } from '../data/spaData';

export default function HeroSection({ onOpenBooking }) {
  const featuredTreatments = SERVICES.slice(0, 3);

  return (
    <section id="hero" className="relative pt-28 lg:pt-36 pb-32 lg:pb-40 bg-[#f8f4ee]">
      {/* Upper Hero Image Banner Container in Light Atmosphere */}
      <div className="relative max-w-[94%] mx-auto h-[550px] sm:h-[620px] rounded-3xl overflow-hidden shadow-card-float border border-[#e8ded3]">
        <Image
          src="/images/hero_sanctuary.png"
          alt="Aquarius Spa Sanctuary"
          fill
          priority
          className="object-cover object-center filter brightness-95 contrast-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c15]/75 via-[#2b1c15]/30 to-black/20" />

        {/* Hero Center Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white max-w-4xl mx-auto space-y-5">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#f8f4ee] bg-white/20 px-4.5 py-1.5 rounded-full backdrop-blur-md border border-white/30 shadow-sm">
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
              className="px-8 py-3.5 rounded-full bg-[#6b5e4c] hover:bg-[#524637] text-white font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Begin Your Journey
            </button>
          </div>
        </div>

        {/* Down Arrow Badge */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/25 border border-white/40 backdrop-blur-md flex items-center justify-center text-white animate-bounce pointer-events-none shadow-sm">
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>

      {/* Overlapping Featured Cards Row - Clean Cream & White Cards */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-24 sm:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              onClick={() => onOpenBooking(treatment)}
              className="group bg-white rounded-3xl p-5 shadow-card-float hover:shadow-soft-lift transition-all duration-500 cursor-pointer border border-[#e8ded3] transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 border border-[#e8ded3]">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="text-center px-2 pb-2">
                <h3 className="font-serif text-lg font-semibold text-[#2b1c15] tracking-wide group-hover:text-[#6b5e4c] transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-xs text-[#5c4336] mt-1 line-clamp-1 font-light">
                  {treatment.subtitle}
                </p>

                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#805947]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#805947]" />
                    ))}
                  </div>
                  <span className="font-bold text-[#2b1c15]">90m / Rp300K</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
