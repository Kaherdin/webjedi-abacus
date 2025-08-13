
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/config';

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
};
