export const SPA_CONFIG = {
  name: "Aquarius Massage Home Spa",
  shortName: "Aquarius Spa",
  tagline: "Relax Your Body, Refresh Your Mind",
  subTagline: "Layanan pijat profesional yang datang langsung ke lokasi Anda untuk kenyamanan & relaksasi maksimal.",
  phone: "0819-9316-5133",
  whatsappNumber: "6281993165133",
  operatingHours: "Setiap Hari | 10.00 - 23.00 WIB",
  serviceAreas: ["Jakarta", "Tangerang", "Bekasi", "Depok", "BSD & Serpong"],
};

export const SERVICES = [
  {
    id: "traditional",
    name: "TRADITIONAL MASSAGE",
    subtitle: "Pijat Tradisional Khas Nusantara",
    description: "Pijat tradisional untuk meredakan pegal, melancarkan peredaran darah, mengatasi otot kaku, dan mengembalikan kebugaran tubuh secara menyeluruh.",
    badge: "Paling Populer",
    icon: "Flower2",
    image: "/images/traditional_massage_hands.png",
    prices: [
      { duration: "90 MENIT", price: "Rp300.000", rawPrice: 300000, value: "90m" },
      { duration: "120 MENIT", price: "Rp400.000", rawPrice: 400000, value: "120m" }
    ]
  },
  {
    id: "relaxing",
    name: "RELAXING MASSAGE",
    subtitle: "Pijat Sentuhan Soft & Relaksasi",
    description: "Teknik pijat relaksasi dengan sentuhan lembut untuk mengurangi stres, ketegangan pikiran, melepaskan penat harian, dan memberikan rasa nyaman mendalam.",
    badge: "Best Seller",
    icon: "Sparkles",
    image: "/images/hero_sanctuary.png",
    prices: [
      { duration: "90 MENIT", price: "Rp300.000", rawPrice: 300000, value: "90m" },
      { duration: "120 MENIT", price: "Rp400.000", rawPrice: 400000, value: "120m" }
    ]
  },
  {
    id: "aromatherapy",
    name: "AROMATHERAPY MASSAGE",
    subtitle: "Pijat Minyak Aromaterapi Esensial",
    description: "Pijat dengan minyak aromaterapi pilihan yang memberikan efek relaksasi lebih mendalam, menutrisi kulit, serta menyegarkan aroma tubuh Anda.",
    badge: "Favorit Pelanggan",
    icon: "Flame",
    image: "/images/aromatherapy_oil_pouring.png",
    prices: [
      { duration: "90 MENIT", price: "Rp300.000", rawPrice: 300000, value: "90m" },
      { duration: "120 MENIT", price: "Rp400.000", rawPrice: 400000, value: "120m" }
    ]
  },
  {
    id: "reflexology",
    name: "REFLEXOLOGY & BODY SPA",
    subtitle: "Refleksi Titik Syaraf & Relaksasi Segar",
    description: "Perpaduan pijat titik syaraf refleksi dan baluran scrub aromatik untuk melancarkan sirkulasi energi vital serta memanjakan otot lelah Anda.",
    badge: "Rekomendasi",
    icon: "HeartPulse",
    image: "/images/hot_stone_reflexology.png",
    prices: [
      { duration: "90 MENIT", price: "Rp300.000", rawPrice: 300000, value: "90m" },
      { duration: "120 MENIT", price: "Rp400.000", rawPrice: 400000, value: "120m" }
    ]
  }
];

export const EXTENDED_OPTION = {
  title: "EXTENDED TIME ADD-ON",
  subtitle: "Ingin Waktu Relaksasi Lebih Lama?",
  duration: "+30 MENIT",
  price: "Rp100.000",
  rawPrice: 100000,
  description: "Dapatkan tambahan durasi pijat 30 menit ekstra untuk relaksasi yang lebih optimal di seluruh bagian tubuh Anda."
};

