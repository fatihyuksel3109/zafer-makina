'use client';

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FooterSection = ({ title, children, sectionKey }) => (
    <div className="border-b border-gray-200 md:border-none">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full py-4 md:cursor-default"
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="md:hidden">
          {openSections[sectionKey] ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
      </button>
      <div className={`pb-4 md:pb-0 ${openSections[sectionKey] ? 'block' : 'hidden'} md:block`}>
        {children}
      </div>
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
          {/* Company Info */}
          <FooterSection title="Zafer İş Makina" sectionKey="company">
            <div className="space-y-4">
              <p className="text-gray-300">
                Ağır iş makinalarınız için güvenilir yedek parça tedarikçiniz. 
                25 yıllık tecrübe ile kaliteli hizmet.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">7/24 Acil Destek</span>
              </div>
            </div>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Hızlı Bağlantılar" sectionKey="links">
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/urun-arama" className="block text-gray-300 hover:text-white transition-colors">
                Ürün Kataloğu
              </Link>
              <Link href="/iletisim" className="block text-gray-300 hover:text-white transition-colors">
                İletişim
              </Link>
            </div>
          </FooterSection>

          {/* Product Categories */}
          <FooterSection title="Ürün Kategorileri" sectionKey="categories">
            <div className="space-y-3">
              <Link href="/urun-arama?query=motor" className="block text-gray-300 hover:text-white transition-colors">
                Motor Parçaları
              </Link>
              <Link href="/urun-arama?query=hidrolik" className="block text-gray-300 hover:text-white transition-colors">
                Hidrolik Sistemler
              </Link>
              <Link href="/urun-arama?query=fren" className="block text-gray-300 hover:text-white transition-colors">
                Fren Sistemleri
              </Link>
              <Link href="/urun-arama?query=filtre" className="block text-gray-300 hover:text-white transition-colors">
                Filtreler
              </Link>
            </div>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="İletişim Bilgileri" sectionKey="contact">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+90 212 555 0123</p>
                  <p className="text-gray-300 text-sm">Acil: +90 532 123 45 67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">satis@zaferismakina.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    İkitelli OSB, Atatürk Bulvarı No:123<br />
                    Başakşehir / İSTANBUL
                  </p>
                </div>
              </div>
            </div>
          </FooterSection>
        </div>

        {/* Brands */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-semibold text-center mb-6">Çalıştığımız Markalar</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
            {['Caterpillar', 'Komatsu', 'JCB', 'Case', 'Volvo', 'Liebherr'].map((brand) => (
              <span key={brand} className="hover:text-white transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Zafer İş Makina. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}