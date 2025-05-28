export function generateOrganizationSchema(data) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    url: data.url,
    logo: data.logo,
    sameAs: data.socialLinks,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: data.telephone,
        contactType: 'customer service',
        areaServed: data.areaServed || 'Worldwide',
        availableLanguage: data.languages,
      },
    ],
  };
}

export function generateWebsiteSchema(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateLocalBusinessSchema(data) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    image: data.image,
    '@id': data.url,
    url: data.url,
    telephone: data.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      postalCode: data.address.zip,
      addressCountry: data.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHoursSpecification: data.openingHours,
    priceRange: data.priceRange,
  };
}

export function generateArticleSchema(data) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image: data.image,
    author: {
      '@type': 'Person',
      name: data.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: data.publisher.logo,
      },
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified,
  };
}

export function generateProductSchema(data) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    image: data.image,
    description: data.description,
    sku: data.sku,
    mpn: data.mpn,
    brand: {
      '@type': 'Brand',
      name: data.brand,
    },
    offers: {
      '@type': 'Offer',
      url: data.url,
      priceCurrency: data.priceCurrency,
      price: data.price,
      priceValidUntil: data.priceValidUntil,
      availability: `https://schema.org/${data.availability}`,
      seller: {
        '@type': 'Organization',
        name: data.seller,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.rating.value,
      reviewCount: data.rating.count,
    },
  };
}