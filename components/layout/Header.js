'use client';

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/urun-arama?query=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleSearchFocus = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <header className="bg-white shadow-md relative z-50">
        {/* Top Bar */}
        <div className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+90 212 555 0123</span>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>satis@zaferismakina.com</span>
                </div>
              </div>
              <div className="text-xs">
                24/7 Acil Destek: +90 532 123 45 67
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-blue-800">
                Zafer İş Makina
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/urun-arama" 
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                Ürünler
              </Link>
              <Link 
                href="/iletisim" 
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                İletişim
              </Link>
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search */}
              <div className="hidden md:block relative">
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="text"
                    placeholder="Ürün arama..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={handleSearchFocus}
                    className="pl-10 pr-4 py-2 w-64 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </form>
              </div>

              {/* Mobile Search Button */}
              <button
                onClick={handleSearchFocus}
                className="md:hidden p-2 text-gray-600 hover:text-blue-800 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/urun-arama" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                Ürünler
              </Link>
              <Link 
                href="/iletisim" 
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-800 font-medium py-2"
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="flex items-start justify-center min-h-screen pt-20">
            <div className="bg-white rounded-lg shadow-2xl p-8 mx-4 w-full max-w-2xl transform transition-all duration-300 scale-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ürün Arama
                </h3>
                <button
                  onClick={handleSearchClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Ürün adı, seri numarası ile arama yapın..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  autoFocus
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  Ara
                </Button>
              </form>
              
              <p className="text-sm text-gray-600 mt-4">
                Örn: motor yağı filtresi, 1R-0750, hidrolik pompa
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}