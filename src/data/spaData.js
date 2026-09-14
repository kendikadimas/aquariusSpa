export const SPA_CONFIG = {
  name: "Aquarius Massage Home Spa",
  shortName: "Aquarius Spa",
  tagline: "Relax Your Body, Refresh Your Mind",
  subTagline: "Layanan pijat profesional yang datang langsung ke lokasi Anda untuk kenyamanan & relaksasi maksimal.",
  phone: "0813-1188-515",
  whatsappNumber: "628131188515",
  operatingHours: "Setiap Hari | 10.00 - 00.00 WIB",
  serviceAreas: ["Jakarta", "Depok"],
};

export const SERVICES = [
  {
    id: "traditional",
    name: "TRADITIONAL MASSAGE",
    subtitle: "Pijat Tradisional Khas Nusantara",
    subtitleEn: "Traditional Archipelago Massage",
    description: "Pijat tradisional untuk meredakan pegal, melancarkan peredaran darah, mengatasi otot kaku, dan mengembalikan kebugaran tubuh secara menyeluruh.",
    descriptionEn: "Traditional massage to relieve body aches, improve blood circulation, soothe stiff muscles, and restore overall body vitality.",
    badge: "Paling Populer",
    badgeEn: "Most Popular",
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
    subtitleEn: "Soft Touch & Gentle Relaxation Massage",
    description: "Teknik pijat relaksasi dengan sentuhan lembut untuk mengurangi stres, ketegangan pikiran, melepaskan penat harian, dan memberikan rasa nyaman mendalam.",
    descriptionEn: "Gentle relaxation massage techniques to reduce stress, relieve mental fatigue, soothe daily tiredness, and bring deep comfort.",
    badge: "Best Seller",
    badgeEn: "Best Seller",
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
    subtitleEn: "Essential Aromatherapy Oil Massage",
    description: "Pijat dengan minyak aromaterapi pilihan yang memberikan efek relaksasi lebih mendalam, menutrisi kulit, serta menyegarkan aroma tubuh Anda.",
    descriptionEn: "Massage using curated essential oils that provide deeper relaxation, nourish the skin, and refresh your senses.",
    badge: "Favorit Pelanggan",
    badgeEn: "Customer Favorite",
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
    subtitleEn: "Reflexology Pressure Points & Body Refreshment",
    description: "Perpaduan pijat titik syaraf refleksi dan baluran scrub aromatik untuk melancarkan sirkulasi energi vital serta memanjakan otot lelah Anda.",
    descriptionEn: "A blend of reflexology pressure point massage and aromatic scrub to stimulate vital energy flow and soothe tired muscles.",
    badge: "Rekomendasi",
    badgeEn: "Recommended",
    icon: "HeartPulse",
    image: "/images/reflexology_body_spa.png",
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
  description: "Dapatkan tambahan durasi pijat 30 menit ekstra untuk relaksasi yang lebih optimal di seluruh bagian tubuh Anda.",
  descriptionEn: "Get an additional 30 minutes of massage time for optimal full-body relaxation."
};

export const FEATURES = [
  {
    title: "TERAPIS BERPENGALAMAN",
    titleEn: "EXPERIENCED THERAPISTS",
    description: "Terapis wanita profesional, ramah, terlatih, dan berpengalaman di bidangnya.",
    descriptionEn: "Professional, friendly, well-trained, and experienced female therapists.",
    icon: "UserCheck"
  },
  {
    title: "PRIVASI TERJAMIN",
    titleEn: "GUARANTEED PRIVACY",
    description: "Kenyamanan, kebersihan, dan privasi Anda adalah prioritas utama kami.",
    descriptionEn: "Your comfort, hygiene, and privacy are our top priority.",
    icon: "ShieldCheck"
  },
  {
    title: "LAYANAN PANGGILAN LOKASI",
    titleEn: "ON-DEMAND LOCATION SERVICE",
    description: "Terapis siap datang langsung ke hotel maupun apartemen Anda di Jakarta & Depok.",
    descriptionEn: "Therapists ready to visit your hotel or apartment in Jakarta & Depok.",
    icon: "MapPin"
  },
  {
    title: "PELAYANAN TERBAIK",
    titleEn: "EXCELLENT SERVICE",
    description: "Kepuasan Anda dan kesegaran tubuh Anda adalah komitmen layanan kami.",
    descriptionEn: "Your satisfaction and body rejuvenation are our service commitment.",
    icon: "ThumbsUp"
  }
];

export const STEPS = [
  {
    step: "01",
    title: "PILIH LAYANAN",
    titleEn: "SELECT SERVICE",
    description: "Pilih paket pijat (Traditional, Relaxing, atau Aromatherapy) & durasi pilihan Anda (90m / 120m).",
    descriptionEn: "Select your massage package & preferred duration (90m / 120m)."
  },
  {
    step: "02",
    title: "HUBUNGI WHATSAPP",
    titleEn: "CONTACT VIA WHATSAPP",
    description: "Klik tombol WA untuk terhubung otomatis dengan Admin Aquarius Spa.",
    descriptionEn: "Click the WA button to connect directly with Aquarius Spa Admin."
  },
  {
    step: "03",
    title: "KONFIRMASI LOKASI",
    titleEn: "CONFIRM LOCATION",
    description: "Kirimkan alamat apartemen atau hotel Anda di Jakarta & Depok.",
    descriptionEn: "Send your apartment or hotel address in Jakarta & Depok."
  },
  {
    step: "04",
    title: "TERAPIS TIBA & RELAKSASI",
    titleEn: "THERAPIST ARRIVES & RELAX",
    description: "Terapis profesional tiba di lokasi Anda tepat waktu & nikmati momen relaksasi sempurna.",
    descriptionEn: "Professional therapist arrives on time & enjoy your perfect relaxation session."
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
    title: "Pijat Refleksi & Perawatan Kaki",
    titleEn: "Reflexology & Foot Spa Care",
    category: "Reflexology Therapy",
    image: "/images/reflexology_body_spa.png"
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
    image: "/images/reflexology_body_spa.png"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rian",
    location: "Jakarta Selatan",
    rating: 5,
    comment: "Pelayanan sangat memuaskan, terapis ramah dan sangat profesional. Badan jadi jauh lebih segar dan nileks setelah aktivitas padat. Pasti akan pesan lagi!",
    service: "Traditional Massage 120 Menit"
  },
  {
    name: "Siska Maya",
    location: "Jakarta Pusat",
    rating: 5,
    comment: "Sangat praktis terapis datang langsung ke apartemen. Pijatan minyak aromaterapinya bikin rileks banget, ketegangan di pundak langsung hilang.",
    service: "Aromatherapy Massage 90 Menit"
  },
  {
    name: "Hendra W.",
    location: "Depok",
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
