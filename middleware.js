// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Allow homepage
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Allow sitemap.xml, robots.txt, and /images/* paths
  if (
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname.startsWith('/images/')
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to /
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals & public assets
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp)).*)',
  ],
};
