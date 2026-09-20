const GOOGLE_ADS_ID = 'AW-18367956526';
const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;

export function trackWhatsAppClick() {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  if (!CONVERSION_LABEL) return;

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
  });
}
