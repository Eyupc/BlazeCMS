// middleware.ts
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
const PROTECTED_ROUTES = ['/home', '/staff', '/leaderboards', '/settings'];
const ROUTES = ['/', '/login', '/register'];
export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const IS_AUTHENTICATED = await getToken({
    req: request,
    secret: process.env.SECRET
  });

  switch (IS_AUTHENTICATED) {
    case null:
      if (PROTECTED_ROUTES.includes(pathName))
        return NextResponse.rewrite(new URL('/', request.url));
      break;
    default:
      if (ROUTES.includes(pathName))
        return NextResponse.rewrite(new URL('/home', request.url));
      break;
  }
}
export const config = {
  matcher: ['/', '/register', '/home', '/staff', '/leaderboards', '/settings']
};
