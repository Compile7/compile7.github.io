import AuthorDetails from '@/components/AuthorDetails'
import authors from '@/content/posts/author.json'
import { notFound } from 'next/navigation'
import { createAuthorSlug } from '@/lib/utils'
import { getPostsByAuthor } from '@/lib/mdx'
import { constructMetadata } from '@/components/meta'

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: createAuthorSlug(author.id),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const author = authors.find(
    (a) => createAuthorSlug(a.id) === params.slug
  )
  
  if (!author) {
    return constructMetadata()
  }

  return constructMetadata({
    title: `${author.id} | Compile7 Author`,
    description: `Read articles written by ${author.id} on Compile7.`,
  })
}

export default async function AuthorPage({ params }: { params: { slug: string } }) {
  const author = authors.find(
    (a) => createAuthorSlug(a.id) === params.slug
  )

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)

  return <AuthorDetails author={author} posts={posts} />
}
