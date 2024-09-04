import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const { session } = await getSession();
  if (session?.accessToken) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
