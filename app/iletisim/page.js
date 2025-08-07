import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'İletişim - Zafer İş Makina',
  description: 'Zafer İş Makina ile iletişime geçin. Ağır iş makinası yedek parçaları için uzman desteği alın. Telefon, e-posta ve iletişim formu ile ulaşın.',
  keywords: ['iletişim', 'destek', 'telefon', 'adres', 'yedek parça'],
  openGraph: {
    title: 'İletişim - Zafer İş Makina',
    description: 'Zafer İş Makina ile iletişime geçin. Uzman desteği alın.',
    url: 'https://zaferismakina.com/iletisim',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            İletişime Geçin
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ağır iş makinası yedek parçaları konusunda uzman ekibimizden destek alın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <p className="text-gray-600">+90 212 555 0123</p>
                    <p className="text-gray-600">+90 212 555 0124</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">E-posta</h3>
                    <p className="text-gray-600">satis@zaferismakina.com</p>
                    <p className="text-gray-600">destek@zaferismakina.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adres</h3>
                    <p className="text-gray-600">
                      İkitelli OSB, Atatürk Bulvarı No:123<br />
                      Başakşehir / İSTANBUL
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Çalışma Saatleri</h3>
                    <p className="text-gray-600">Pazartesi - Cuma: 08:00 - 18:00</p>
                    <p className="text-gray-600">Cumartesi: 08:00 - 15:00</p>
                    <p className="text-gray-600">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                Acil Durum Desteği
              </h3>
              <p className="text-blue-800 mb-3">
                24/7 acil durum yedek parça desteği için:
              </p>
              <p className="font-semibold text-blue-900">
                +90 532 123 45 67
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                İletişim Formu
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}