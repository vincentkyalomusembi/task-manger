import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This defines which paths require authentication
const protectedPaths = ['/dashboard']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only check protected routes
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    const token = await getToken({ req: request })

    // If no token, redirect to login
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}
