import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  //Protect Auth routes
  if (
    req.nextUrl.pathname.startsWith("/sign-in") ||
    req.nextUrl.pathname.startsWith("/sign-up")
  ) {
    if (isAuthenticated)
      return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  //Protected Routes
  if (
    req.nextUrl.pathname.startsWith("/create-post") ||
    req.nextUrl.pathname.startsWith("/dashboard") ||
    (req.nextUrl.pathname.startsWith("/learning-paths/") &&
      req.nextUrl.pathname.startsWith !== "/learning-paths")
  ) {
    if (!isAuthenticated)
      return NextResponse.redirect(new URL("/sign-in", req.url));
  }
}

export const config = {
  matcher: [
    "/create-post",
    "/sign-in",
    "/sign-up",
    "/dashboard",
    "/learning-paths/:path*",
  ],
};
