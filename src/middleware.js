import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Nyelvi middleware példány
const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
  if (process.env.PROTECT_ENABLED === "1") {
    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      if (
        user === process.env.PROTECT_USER &&
        pwd === process.env.PROTECT_PASS
      ) {
        return intlMiddleware(req);
      }
    }

    return new NextResponse("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return intlMiddleware(req);
}

export const config = {
  matcher:
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
