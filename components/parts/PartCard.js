import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Package, Phone, MessageCircle } from 'lucide-react';

export default function PartCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.imageUrl[0]}
          alt={product.imgAlt[0]}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant={product.stockAvailability ? "success" : "destructive"}>
            <Package className="w-3 h-3 mr-1" />
            {product.stockAvailability ? 'Stokta' : 'Stok Yok'}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-blue-800 font-medium mb-4">
          Seri No: {product.serialNumber}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            href={`/yedek-parca/${product.slug}`}
            className="text-blue-800 font-medium hover:text-blue-900 transition-colors"
          >
            Detayları Gör
          </Link>
          
          <div className="flex items-center space-x-2">
            <a
              href={`tel:${product.contactOptions.phoneNumber}`}
              className="p-2 text-gray-600 hover:text-blue-800 hover:bg-blue-50 rounded-full transition-all duration-200"
              title="Telefon ile ara"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={product.contactOptions.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200"
              title="WhatsApp ile mesaj gönder"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}