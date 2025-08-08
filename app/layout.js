import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export async function generateMetadata({ params }) {
  const isRoot = !params?.slug; // Check if it's the root page
  return {
    metadataBase: new URL('https://www.zaferismakina.com'),
    title: {
      default: 'Zafer Makina - İş Makinası Yedek Parça',
      template: '%s | Zafer Makina',
    },
    description: 'Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr iş makinalarına özel yedek parçalar. Türkiye\'nin güvenilir iş makinası yedek parça tedarikçisi.',
    keywords: ['iş makinası', 'yedek parça', 'caterpillar', 'komatsu', 'jcb', 'case', 'volvo', 'liebherr', 'hidrolik pompa', 'motor yağı filtresi', 'fren balata'],
    authors: [{ name: 'Zafer Makina' }],
    creator: 'Zafer Makina',
    publisher: 'Zafer Makina',
    robots: {
      index: isRoot ? true : false,
      follow: isRoot ? true : false,
      googleBot: {
        index: isRoot ? true : false,
        follow: isRoot ? true : false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: 'https://www.zaferismakina.com',
      title: 'Zafer Makina - İş Makinası Yedek Parça',
      description: 'Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr iş makinalarına özel yedek parçalar. Türkiye\'nin güvenilir iş makinası yedek parça tedarikçisi.',
      siteName: 'Zafer Makina',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Zafer Makina - İş Makinası Yedek Parça',
      description: 'Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr iş makinalarına özel yedek parçalar.',
    },
    verification: {
      google: 'google-site-verification-code',
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="min-h-screen bg-gray-50 font-inter tracking-wide antialiased">
        {/* <Header /> */}
        <main className="flex-1">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}