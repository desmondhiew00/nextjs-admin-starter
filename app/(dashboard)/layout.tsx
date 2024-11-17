import { auth } from "@/auth";
import { Header } from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar/sidebar";
import { redirect } from "next/navigation";
import AuthListener from "./auth-listener";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <div className="dashboard-layout">
      <AuthListener />
      <Header />
      <Sidebar />
      <main className="main-content p-4 md:p-8 relative">{children}</main>
    </div>
  );
}
