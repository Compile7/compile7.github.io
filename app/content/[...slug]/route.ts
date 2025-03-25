import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import { readFile } from 'fs/promises'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  try {
    const filePath = join(process.cwd(), 'content', ...params.slug)
    const file = await readFile(filePath)
    
    const contentType = filePath.endsWith('.jpg') ? 'image/jpeg'
      : filePath.endsWith('.png') ? 'image/png'
      : filePath.endsWith('.gif') ? 'image/gif'
      : 'application/octet-stream'

    return new NextResponse(file, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
      },
    })
  } catch (e) {
    return new NextResponse('Not Found', { status: 404 })
  }
}
