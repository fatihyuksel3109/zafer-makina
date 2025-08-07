'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { searchProducts } from '@/lib/utils';
import PartCard from '@/components/parts/PartCard';
import SearchHeader from '@/components/parts/SearchHeader';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  // Only compute search results on client
  const products = useMemo(() => searchProducts(query), [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchHeader initialQuery={query} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {query ? `"${query}" için arama sonuçları` : 'Tüm Ürünler'}
          </h1>
          <p className="text-gray-600">
            {products.length} ürün bulundu
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <PartCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ürün bulunamadı
              </h3>
              <p className="text-gray-600 mb-6">
                Aradığınız kriterlere uygun ürün bulunamadı. Farklı bir arama terimi deneyin.
              </p>
              <SearchHeader showFullSearch />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
