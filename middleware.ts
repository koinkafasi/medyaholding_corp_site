import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Next.js (without the private `trustHostHeader` flag) builds redirect
  // targets from its own bind hostname/port rather than the incoming Host
  // header, which breaks locale-detection redirects behind a reverse proxy.
  // Rewrite the Location back to the externally visible host.
  const location = response.headers.get("location");
  if (location) {
    const externalHost =
      request.headers.get("x-forwarded-host") ?? request.headers.get("host");
    if (externalHost) {
      const [hostname, port] = externalHost.split(":");
      const fixed = new URL(location);
      fixed.protocol = "https:";
      fixed.hostname = hostname;
      fixed.port = port ?? "";
      response.headers.set("location", fixed.toString());
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
