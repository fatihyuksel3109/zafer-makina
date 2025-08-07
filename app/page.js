'use client';

import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #081323, #040815)',
      }}
    >
      <div className="w-full max-w-7xl aspect-[4/3] px-4 py-12">
        <Image
          src="/images/zafermakina-yakinda.jpg"
          alt="Zafer Makina Yakında"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
