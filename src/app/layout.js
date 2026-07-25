import './globals.css';

export const metadata = {
  title: 'Aquarius Massage Home Spa | Layanan Pijat Panggilan Relaksasi',
  description: 'Layanan pijat profesional panggilan ke lokasi Anda (Rumah, Hotel, Apartemen) di Jakarta, Tangerang, & Bekasi. Traditional Massage, Relaxing Massage, Aromatherapy Spa. Hubungi 0819-9316-5133.',
  keywords: ['aquarius spa', 'home spa jakarta', 'pijat panggilan', 'massage home spa', 'traditional massage', 'aromatherapy massage', 'pijat tgr beka'],
  openGraph: {
    title: 'Aquarius Massage Home Spa - Relax Your Body, Refresh Your Mind',
    description: 'Pijat profesional panggilan langsung ke tempat Anda. Terapis wanita berpengalaman, 100% privasi terjamin.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-[#0a0806] text-[#e6dfd5] selection:bg-[#d4af37] selection:text-stone-950">
        {children}
      </body>
    </html>
  );
}
