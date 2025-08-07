import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '@/lib/utils';
import PartCard from '@/components/parts/PartCard';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Ana Sayfa - Zafer İş Makina',
  description: 'Türkiye\'nin en güvenilir ağır iş makinası yedek parça tedarikçisi. Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr markalarına özel yedek parçalar.',
  keywords: ['ana sayfa', 'iş makinası', 'yedek parça', 'türkiye', 'caterpillar', 'komatsu', 'jcb'],
  openGraph: {
    title: 'Ana Sayfa - Zafer İş Makina',
    description: 'Türkiye\'nin en güvenilir ağır iş makinası yedek parça tedarikçisi. Caterpillar, Komatsu, JCB, Case, Volvo ve Liebherr markalarına özel yedek parçalar.',
    url: 'https://zaferismakina.com',
  },
};

export default function HomePage() {
  const products = getAllProducts();
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/60 z-10" />
        <Image
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
          alt="Ağır iş makinaları - ekskavatör ve inşaat sahası"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ağır İş Makinası
            <span className="block text-yellow-400">Yedek Parçaları</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 font-medium opacity-90">
            Türkiye'nin güvenilir tedarikçisi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/urun-arama">
                Ürünleri İncele
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 text-lg transition-all duration-300"
            >
              <Link href="/iletisim">
                İletişime Geç
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                25 Yıllık Tecrübe ile
                <span className="block text-blue-800">Güvenilir Hizmet</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Zafer İş Makina olarak, ağır iş makinalarınızın kesintisiz çalışması için 
                ihtiyaç duyduğunuz her türlü yedek parçayı temin ediyoruz. Caterpillar, 
                Komatsu, JCB, Case, Volvo ve Liebherr gibi önde gelen markaların orijinal 
                yedek parçaları stoklarımızda bulunmaktadır.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800 mb-2">5000+</div>
                  <div className="text-sm text-gray-600">Farklı Ürün</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Destek Hattı</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg"
                alt="İş makinası tamiri ve yedek parça montajı"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En çok tercih edilen yedek parçalarımızı inceleyin ve ihtiyacınız olan ürünü bulun
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <PartCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 px-8">
              <Link href="/urun-arama">
                Tüm Ürünleri Görüntüle
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Çalıştığımız Markalar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {['Caterpillar', 'Komatsu', 'JCB', 'Case', 'Volvo', 'Liebherr'].map((brand) => (
              <div key={brand} className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <span className="text-lg font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}