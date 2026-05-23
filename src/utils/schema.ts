export function getBreadcrumbs(pathname: string) {
  const pathSegments = pathname
    .split('/')
    .filter(segment => segment.length > 0);

  const isHomepage = pathSegments.length === 0;
  const breadcrumbs = [{ label: 'Home', href: '/' }];

  let accumulatedPath = '';
  for (const segment of pathSegments) {
    accumulatedPath += `/${segment}`;
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({ label, href: accumulatedPath });
  }

  const activeBreadcrumb = breadcrumbs.pop();
  return { isHomepage, breadcrumbs, activeBreadcrumb };
}

export function organizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Roha',
    url: siteUrl,
    logo: 'https://ik.imagekit.io/gorat/roha.png?updatedAt=1779127109052',
    description: 'A digital design studio made warm, shipped tidy.',
    sameAs: [
      'https://instagram.com/roha.works',
    ],
    contact: {
      '@type': 'ContactPoint',
      email: 'halo@roha.design',
      contactType: 'Business',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
  };
}

export function breadcrumbSchema(breadcrumbs: Array<{ label: string; href: string }>, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href}`,
    })),
  };
}

export function productSchema(product: {
  title: string;
  summary: string;
  price?: number;
  currency?: string;
  category: string;
  image?: string;
  url: string;
  siteUrl: string;
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.summary,
    category: product.category,
    url: `${product.siteUrl}${product.url}`,
  };

  if (product.image) {
    schema.image = product.image.startsWith('http')
      ? product.image
      : `${product.siteUrl}${product.image}`;
  }

  if (product.price && product.currency) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: product.currency,
      price: product.price.toString(),
      availability: 'https://schema.org/InStock',
    };
  }

  return schema;
}

export function creativeWorkSchema(work: {
  title: string;
  summary: string;
  category?: string;
  year: number;
  image?: string;
  url: string;
  siteUrl: string;
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: work.title,
    description: work.summary,
    datePublished: `${work.year}-01-01`,
    url: `${work.siteUrl}${work.url}`,
  };

  if (work.image) {
    schema.image = work.image.startsWith('http')
      ? work.image
      : `${work.siteUrl}${work.image}`;
  }

  if (work.category) {
    schema.keywords = work.category;
  }

  return schema;
}
