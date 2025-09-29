import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Nyelvi middleware példány
const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
  // Basic Auth ellenőrzés
  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (
      user === process.env.PROTECT_USER &&
      pwd === process.env.PROTECT_PASS
    ) {
      // Ha helyes a jelszó, akkor fusson le az intl middleware
      return intlMiddleware(req);
    }
  }

  // Ha nincs vagy rossz a jelszó → 401 válasz
  return new NextResponse("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher:
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
