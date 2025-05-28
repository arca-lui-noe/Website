export const supportedLanguages = ['hu', 'ro'];

// Dictionary loading function
const dictionaries = {
  hu: () => import('../dictionaries/hu').then(module => module.default),
  ro: () => import('../dictionaries/ro').then(module => module.default),
};

export async function getDictionary(locale) {
  // Fallback to Hungarian if requested locale isn't supported
  if (!supportedLanguages.includes(locale)) {
    console.warn(`Requested language (${locale}) is not supported, falling back to 'hu'`);
    locale = 'hu';
  }
  
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Error loading dictionary for '${locale}':`, error);
    // Fallback to Hungarian dictionary in case of error
    return await dictionaries['hu']();
  }
}