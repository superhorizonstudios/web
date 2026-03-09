import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "127.0.0.1";
  const userAgent = req.headers.get("user-agent") || "";
  const path = req.nextUrl.pathname;

  // We asynchronously call our internal API to track, without blocking the request
  if (!path.startsWith("/api/") && !path.startsWith("/_next") && !path.includes("favicon.ico")) {
    try {
      // Pass the IP and path to track endpoint
      const currentUrl = req.nextUrl.clone();
      currentUrl.pathname = "/api/track";
      
      fetch(currentUrl.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ip, userAgent, path }),
      }).catch((e) => {
        // Silently fail if API is not active yet (like during build)
      });
    } catch(e) {
      // Ignored
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
