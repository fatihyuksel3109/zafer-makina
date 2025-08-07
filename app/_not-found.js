'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-800 opacity-20 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/urun-arama">
              <Search className="w-5 h-5 mr-2" />
              Ürün Arama
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Geri Dön
          </Button>
        </div>
      </div>
    </div>
  );
}
