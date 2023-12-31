import withAuth from '@/middlewares/withAuth'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'


export function mainMiddleware(_request: NextRequest) {
    const res = NextResponse.next()
    return res
}

export default withAuth(mainMiddleware, ["/home", "/login", "/register", '/workers/+edit*'
    , '/recruiters/:path*'])
