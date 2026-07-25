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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#c49a6c] font-semibold">Keunggulan Layanan</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal mt-1">
            Mengapa Memilih Aquarius Spa?
          </h2>
          <p className="text-[#c7b7aa] text-xs sm:text-sm mt-2 font-light">
            Standar kualitas tinggi dan privasi terjamin untuk pengalaman home spa sempurna.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#1a120c] p-7 rounded-3xl border border-[#8c664d]/40 shadow-2xl hover:border-[#c49a6c]/60 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#251b14] border border-[#c49a6c]/40 flex items-center justify-center mb-5 text-[#c49a6c] group-hover:bg-[#c49a6c] group-hover:text-[#140c08] transition-colors">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="text-sm font-serif font-semibold text-white tracking-wider uppercase mb-2">
                  {feature.title}
                </h3>

                <p className="text-xs text-[#c7b7aa] leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
