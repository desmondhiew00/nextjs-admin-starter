import AuthMiddleware from "@/lib/auth/server/middleware";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  return AuthMiddleware(req);
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
