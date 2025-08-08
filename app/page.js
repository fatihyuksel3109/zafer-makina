'use client';

import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #0A1B2A, #1C1A1A)',
      }}
    >
      <div className="h-fit sm:w-full md:aspect-[4/3] sm:px-4 py-20 lg:aspect-[16/9]">

        {/* Görsel Bileşenleri */}
        {/* Mobile (9:16) */}
        <Image
          src="/images/zafermakina-small.png"
          alt="Zafer Makina Yakında - İş makinaları yedek parça çözümlerimizle çok yakında yayındayız. - Mobil"
          fill
          className="object-contain block md:hidden"
          priority
        />
        {/* Tablet (4:3) */}
        <Image
          src="/images/zafermakina-large.png"
          alt="Zafer Makina Yakında - İş makinaları yedek parça çözümlerimizle çok yakında yayındayız. - Tablet"
          fill
          className="object-contain hidden md:block lg:hidden"
          priority
        />
        {/* Masaüstü (16:9) */}
        <Image
          src="/images/zafermakina-xlarge.png"
          alt="Zafer Makina Yakında - İş makinaları yedek parça çözümlerimizle çok yakında yayındayız. - Masaüstü"
          fill
          className="object-contain hidden lg:block"
          priority
        />
      </div>
    </div>
  );
}