'use client';

import { UserCheck, ShieldCheck, MapPin, ThumbsUp, Sparkles } from 'lucide-react';
import { FEATURES } from '../data/spaData';

const iconMap = {
  UserCheck: UserCheck,
  ShieldCheck: ShieldCheck,
  MapPin: MapPin,
  ThumbsUp: ThumbsUp,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[#251b14] relative text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c49a6c] font-semibold block">Keunggulan Layanan</span>
            <span className="text-[10px] uppercase tracking-wider text-[#c7b7aa] font-medium block">Service Advantages</span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal mt-1">
              Mengapa Memilih Aquarius Spa?
            </h2>
            <p className="text-sm font-serif italic text-[#c49a6c] font-normal">
              Why Choose Aquarius Spa?
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[#c7b7aa] text-xs sm:text-sm font-light">
              Standar kualitas tinggi dan privasi terjamin untuk pengalaman home spa sempurna.
            </p>
            <p className="text-[#a8988a] text-xs font-light italic">
              High quality standards and guaranteed privacy for the perfect home spa experience.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#1a120c] p-7 rounded-3xl border border-[#8c664d]/40 shadow-2xl hover:border-[#c49a6c]/60 transition-all duration-300 group flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#251b14] border border-[#c49a6c]/40 flex items-center justify-center mb-5 text-[#c49a6c] group-hover:bg-[#c49a6c] group-hover:text-[#140c08] transition-colors">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="text-sm font-serif font-semibold text-white tracking-wider uppercase mb-0.5">
                    {feature.title}
                  </h3>
                  <span className="text-[10px] text-[#c49a6c] font-medium tracking-wide uppercase block mb-3">
                    {feature.titleEn}
                  </span>

                  <div className="space-y-2">
                    <p className="text-xs text-[#c7b7aa] leading-relaxed font-light">
                      {feature.description}
                    </p>
                    <p className="text-[11px] text-[#a8988a] leading-relaxed font-light italic pt-2 border-t border-[#8c664d]/30">
                      {feature.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

