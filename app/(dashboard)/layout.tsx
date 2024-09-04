import { Header } from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />
      <main className="main-content p-4 md:p-8 relative">{children}</main>
    </div>
  );
}
