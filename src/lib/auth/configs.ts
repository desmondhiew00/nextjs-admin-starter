// Used to encrypt the session data
export const AUTH_SECRET = process.env.AUTH_SECRET || "auth-secret";

// Path for default page to redirect if invalid session
export const AUTH_PATH = process.env.AUTH_PATH || "/login";

/* --------------------------------- Helper --------------------------------- */
export const byPassDir = ["/auth", "/public"];
export const byPassRoutes = ["/login", "/forgot-password", "/reset-password"];

export const isPublicRoute = (pathname: string) => {
  if (pathname === AUTH_PATH) {
    return true;
  }

  if (byPassDir.some((path) => pathname.startsWith(path))) {
    return true;
  }

  if (byPassRoutes.includes(pathname)) {
    return true;
  }

  return false;
};
