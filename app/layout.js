import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://zaferismakina.com'),
  title: {
    default: 'Zafer İş Makina - Ağır İş Makinası Yedek Parça Kataloğu',
    template: '%s | Zafer İş Makina'
  },
  description: 'Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr iş makinalarına özel yedek parçalar. Türkiye\'nin güvenilir ağır iş makinası yedek parça tedarikçisi.',
  keywords: ['iş makinası', 'yedek parça', 'caterpillar', 'komatsu', 'jcb', 'case', 'volvo', 'liebherr', 'hidrolik pompa', 'motor yağı filtresi', 'fren balata'],
  authors: [{ name: 'Zafer İş Makina' }],
  creator: 'Zafer İş Makina',
  publisher: 'Zafer İş Makina',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://zaferismakina.com',
    title: 'Zafer İş Makina - Ağır İş Makinası Yedek Parça Kataloğu',
    description: 'Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr iş makinalarına özel yedek parçalar. Türkiye\'nin güvenilir ağır iş makinası yedek parça tedarikçisi.',
    siteName: 'Zafer İş Makina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zafer İş Makina - Ağır İş Makinası Yedek Parça Kataloğu',
    description: 'Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr iş makinalarına özel yedek parçalar.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

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