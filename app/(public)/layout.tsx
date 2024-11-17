import { auth } from "@/auth";
import AuthPageHeader from "@/modules/auth/auth-page-header";
import { redirect } from "next/navigation";

export default async function RootPage({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (session?.user) redirect("/");

  return (
    <>
      <AuthPageHeader />
      <div className="relative h-screen flex flex-col justify-center items-center p-4">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">{children}</div>
      </div>
    </>
  );
}
