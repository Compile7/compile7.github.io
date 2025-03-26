import { Metadata } from 'next'

type MetaProps = {
  title?: string
  description?: string
}

export function constructMetadata({
  title = 'Compile7 - Developer Community',
  description = 'A community of developers building open source tools and sharing knowledge through blogs and projects.',
}: MetaProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://compile7.org',
      siteName: 'Compile7',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
