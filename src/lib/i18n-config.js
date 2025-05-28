export const defaultLocale = 'hu';
export const locales = ['hu', 'ro'];


export function isValidLocale(locale) {
  return locales.includes(locale);
}