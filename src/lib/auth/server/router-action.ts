import { headers } from "next/headers";
import { redirect } from "next/navigation";
import "server-only";

/**
 * Redirect to another page (support both client and server)
 * @param url /path
 */
export const navigate = async (url: string) => {
  redirect(url);
};

export const getCurrentUrl = async () => {
  const url = (await headers()).get("x-auth-url");
  return url;
};
