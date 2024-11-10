// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.AUTH_SECRET })

    // Redirect authenticated users away from the sign-in page
    if (token && req.nextUrl.pathname === '/auth/signin') {
        return NextResponse.redirect(new URL('/', req.url))
    }

    // Redirect unauthenticated users to sign-in if accessing protected routes
    if (!token && req.nextUrl.pathname.startsWith('/protected')) {
        return NextResponse.redirect(new URL('/auth/signin', req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/auth/signin', '/protected/:path*'], 
}
