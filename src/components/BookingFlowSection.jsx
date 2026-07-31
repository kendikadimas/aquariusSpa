'use client';

import { CheckCircle, Sparkles, MessageSquare } from 'lucide-react';
import { STEPS } from '../data/spaData';

export default function BookingFlowSection({ onOpenBooking }) {
  return (
    <section id="flow" className="py-24 bg-[#f8f4ee] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#5a3d30] font-semibold block">Proses Mudah</span>
            <span className="text-[10px] uppercase tracking-wider text-[#8c664d] font-medium block">Easy Booking Process</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2b1c15] font-normal">
              4 Langkah Praktis Nikmati Home Spa
            </h2>
            <p className="text-sm font-serif italic text-[#8c664d] font-normal">
              4 Easy Steps to Enjoy Home Spa
            </p>
          </div>

          <div className="space-y-1 pt-1">
            <p className="text-[#5c4336] text-xs sm:text-sm font-light">
              Cukup pesan via WhatsApp, terapis profesional kami siap datang langsung ke lokasi Anda.
            </p>
            <p className="text-[#8c664d] text-xs font-light italic">
              Simply book via WhatsApp, our professional therapist will arrive directly at your location.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#e8ded3] shadow-card-float hover:shadow-soft-lift transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif font-bold text-[#2b1c15]">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#f0e8df] flex items-center justify-center text-[#5a3d30] text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm font-serif font-semibold text-[#2b1c15] uppercase tracking-wider mb-0.5">
                  {step.title}
                </h3>
                <span className="text-[10px] font-medium text-[#8c664d] uppercase tracking-wider block mb-2">
                  {step.titleEn}
                </span>

                <div className="space-y-2">
                  <p className="text-xs text-[#5c4336] leading-relaxed font-light">
                    {step.description}
                  </p>
                  <p className="text-[11px] text-[#8c664d] leading-relaxed font-light italic pt-2 border-t border-stone-100">
                    {step.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#5a3d30] font-medium">
                <div>
                  <span className="block font-semibold">Langkah {idx + 1}</span>
                  <span className="text-[9px] text-[#8c664d] font-normal block">Step {idx + 1}</span>
                </div>
                <CheckCircle className="w-4 h-4 text-[#5a3d30]" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#5a3d30] hover:bg-[#3c281e] text-[#f8f4ee] font-bold transition-all duration-300 shadow-md group"
          >
            <MessageSquare className="w-4 h-4 text-[#f8f4ee]" />
            <div className="flex flex-col items-center leading-tight">
              <span className="text-xs tracking-wider uppercase">Pesan Home Spa Sekarang</span>
              <span className="text-[10px] font-normal lowercase tracking-normal opacity-85">Book Home Spa Now</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

