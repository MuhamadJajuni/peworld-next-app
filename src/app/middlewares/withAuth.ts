import { getToken } from 'next-auth/jwt';
import { NextMiddleware, NextRequest, NextResponse, NextFetchEvent } from 'next/server';

const onlyWorkersPages = [
  "/workers/:path*",
];

const onlyRecruitersPages = [
  "/recruiters/:path*",
];

const authPages = [
  "/login",
  "/register",
];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token && !authPages.includes(pathname)) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      if (token) {
        if (authPages.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }

        // Check if the route matches /workers/:path* or /recruiters/:path*
        if (token.role !== "workers" && onlyWorkersPages.some(page => pathname.startsWith(page.replace(":path*", "")))) {
          return NextResponse.redirect(new URL("/", req.url));
        }

        if (token.role !== "recruiters" && onlyRecruitersPages.some(page => pathname.startsWith(page.replace(":path*", "")))) {
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    }

    return middleware(req, next);
  };
}
