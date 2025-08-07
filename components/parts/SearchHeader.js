'use client';

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SearchHeader({ initialQuery = '', showFullSearch = false }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/urun-arama?query=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/urun-arama');
    }
  };

  if (showFullSearch) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder="Ürün adı, seri numarası ile arama yapın..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-20 py-4 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Button 
            type="submit" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            Ara
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <form onSubmit={handleSearch} className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Ürün adı, seri numarası ile arama yapın..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-white text-gray-900 border-white focus:border-white focus:ring-white"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <Button 
            type="submit" 
            variant="secondary"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6"
          >
            Ara
          </Button>
        </form>
      </div>
    </div>
  );
}