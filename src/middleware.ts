// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
const PROTECTED_ROUTES = ["/home"];
const ROUTES = ["/", "/login", "/register"];
export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const IS_AUTHENTICATED = await getToken({
    req: request,
    secret: process.env.SECRET,
  });

  switch (IS_AUTHENTICATED) {
    case null:
      if (PROTECTED_ROUTES.includes(pathName))
        return NextResponse.rewrite(new URL("/", request.url));
      break;
    default:
      if (ROUTES.includes(pathName))
        return NextResponse.rewrite(new URL("/home", request.url));
      break;
  }
}
export const config = {
  matcher: ["/", "/login", "/register", "/home"],
};
