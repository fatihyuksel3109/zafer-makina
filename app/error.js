'use client';

'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bir Hata Oluştu
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Üzgünüz, bir şeyler ters gitti. Lütfen tekrar deneyin.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => reset()} 
            size="lg" 
            className="w-full"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Tekrar Dene
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/">
              <Home className="w-5 h-5 mr-2" />
              Ana Sayfaya Dön
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}