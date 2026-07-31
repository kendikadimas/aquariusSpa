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
                src="/images/reflexology_body_spa.png"
                alt="Reflexology & Body Spa Therapy"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b1c15]/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Brand Story Text */}
          <div className="lg:col-span-6 space-y-6 text-[#2b1c15]">
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="h-px w-8 bg-[#5a3d30]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#5a3d30] font-semibold">TENTANG KAMI</span>
              </div>
              <span className="text-[11px] text-[#8c664d] font-medium tracking-widest block uppercase">ABOUT US</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#2b1c15] leading-tight">
                Kenali Kami Lebih Dekat
              </h2>
              <p className="text-sm font-serif italic text-[#8c664d] font-normal">
                Get to Know Us More
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-base text-[#5c4336] font-light leading-relaxed">
                <strong className="text-[#2b1c15] font-medium">{SPA_CONFIG.name}</strong> menghadirkan keharmonisan relaksasi tubuh dan keheningan pikiran. Kami hadir khusus untuk memberikan perawatan pijat profesional berkualitas spa kelas atas langsung di kediaman, hotel, maupun apartemen Anda.
              </p>
              <p className="text-xs text-[#8c664d] italic font-light leading-relaxed pt-1 border-t border-[#e8ded3]/70">
                <strong className="font-medium">{SPA_CONFIG.name}</strong> brings harmony to body relaxation and peace of mind. We provide high-end professional spa massage treatments directly to your residence, hotel, or apartment.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-[#5c4336] font-light leading-relaxed">
                Terapis wanita kami dibekali keterampilan teruji dalam teknik pijat tradisional, relaksasi otot mendalam, serta baluran minyak aromaterapi alami yang menyegarkan.
              </p>
              <p className="text-xs text-[#8c664d] italic font-light leading-relaxed pt-1 border-t border-[#e8ded3]/70">
                Our female therapists are equipped with proven skills in traditional massage techniques, deep muscle relaxation, and refreshing natural aromatherapy oils.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#2b1c15] font-medium block">Terapis Wanita Bersertifikat</span>
                  <span className="text-[10px] text-[#8c664d] italic block">Certified Female Therapists</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#2b1c15] font-medium block">Minyak Aromaterapi Alami</span>
                  <span className="text-[10px] text-[#8c664d] italic block">Natural Aromatherapy Oils</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#2b1c15] font-medium block">100% Privasi & Kebersihan Steril</span>
                  <span className="text-[10px] text-[#8c664d] italic block">100% Privacy & Sterilized Cleanliness</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5a3d30] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#2b1c15] font-medium block">Jakarta • Tangerang • Bekasi • Depok</span>
                  <span className="text-[10px] text-[#8c664d] italic block">Service Areas: Jabodetabek</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: "We Treat You Our Best" Feature Banner in Clean White */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card-float border border-[#e8ded3] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#5a3d30] font-semibold block">Layanan Istimewa</span>
              <span className="text-[10px] uppercase tracking-wider text-[#8c664d] font-medium block">Special Services</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#2b1c15] font-normal leading-tight">
                Kami Memberikan Pelayanan Terbaik
              </h3>
              <p className="text-xs font-serif italic text-[#8c664d] font-normal">
                We Treat You Our Best
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs sm:text-sm text-[#5c4336] font-light leading-relaxed">
                Setiap sesi pijat dirancang secara personal untuk meredakan titik-titik ketegangan otot, melancarkan aliran energi, dan memanjakan indera Anda dengan aroma terapi alami.
              </p>
              <p className="text-[11px] text-[#8c664d] italic font-light leading-relaxed pt-1 border-t border-[#e8ded3]/70">
                Each massage session is personally crafted to soothe muscle tension points, improve energy flow, and pamper your senses with natural aromatherapy.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#2b1c15]">
              <span className="bg-[#f0e8df] px-3.5 py-1.5 rounded-full border border-stone-200 flex flex-col items-center text-[#5a3d30]">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Minyak Esensial Murni</span>
                </div>
                <span className="text-[9px] font-normal text-[#8c664d] italic">Pure Essential Oils</span>
              </span>

              <span className="bg-[#f0e8df] px-3.5 py-1.5 rounded-full border border-stone-200 flex flex-col items-center text-[#5a3d30]">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Perawatan Profesional</span>
                </div>
                <span className="text-[9px] font-normal text-[#8c664d] italic">Professional Care</span>
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

