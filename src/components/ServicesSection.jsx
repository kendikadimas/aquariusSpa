'use client';

import Image from 'next/image';
import { Flower2, Sparkles, Flame, HeartPulse, Clock, Plus, ArrowRight } from 'lucide-react';
import { SERVICES, EXTENDED_OPTION } from '../data/spaData';

const iconMap = {
  Flower2: Flower2,
  Sparkles: Sparkles,
  Flame: Flame,
  HeartPulse: HeartPulse,
};

export default function ServicesSection({ onOpenBooking }) {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#5a3d30] font-semibold">
            Wellness Menu & Price List
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2b1c15] font-normal tracking-tight">
            Signature Treatments
          </h2>
          <p className="text-[#5c4336] text-sm font-light">
            Pilihan terapi pijat terbaik untuk memulihkan kebugaran dan ketenangan pikiran Anda.
          </p>
        </div>

        {/* 4 Treatments Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="group bg-[#f8f4ee] rounded-3xl p-5 shadow-card-float hover:shadow-soft-lift transition-all duration-500 border border-[#e8ded3] flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 border border-[#e8ded3] shadow-sm">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c15]/50 via-transparent to-transparent opacity-60" />
                    
                    {/* Badge */}
                    <span className="absolute top-3 right-3 text-[10px] font-medium tracking-wider bg-white/90 text-[#2b1c15] px-2.5 py-1 rounded-full backdrop-blur-md border border-white/40 shadow-sm">
                      {service.badge}
                    </span>

                    {/* Icon Emblem Overlay */}
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center text-[#5a3d30] shadow-sm">
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#2b1c15] tracking-wide mb-0.5 group-hover:text-[#5a3d30] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#5a3d30] font-medium mb-3">{service.subtitle}</p>

                  <p className="text-xs text-[#5c4336] leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Prices Box */}
                  <div className="bg-white rounded-2xl p-3.5 border border-[#e8ded3] space-y-2 text-xs">
                    {service.prices.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-1 px-2 rounded font-medium text-[#2b1c15]"
                      >
                        <span className="flex items-center gap-1.5 text-[#5c4336]">
                          <Clock className="w-3.5 h-3.5 text-[#5a3d30]" />
                          {p.duration}
                        </span>
                        <span className="font-bold text-[#2b1c15]">{p.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chocolate Reserve Button */}
                  <button
                    onClick={() => onOpenBooking(service)}
                    className="w-full py-3 rounded-full bg-[#5a3d30] hover:bg-[#3c281e] text-[#f8f4ee] text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Pesan Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extended Option Highlight Card */}
        <div className="mt-10 bg-[#f8f4ee] border border-[#e8ded3] rounded-3xl p-6 sm:p-8 shadow-card-float flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-white border border-stone-300 flex items-center justify-center shrink-0 text-[#5a3d30]">
              <Plus className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5a3d30] font-semibold">Opsi Tambahan Waktu</span>
              <h3 className="text-xl font-serif font-medium text-[#2b1c15]">{EXTENDED_OPTION.title}</h3>
              <p className="text-xs text-[#5c4336] mt-0.5 max-w-xl font-light">
                {EXTENDED_OPTION.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white px-6 py-3.5 rounded-2xl border border-stone-200 shrink-0">
            <div>
              <span className="text-[10px] text-[#5c4336] uppercase tracking-wider block">Durasi Ekstra</span>
              <span className="text-sm font-bold text-[#2b1c15]">{EXTENDED_OPTION.duration}</span>
            </div>
            <div className="h-6 w-px bg-stone-300"></div>
            <div>
              <span className="text-[10px] text-[#5c4336] uppercase tracking-wider block">Biaya Extended</span>
              <span className="text-lg font-bold text-[#5a3d30]">{EXTENDED_OPTION.price}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
