import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  coverImage?: string
  tags?: string[]
  description?: string
  author?: string
  prevLabel?: string
  previous?: string
  nextLabel?: string
  next?: string
}

const processPostData = (data: any, content: string, slug: string, coverImage?: string) => ({
  slug,
  title: data.title,
  date: data.date,
  excerpt: data.description || '',
  content,
  coverImage: data.coverImage ? `/content/posts/${slug}/${data.coverImage}` : undefined,
  tags: data.tags || [],
  description: data.description,
  author: data.author,
  prevLabel: data.prevLabel,
  previous: data.previous,
  nextLabel: data.nextLabel,
  next: data.next
})

export async function getAllPosts(): Promise<Post[]> {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.log('Posts directory not found:', postsDirectory)
      return []
    }

    const folders = fs.readdirSync(postsDirectory, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name !== 'assets')
    
    const posts = folders
      .map((folder) => {
        try {
          const postPath = path.join(postsDirectory, folder.name, 'index.md')
          if (!fs.existsSync(postPath)) {
            console.log('Post file not found:', postPath)
            return null
          }

          const fileContents = fs.readFileSync(postPath, 'utf8')
          const { data, content } = matter(fileContents)
          
          const coverImage = fs.readdirSync(path.join(postsDirectory, folder.name))
            .find(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
          
          return processPostData(data, content, folder.name, coverImage)
        } catch (e) {
          console.error(`Error processing post ${folder.name}:`, e)
          return null
        }
      })
      .filter((post): post is Post => post !== null)
      .sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime())
    
    return posts
  } catch (e) {
    console.error('Error getting all posts:', e)
    return []
  }
}

export type PaginatedPosts = {
  posts: Post[]
  totalPages: number
  currentPage: number
}

export async function getPaginatedPosts(page: number = 1, limit: number = 15): Promise<PaginatedPosts> {
  try {
    const allPosts = await getAllPosts()
    const totalPages = Math.ceil(allPosts.length / limit)
    const start = (page - 1) * limit
    const end = start + limit
    
    return {
      posts: allPosts.slice(start, end),
      totalPages,
      currentPage: page
    }
  } catch (e) {
    console.error('Error getting paginated posts:', e)
    return {
      posts: [],
      totalPages: 0,
      currentPage: 1
    }
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Remove any 'assets' from the path if it exists
    const cleanSlug = slug.replace('/assets', '')
    const postPath = path.join(postsDirectory, cleanSlug, 'index.md')
    
    console.log('Attempting to read file at:', postPath) // Debug log
    
    if (!fs.existsSync(postPath)) {
      console.log('File not found at:', postPath) // Debug log
      return null
    }

    const fileContents = fs.readFileSync(postPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Check for cover image
    const coverImage = fs.readdirSync(path.join(postsDirectory, cleanSlug))
      .find(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
    
    return processPostData(data, content, cleanSlug, coverImage)
  } catch (e) {
    console.error('Error reading post:', e) // Debug log
    return null
  }
}

export async function getPostsByAuthor(authorName: string): Promise<Post[]> {
  try {
    const allPosts = await getAllPosts()
    return allPosts.filter(post => post.author === authorName)
  } catch (e) {
    console.error('Error getting posts by author:', e)
    return []
  }
}