export const FEATURES = [
  {
    title: "TERAPIS BERPENGALAMAN",
    description: "Terapis wanita profesional, ramah, terlatih, dan berpengalaman di bidangnya.",
    icon: "UserCheck"
  },
  {
    title: "PRIVASI TERJAMIN",
    description: "Kenyamanan, kebersihan, dan privasi Anda adalah prioritas utama kami.",
    icon: "ShieldCheck"
  },
  {
    title: "LAYANAN PANGGILAN LOKASI",
    description: "Terapis siap datang langsung ke rumah, hotel, maupun apartemen Anda.",
    icon: "MapPin"
  },
  {
    title: "PELAYANAN TERBAIK",
    description: "Kepuasan Anda dan kesegaran tubuh Anda adalah komitmen layanan kami.",
    icon: "ThumbsUp"
  }
];

export const STEPS = [
  {
    step: "01",
    title: "PILIH LAYANAN",
    description: "Pilih paket pijat (Traditional, Relaxing, atau Aromatherapy) & durasi pilihan Anda (90m / 120m)."
  },
  {
    step: "02",
    title: "HUBUNGI WHATSAPP",
    description: "Klik tombol WA untuk terhubung otomatis dengan Admin Aquarius Spa."
  },
  {
    step: "03",
    title: "KONFIRMASI LOKASI",
    description: "Kirimkan alamat rumah, apartemen, atau hotel tempat Anda ingin mendapatkan layanan."
  },
  {
    step: "04",
    title: "TERAPIS TIBA & RELAKSASI",
    description: "Terapis profesional tiba di lokasi Anda tepat waktu & nikmati momen relaksasi sempurna."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Therapeutic Essential Oil Pouring",
    category: "Essential Oil Therapy",
    image: "/images/aromatherapy_oil_pouring.png"
  },
  {
    id: 2,
    title: "Hot Stone Therapy & Candles",
    category: "Specialized Therapy",
    image: "/images/hot_stone_reflexology.png"
  },
  {
    id: 3,
    title: "Deep Tissue & Back Massage Technique",
    category: "Massage Hands Care",
    image: "/images/traditional_massage_hands.png"
  },
  {
    id: 4,
    title: "Serene Spa Sanctuary Ambience",
    category: "Suasana Relaksasi",
    image: "/images/hero_sanctuary.png"
  },
  {
    id: 5,
    title: "Aromatherapy Oil Botanicals",
    category: "Perawatan Tubuh",
    image: "/images/aromatherapy_oil_pouring.png"
  },
  {
    id: 6,
    title: "Reflexology & Body Spa Care",
    category: "Relaksasi Total",
    image: "/images/hot_stone_reflexology.png"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rian",
    location: "Jakarta South",
    rating: 5,
    comment: "Pelayanan sangat memuaskan, terapis ramah dan sangat profesional. Badan jadi jauh lebih segar dan nileks setelah aktivitas padat. Pasti akan pesan lagi!",
    service: "Traditional Massage 120 Menit"
  },
  {
    name: "Siska Maya",
    location: "Tangerang",
    rating: 5,
    comment: "Sangat praktis terapis datang langsung ke apartemen. Pijatan minyak aromaterapinya bikin rileks banget, ketegangan di pundak langsung hilang.",
    service: "Aromatherapy Massage 90 Menit"
  },
  {
    name: "Hendra W.",
    location: "Bekasi",
    rating: 5,
    comment: "Respon admin cepat lewat WA, terapis tepat waktu & sopan. Tambahan extended 30 menit benar-benar memuaskan!",
    service: "Relaxing Massage 120 Menit + Extended 30m"
  }
];

export function createWhatsAppUrl(serviceName = "", duration = "", extended = false) {
  let message = `Halo Admin Aquarius Spa, saya ingin memesan layanan Home Spa:`;
  if (serviceName) {
    message += `\n- Layanan: ${serviceName}`;
  }
  if (duration) {
    message += `\n- Durasi: ${duration}`;
  }
  if (extended) {
    message += `\n- Tambahan: Extended 30 Menit (+Rp100.000)`;
  }
  message += `\n\nMohon info ketersediaan terapis & jam layanan. Terima kasih!`;
  
  return `https://wa.me/${SPA_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
