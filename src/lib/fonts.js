import { Nunito, Lato } from 'next/font/google';

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  style: ['normal', 'italic'],
});