'use client';

import { Star, MapPin, Clock, Building2 } from 'lucide-react';
import { TESTIMONIALS, SPA_CONFIG } from '../data/spaData';

export default function TestimonialsAreaSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#f8f4ee] relative text-[#2b1c15]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#5a3d30] font-semibold block">Informasi & Ulasan</span>
            <span className="text-[10px] uppercase tracking-wider text-[#8c664d] font-medium block">Information & Reviews</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2b1c15] font-normal">
              Area Layanan & Testimoni Pelanggan
            </h2>
            <p className="text-sm font-serif italic text-[#8c664d] font-normal">
              Service Areas & Customer Reviews
            </p>
          </div>

          <div className="space-y-1 pt-1">
            <p className="text-[#5c4336] text-xs sm:text-sm font-light">
              Pengalaman nyata relaksasi pelanggan Aquarius Spa.
            </p>
            <p className="text-[#8c664d] text-xs font-light italic">
              Real relaxation experiences from Aquarius Spa guests.
            </p>
          </div>
        </div>

        {/* Testimonials Floating Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-[#e8ded3] shadow-card-float hover:shadow-soft-lift transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#805947] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#805947]" />
                  ))}
                </div>

                <p className="text-xs text-[#5c4336] font-light leading-relaxed italic mb-6">
                  "{testi.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-semibold text-[#2b1c15]">{testi.name}</h4>
                  <span className="text-[11px] text-[#5a3d30] font-medium">{testi.location}</span>
                </div>
                <span className="text-[10px] text-[#5a3d30] bg-[#f0e8df] px-2.5 py-1 rounded-full border border-[#e8ded3] font-medium">
                  {testi.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Information Cards (Area & Hours) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Area Layanan */}
          <div className="bg-white p-8 rounded-3xl border border-[#e8ded3] shadow-card-float flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0e8df] border border-[#e8ded3] flex items-center justify-center text-[#5a3d30]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#5a3d30] font-semibold block">Cakupan Wilayah</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#8c664d] font-medium block">Coverage Area</span>
                  <h3 className="text-lg font-serif font-semibold text-[#2b1c15] uppercase">AREA LAYANAN</h3>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-[#5c4336] font-light leading-relaxed">
                  Terapis profesional kami siap melayani panggilan ke Rumah, Hotel, & Apartemen di area:
                </p>
                <p className="text-[11px] text-[#8c664d] font-light italic leading-relaxed">
                  Our professional therapists are ready for home, hotel, & apartment calls in:
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {SPA_CONFIG.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-[#f0e8df] border border-[#e8ded3] text-[#2b1c15] text-xs font-medium px-3.5 py-1.5 rounded-full flex items-center gap-1.5"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#5a3d30]" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 text-center">
              <span className="text-xs font-mono tracking-widest text-[#5a3d30] block">JAKARTA • TANGERANG • BEKASI • DEPOK</span>
              <span className="text-[10px] font-mono tracking-wider text-[#8c664d] block">GREATER JAKARTA METROPOLITAN AREA</span>
            </div>
          </div>

          {/* Card 2: Jam Operasional */}
          <div className="bg-white p-8 rounded-3xl border border-[#e8ded3] shadow-card-float flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0e8df] border border-[#e8ded3] flex items-center justify-center text-[#5a3d30]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#5a3d30] font-semibold block">Waktu Operasional</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#8c664d] font-medium block">Operating Hours</span>
                  <h3 className="text-lg font-serif font-semibold text-[#2b1c15] uppercase">JAM OPERASIONAL</h3>
                </div>
              </div>

              <div className="text-center py-5 bg-[#f0e8df] rounded-2xl border border-[#e8ded3] space-y-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#5a3d30] block">Buka Setiap Hari</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#8c664d] block">Open Everyday</span>
                
                <span className="text-2xl font-serif font-bold text-[#2b1c15] block pt-1">
                  10.00 - 00.00 WIB
                </span>
                <span className="text-xs text-[#8c664d] font-medium block italic">
                  10:00 AM - 12:00 AM (Midnight)
                </span>

                <div className="pt-2">
                  <span className="text-xs text-[#5c4336] block font-light">Reservasi Fast Response via WhatsApp</span>
                  <span className="text-[10px] text-[#8c664d] block font-light italic">Fast Response Booking via WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex justify-center">
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

