import { getPostBySlug } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { createAuthorSlug } from '@/lib/utils'

const components = {
  pre: ({ children }: { children: any }) => <div className="not-prose">{children}</div>,
  code: ({ className, children }: { className?: string; children: any }) => {
    const language = className ? className.replace('language-', '') : ''
    if (className) {
      // This is a code block
      return (
        <div className="not-prose">
          <SyntaxHighlighter
            language={language}
            style={dracula}
            className="rounded-lg my-4"
          >
            {children}
          </SyntaxHighlighter>
        </div>
      )
    }
    // This is an inline code
    return <code className="bg-gray-100 dark:bg-gray-800 rounded px-1">{children}</code>
  }
}

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: Promise<Props>) {
  const slug = await params.slug
  console.log('Requested slug:', slug) // Debug log
  const post = await getPostBySlug(slug)
  
  if (!post) {
    console.log('Post not found for slug:', slug) // Debug log
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-500 mb-6">
          <time>{new Date(post.date).toLocaleDateString()}</time>
          {post.author && (
            <>
              <span>•</span>
              <Link 
                href={`/author/${createAuthorSlug(post.author)}`}
                className="hover:text-primary transition-colors"
              >
                {post.author}
              </Link>
            </>
          )}
        </div>
        {post.tags && (
          <div className="flex gap-2 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        <article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-lg prose-a:text-primary hover:prose-a:text-primary/80 prose-pre:bg-gray-900 prose-pre:p-0 max-w-none mb-12">
          <MDXRemote 
            source={post.content} 
            components={components}
          />
        </article>

        <div className="flex justify-between items-center border-t pt-8">
          {post.previous && (
            <Link href={`/decompile/${post.previous}`} className="group">
              <span className="text-sm text-gray-500">Previous</span>
              <p className="text-lg font-medium group-hover:text-primary">{post.prevLabel}</p>
            </Link>
          )}
          {post.next && (
            <Link href={`/decompile/${post.next}`} className="group text-right">
              <span className="text-sm text-gray-500">Next</span>
              <p className="text-lg font-medium group-hover:text-primary">{post.nextLabel}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
