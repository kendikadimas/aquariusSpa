'use client';

import { useState, useEffect } from 'react';
import { X, User, MapPin, MessageSquare } from 'lucide-react';
import { SERVICES, SPA_CONFIG } from '../data/spaData';

export default function BookingModal({ isOpen, onClose, defaultService = null }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0].name);
  const [selectedDuration, setSelectedDuration] = useState('90 MENIT (Rp300.000)');
  const [includeExtended, setIncludeExtended] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService.name);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    let msg = `Halo Admin ${SPA_CONFIG.name}, saya ingin reservasi:`;
    msg += `\n- *Nama*: ${customerName || 'Pelanggan'}`;
    msg += `\n- *Layanan*: ${selectedService}`;
    msg += `\n- *Durasi*: ${selectedDuration}`;
    if (includeExtended) {
      msg += `\n- *Extended*: +30 Menit (+Rp100.000)`;
    }
    if (location) {
      msg += `\n- *Lokasi/Alamat*: ${location}`;
    }
    if (notes) {
      msg += `\n- *Catatan*: ${notes}`;
    }
    msg += `\n\nMohon konfirmasi jadwal & ketersediaan terapis. Terima kasih!`;

    const waUrl = `https://wa.me/${SPA_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2c251e]/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-xl bg-white border border-[#e8ded3] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#2c251e] max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-[#2c251e] transition-colors rounded-full hover:bg-stone-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-[#6b5e4c] font-semibold block">Reservasi Home Spa</span>
          <span className="text-[10px] uppercase tracking-wider text-[#8c664d] font-medium block">Home Spa Reservation</span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#2c251e] font-normal mt-1">Form Pemesanan</h3>
          <p className="text-xs font-serif italic text-[#8c664d]">Booking Form</p>
          <p className="text-xs text-[#5c4336] mt-1 font-light">Layanan Pijat Panggilan Langsung ke Tempat Anda</p>
          <p className="text-[10px] text-[#8c664d] font-light italic">On-Demand Massage Service Delivered to Your Location</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Service Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#6b5e4c] font-semibold mb-1">
              <span>Pilih Layanan</span>
              <span className="text-[10px] font-normal text-[#8c664d] block lowercase tracking-normal">Select Service</span>
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full bg-[#f8f4ee] border border-[#e8ded3] rounded-2xl px-4 py-3 text-sm text-[#2c251e] focus:outline-none focus:border-[#6b5e4c] transition-colors cursor-pointer font-medium"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name} className="bg-white text-[#2c251e]">{s.name} - {s.subtitle}</option>
              ))}
            </select>
          </div>

          {/* Duration Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#6b5e4c] font-semibold mb-2">
              <span>Pilih Durasi Utama</span>
              <span className="text-[10px] font-normal text-[#8c664d] block lowercase tracking-normal">Select Main Duration</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedDuration('90 MENIT (Rp300.000)')}
                className={`py-3 px-4 rounded-2xl border text-xs font-semibold transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDuration.includes('90')
                    ? 'bg-[#6b5e4c] border-[#6b5e4c] text-white shadow-sm font-bold'
                    : 'bg-[#f8f4ee] border-[#e8ded3] text-[#5c4336] hover:border-stone-300'
                }`}
              >
                <span>90 MENIT (90 Mins)</span>
                <span className={selectedDuration.includes('90') ? 'text-stone-200' : 'text-[#2c251e]'}>Rp 300.000</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedDuration('120 MENIT (Rp400.000)')}
                className={`py-3 px-4 rounded-2xl border text-xs font-semibold transition-all flex flex-col items-center justify-center gap-0.5 ${
                  selectedDuration.includes('120')
                    ? 'bg-[#6b5e4c] border-[#6b5e4c] text-white shadow-sm font-bold'
                    : 'bg-[#f8f4ee] border-[#e8ded3] text-[#5c4336] hover:border-stone-300'
                }`}
              >
                <span>120 MENIT (120 Mins)</span>
                <span className={selectedDuration.includes('120') ? 'text-stone-200' : 'text-[#2c251e]'}>Rp 400.000</span>
              </button>
            </div>
          </div>

          {/* Extended Time Option Checkbox */}
          <div className="bg-[#f8f4ee] border border-[#e8ded3] rounded-2xl p-4 transition-all">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeExtended}
                onChange={(e) => setIncludeExtended(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#6b5e4c] rounded cursor-pointer shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#2c251e] text-xs block">Tambahkan Extended Time (+30 Menit)</span>
                    <span className="text-[10px] text-[#8c664d] block font-light">Add Extended Time (+30 Mins)</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#6b5e4c] bg-white px-2.5 py-0.5 rounded-full border border-[#e8ded3]">+ Rp100.000</span>
                </div>
                <p className="text-[11px] text-[#5c4336] mt-1 font-light">Tambah 30 menit durasi pijat ekstra untuk relaksasi lebih maksimal.</p>
                <p className="text-[10px] text-[#8c664d] font-light italic">Add 30 minutes extra massage duration for maximum relaxation.</p>
              </div>
            </label>
          </div>

          {/* Customer Details */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-[#5c4336] mb-1">
                <span className="font-medium text-[#2c251e]">Nama Pemesan</span>
                <span className="text-[10px] text-[#8c664d] italic ml-1">(Booker Name)</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Contoh: Ibu Rina / Pak Budi (e.g. Mrs. Rina / Mr. Budi)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#f8f4ee] border border-[#e8ded3] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#2c251e] focus:outline-none focus:border-[#6b5e4c]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#5c4336] mb-1">
                <span className="font-medium text-[#2c251e]">Alamat / Area Lokasi Panggilan</span>
                <span className="text-[10px] text-[#8c664d] italic ml-1">(Address / Service Location)</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Contoh: Apartemen Mediterania / Hotel Grand / Rumah BSD"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#f8f4ee] border border-[#e8ded3] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#2c251e] focus:outline-none focus:border-[#6b5e4c]"
                />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 px-6 rounded-full bg-[#6b5e4c] hover:bg-[#524637] text-white font-bold transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-white shrink-0" />
            <div className="flex flex-col items-center leading-tight">
              <span className="text-xs font-bold tracking-wider uppercase">Kirim Pesanan via WhatsApp</span>
              <span className="text-[10px] font-normal lowercase tracking-normal opacity-85">Send Order via WhatsApp</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

