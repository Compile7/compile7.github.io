import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { sidebarItems } from '@/components/saml-sidebar'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get base URL from environment variable with fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'https://compile7.org'
  
  // Define your static routes
  const routes = [
    '',
    '/decompile',
    '/about'
  ]

  // Map routes to sitemap entries
  const routeEntries = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Get all blog posts and add them to sitemap
  const posts = await getAllPosts()
  const blogEntries = posts.map(post => ({
    url: `${baseUrl}/decompile/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamically extract SAML routes from the sidebar component
  const samlRoutes: string[] = [];
  
  // Fix: Check if sidebarItems is an array before using forEach
  if (Array.isArray(sidebarItems)) {
    sidebarItems.forEach(section => {
      section.items.forEach(item => {
        samlRoutes.push(item.href);
      });
    });
  } else {
    // Fallback to static SAML routes if dynamic import fails
    const staticSamlRoutes = [
      "/saml/docs/introduction",
      "/saml/docs/what-is-saml",
      "/saml/docs/fundamentals/key-concepts",
      "/saml/docs/fundamentals/benefits",
      "/saml/docs/fundamentals/single-sign-on",
      "/saml/docs/technical/components",
      "/saml/docs/technical/assertions",
      "/saml/docs/technical/protocols",
      "/saml/docs/technical/bindings",
      "/saml/docs/technical/xml-structure",
      "/saml/docs/technical/saml-flows",
      "/saml/docs/implementation/getting-started",
      "/saml/docs/implementation/idp-setup",
      "/saml/docs/implementation/sp-setup",
      "/saml/docs/implementation/attribute-mapping",
      "/saml/docs/security/best-practices",
      "/saml/docs/security/vulnerabilities",
      "/saml/docs/security/replay-attacks",
    ];
    samlRoutes.push(...staticSamlRoutes);
  }

  const samlEntries = samlRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Add project URLs
  const projectUrls = [
    'https://saml-tester.compile7.org/',
    'https://jwt.compile7.org/',
    'https://jwt-checklist.compile7.org/',
    'https://enterpriseready.compile7.org/',
    'https://oidc-playground.compile7.org/',
    'https://oidc-tester.compile7.org/',
    'https://md-to-wp.compile7.org/',
    'http://saml-validator.compile7.org/',
  ].map(url => ({
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...routeEntries, ...blogEntries, ...samlEntries, ...projectUrls]
}
