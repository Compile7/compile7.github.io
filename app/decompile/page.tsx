import { Header } from "@/components/header";
import { getPaginatedPosts } from "@/lib/mdx";
import Link from "next/link";
import Image from "next/image";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function BlogPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page as string) || 1
  const { posts, totalPages, currentPage } = await getPaginatedPosts(page)

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-6 mb-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/decompile/${post.slug}`}
              className="p-6 border rounded-lg hover:border-primary transition-colors flex gap-6"
            >
              {post.coverImage && (
                <div className="relative w-48 h-32 flex-shrink-0">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.description || post.excerpt}</p>
                {post.tags && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="text-sm text-gray-500 mt-4 flex items-center gap-3">
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {currentPage > 1 && (
              <Link
                href={`/decompile?page=${currentPage - 1}`}
                className="px-4 py-2 border rounded hover:border-primary"
              >
                Previous
              </Link>
            )}
            {[...Array(totalPages)].map((_, i) => (
              <Link
                key={i + 1}
                href={`/decompile?page=${i + 1}`}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1
                    ? 'bg-primary text-white'
                    : 'hover:border-primary'
                }`}
              >
                {i + 1}
              </Link>
            ))}
            {currentPage < totalPages && (
              <Link
                href={`/decompile?page=${currentPage + 1}`}
                className="px-4 py-2 border rounded hover:border-primary"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
