import { Header } from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar/sidebar";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { session } = await getSession();
  if (!session?.accessToken) redirect("/login");

  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
      <main className="main-content p-4 md:p-8 relative">{children}</main>
    </div>
  );
}
