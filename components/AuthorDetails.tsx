import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

interface Post {
  title: string
  slug: string
  date: string
}

interface AuthorProps {
  author: {
    id: string
    bio: string
    github?: string
    linkedin?: string
    image?: string
  }
  posts: Post[]
}

export default function AuthorDetails({ author, posts }: AuthorProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col items-center mb-8">
        {author.image ? (
          <Image
            src={`/${author.image}`}
            alt={author.id}
            width={200}
            height={200}
            className="rounded-full mb-4"
          />
        ) : (
          <div className="w-48 h-48 bg-gray-200 rounded-full mb-4" />
        )}
        <h1 className="text-3xl font-bold mb-4">{author.id}</h1>
        <p className="text-lg text-gray-600 mb-6">{author.bio}</p>
        <div className="flex space-x-4">
          {author.github && (
            <a
              href={`https://github.com/${author.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-600"
            >
              <FaGithub />
            </a>
          )}
          {author.linkedin && (
            <a
              href={`https://linkedin.com/in/${author.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-600"
            >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Articles by {author.id}</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/decompile/${post.slug}`}
              className="block group"
            >
              <article className="p-6 border rounded-lg hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold group-hover:text-primary mb-2">
                  {post.title}
                </h3>
                <time className="text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
