'use client';

import Image from 'next/image';
import { CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { SPA_CONFIG } from '../data/spaData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#f8f4ee] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
        
        {/* Top Section: Dual Photo Collage + Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Dual Photo Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-card-float border border-[#e8ded3] group">
              <Image
                src="/images/traditional_massage_hands.png"
                alt="Therapeutic Massage Hands Technique"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c15]/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-card-float border border-[#e8ded3] group mt-6">
              <Image
                src="/images/hot_stone_reflexology.png"
                alt="Head & Shoulder Relaxation Therapy"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c15]/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Brand Story Text */}
          <div className="lg:col-span-6 space-y-6 text-[#2b1c15]">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-[#5a3d30]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#5a3d30] font-semibold">About Us</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#2b1c15] leading-tight">
              Get to Know Us More
            </h2>

            <p className="text-base text-[#5c4336] font-light leading-relaxed">
              <strong className="text-[#2b1c15] font-medium">{SPA_CONFIG.name}</strong> menghadirkan keharmonisan relaksasi tubuh dan keheningan pikiran. Kami hadir khusus untuk memberikan perawatan pijat profesional berkualitas spa kelas atas langsung di kediaman, hotel, maupun apartemen Anda.
            </p>

            <p className="text-sm text-[#5c4336] font-light leading-relaxed">
              Terapis wanita kami dibekali keterampilan teruji dalam teknik pijat tradisional, relaksasi otot mendalam, serta baluran minyak aromaterapi alami yang menyegarkan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0" />
                <span className="text-[#2b1c15] font-medium">Terapis Wanita Bersertifikat</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0" />
                <span className="text-[#2b1c15] font-medium">Minyak Aromaterapi Alami</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0" />
                <span className="text-[#2b1c15] font-medium">100% Privasi & Kebersihan Steril</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0" />
                <span className="text-[#2b1c15] font-medium">Jakarta • Tangerang • Bekasi</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: "We Treat You Our Best" Feature Banner in Clean White */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card-float border border-[#e8ded3] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#5a3d30] font-semibold">Layanan Istimewa</span>
            <h3 className="text-2xl sm:text-4xl font-serif text-[#2b1c15] font-normal leading-tight">
              We Treat You Our Best
            </h3>
            <p className="text-xs sm:text-sm text-[#5c4336] font-light leading-relaxed">
              Setiap sesi pijat dirancang secara personal untuk meredakan titik-titik ketegangan otot, melancarkan aliran energi, dan memanjakan indera Anda dengan aroma terapi alami.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-[#2b1c15]">
              <span className="bg-[#f0e8df] px-3.5 py-1.5 rounded-full border border-stone-200 flex items-center gap-2 text-[#5a3d30]">
                <Sparkles className="w-3.5 h-3.5" />
                Pure Essential Oils
              </span>
              <span className="bg-[#f0e8df] px-3.5 py-1.5 rounded-full border border-stone-200 flex items-center gap-2 text-[#5a3d30]">
                <Heart className="w-3.5 h-3.5" />
                Professional Care
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src="/images/aromatherapy_oil_pouring.png"
              alt="Essential Oil Pouring Therapy with Botanicals"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c15]/30 via-transparent to-transparent" />
          </div>

        </div>

      </div>
    </section>
  );
}
