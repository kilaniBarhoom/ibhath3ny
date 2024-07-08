import authConfig from "@/auth.config";
import * as routes from "@/routes";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const { pathname } = nextUrl;

  const isApiRoute = pathname.startsWith(routes.apiRoutesPrefix);
  const isPublicRoute = routes.publicRoutes.includes(pathname);
  const isAuthRoute = routes.authRoutes.includes(pathname);

  if (isApiRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return;
});

export const createMiddleware = {
  locales: ["en", "ar"], // A list of all supported locales
  defaultLocale: "en",
};

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(ar|en)/:path*",
  ],
};
