import './globals.css';
import Script from 'next/script';

const siteName = 'Aquarius Massage Home Spa';
const siteDescription = 'Aquarius Massage Home Spa menyediakan pijat panggilan ke hotel dan apartemen di Jakarta dan Depok. Pilih Traditional Massage, Relaxing Massage, Aromatherapy Massage, atau Reflexology & Body Spa dengan terapis wanita berpengalaman dan privasi terjaga.';
const siteKeywords = [
  'aquarius massage home spa',
  'aquarius spa',
  'pijat panggilan jakarta',
  'pijat panggilan depok',
  'home spa jakarta',
  'home spa depok',
  'pijat hotel jakarta',
  'pijat apartemen jakarta',
  'pijat hotel depok',
  'pijat apartemen depok',
  'massage hotel jakarta',
  'massage apartemen depok',
  'pijat hotel',
  'pijat apartemen',
  'massage home spa',
  'traditional massage',
  'relaxing massage',
  'aromatherapy massage',
  'reflexology body spa',
  'terapis wanita profesional',
  'spa panggilan'
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: siteName,
  description: siteDescription,
  telephone: '0813-1188-515',
  areaServed: ['Jakarta', 'Depok'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  openingHours: 'Mo-Su 10:00-00:00',
  priceRange: 'Rp300.000 - Rp400.000',
  serviceType: ['Traditional Massage', 'Relaxing Massage', 'Aromatherapy Massage', 'Reflexology & Body Spa'],
  image: '/images/big-logo.png',
};

export const metadata = {
  applicationName: siteName,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aquariushomespa.com'),
  title: {
    default: 'Aquarius Massage Home Spa | Pijat Panggilan Hotel & Apartemen Jakarta & Depok',
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Aquarius Massage Home Spa | Pijat Panggilan Hotel & Apartemen Jakarta & Depok',
    description: siteDescription,
    type: 'website',
    locale: 'id_ID',
    siteName,
    images: [
      {
        url: '/images/big-logo.png',
        width: 2000,
        height: 2000,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquarius Massage Home Spa | Pijat Panggilan Hotel & Apartemen Jakarta & Depok',
    description: siteDescription,
    images: ['/images/big-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-[#0a0806] text-[#e6dfd5] selection:bg-[#d4af37] selection:text-stone-950">
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18367956526" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18367956526');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KV4VNTH4');
          `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV4VNTH4" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
