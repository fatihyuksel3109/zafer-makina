import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import products from './products.json';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug);
}

export function searchProducts(query) {
  if (!query || query.trim() === '') {
    return products;
  }
  
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.serialNumber.toLowerCase().includes(lowercaseQuery)
  );
}

export function generateProductJsonLd(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.serialNumber,
    identifier: product.id,
    image: product.imageUrl.map(url => `https://zaferismakina.com${url}`),
    offers: {
      '@type': 'Offer',
      availability: product.stockAvailability 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Zafer İş Makina'
      }
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Zafer İş Makina'
    },
    url: `https://zaferismakina.com/yedek-parca/${product.slug}`,
    dateModified: product.lastUpdated,
    dateCreated: product.createdAt
  };
}