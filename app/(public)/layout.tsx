import { getSession } from "@/lib/auth";
import AuthPageHeader from "@/modules/auth/auth-page-header";
import { redirect } from "next/navigation";

export default async function RootPage({ children }: { children: React.ReactNode }) {
  const { session } = await getSession();
  if (session?.accessToken) redirect("/dashboard");

  return (
    <>
      <AuthPageHeader />
      <div className="relative h-screen flex flex-col justify-center items-center p-4">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">{children}</div>
      </div>
    </>
  );
}
