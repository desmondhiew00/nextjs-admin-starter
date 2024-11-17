import { type NextRequest, NextResponse } from "next/server";
import * as Config from "../configs";
import { getSessionData } from "./session";

/**
 * Auth guard middleware used on middleware.ts
 */
export default async function AuthMiddleware(req: NextRequest): Promise<NextResponse> {
  const { pathname, search } = req.nextUrl;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-auth-url", pathname + search);
  requestHeaders.set("x-pathname", pathname);
  const options = { request: { headers: requestHeaders } };

  // Bypass the public directory
  if (Config.byPassDir.some((path) => pathname.startsWith(path))) {
    return NextResponse.next(options);
  }
  // Bypass public routes
  if (Config.byPassRoutes.includes(pathname)) {
    return NextResponse.next(options);
  }

  // Validate session
  const session = await getSessionData();
  if (!session || !session.refreshToken) return NextResponse.redirect(new URL(Config.AUTH_PATH, req.url));

  return NextResponse.next(options);
}
