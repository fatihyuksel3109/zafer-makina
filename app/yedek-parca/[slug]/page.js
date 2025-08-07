import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, generateProductJsonLd, getAllProducts } from '@/lib/utils'; // make sure getAllProducts exists
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MessageCircle, FileText, Calendar, Package } from 'lucide-react';

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: 'Ürün Bulunamadı',
      description: 'Aradığınız ürün bulunamadı.',
    };
  }

  return {
    title: `${product.name} - Yedek Parça Detayı`,
    description: `${product.name} (${product.serialNumber}) detaylı bilgi ve iletişim seçenekleri. Zafer İş Makina güvencesi ile.`,
    keywords: [product.name, product.serialNumber, 'yedek parça', 'iş makinası'],
    openGraph: {
      title: `${product.name} - Yedek Parça Detayı`,
      description: `${product.name} (${product.serialNumber}) detaylı bilgi ve iletişim seçenekleri.`,
      images: product.imageUrl.map(url => ({
        url: `https://zaferismakina.com${url}`,
        alt: product.imgAlt[0] || product.name,
      })),
      url: `https://zaferismakina.com/yedek-parca/${product.slug}`,
    },
  };
}

// ✅ NEW: Required for output: 'export'
export async function generateStaticParams() {
  const products = await getAllProducts(); // You must have this function in your utils
  return products.map(product => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const jsonLd = generateProductJsonLd(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-800 transition-colors">Ana Sayfa</Link></li>
              <li>/</li>
              <li><Link href="/urun-arama" className="hover:text-blue-800 transition-colors">Ürünler</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.imageUrl[0]}
                  alt={product.imgAlt[0]}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              {product.imageUrl.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {product.imageUrl.slice(1).map((image, index) => (
                    <div key={index} className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={product.imgAlt[index + 1] || `${product.name} görünüm ${index + 2}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-6">
                  <Badge variant={product.stockAvailability ? "success" : "destructive"} className="px-3 py-1">
                    <Package className="w-4 h-4 mr-1" />
                    {product.stockAvailability ? 'Stokta Var' : 'Stokta Yok'}
                  </Badge>
                  <span className="text-lg font-semibold text-blue-800">
                    Seri No: {product.serialNumber}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  İletişim Seçenekleri
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href={product.contactOptions.whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                  >
                    <a href={`tel:${product.contactOptions.phoneNumber}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Telefon
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
                  >
                    <a href={`mailto:${product.contactOptions.email}`}>
                      <Mail className="w-5 h-5 mr-2" />
                      E-posta
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                  >
                    <Link href={product.contactOptions.contactFormLink}>
                      <FileText className="w-5 h-5 mr-2" />
                      İletişim Formu
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Son Güncelleme: {new Date(product.lastUpdated).toLocaleDateString('tr-TR')}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Oluşturma: {new Date(product.createdAt).toLocaleDateString('tr-TR')}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Ücretsiz Danışmanlık
                </h3>
                <p className="text-blue-800">
                  Ürün uyumluluğu ve teknik detaylar hakkında uzman ekibimizden 
                  ücretsiz danışmanlık alabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
