'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/spaData';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#1c130e] text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a6c] font-semibold">Visual Sanctuary</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal">
            Suasana & Teknik Terapi Spa
          </h2>
          <p className="text-[#c7b7aa] text-xs sm:text-sm font-light">
            Sentuhan kehangatan, aroma terapi alami, dan kenyamanan terapi profesional untuk jiwa dan raga.
          </p>
        </div>

        {/* 6 Photo Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-2xl hover:shadow-soft-lift transition-all duration-500 cursor-pointer border border-[#8c664d]/40"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140c08]/80 via-[#140c08]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#f2e3d3] font-medium bg-[#1a120c]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#c49a6c]/40">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-serif font-semibold text-white mt-1.5">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#1a120c]/80 backdrop-blur-md border border-[#c49a6c]/40 flex items-center justify-center text-[#c49a6c] group-hover:bg-[#c49a6c] group-hover:text-[#140c08] transition-colors shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4-Photo Treatment Photography Strip */}
        <div className="pt-6 border-t border-[#35271e]">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#c49a6c] font-semibold">Gallery Highlights</span>
            <h3 className="text-xl font-serif text-white mt-1 font-medium">Experiential Spa Therapy Moments</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-44 rounded-2xl overflow-hidden border border-[#8c664d]/40 shadow-sm group">
              <Image
                src="/images/traditional_massage_hands.png"
                alt="Back Massage Treatment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#1a120c]/90 backdrop-blur-sm p-2 rounded-xl text-center border border-[#8c664d]/30">
                <span className="text-[11px] font-medium text-white block">Deep Tissue Care</span>
              </div>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden border border-[#8c664d]/40 shadow-sm group">
              <Image
                src="/images/hot_stone_reflexology.png"
                alt="Hot Stone Placement"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#1a120c]/90 backdrop-blur-sm p-2 rounded-xl text-center border border-[#8c664d]/30">
                <span className="text-[11px] font-medium text-white block">Hot Stone Therapy</span>
              </div>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden border border-[#8c664d]/40 shadow-sm group">
              <Image
                src="/images/aromatherapy_oil_pouring.png"
                alt="Reflexology Foot Care Bowl"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#1a120c]/90 backdrop-blur-sm p-2 rounded-xl text-center border border-[#8c664d]/30">
                <span className="text-[11px] font-medium text-white block">Aromatherapy Oil</span>
              </div>
            </div>

            <div className="relative h-44 rounded-2xl overflow-hidden border border-[#8c664d]/40 shadow-sm group">
              <Image
                src="/images/hero_sanctuary.png"
                alt="Oil Hair & Head Spa"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#1a120c]/90 backdrop-blur-sm p-2 rounded-xl text-center border border-[#8c664d]/30">
                <span className="text-[11px] font-medium text-white block">Spa Sanctuary</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#140c08]/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-[#251b14] border border-stone-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden bg-[#251b14] border border-[#8c664d]/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh] w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5 bg-[#251b14] text-center border-t border-[#35271e]">
              <span className="text-xs uppercase tracking-widest text-[#c49a6c] font-medium">{selectedImage.category}</span>
              <h3 className="text-xl font-serif font-semibold text-white mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
