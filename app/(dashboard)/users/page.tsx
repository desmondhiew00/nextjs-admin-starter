import type { Metadata } from "next";

import BreadCrumb from "@/components/layout/breadcrumb";
import { Heading } from "@/components/ui/heading";
import { LinkButton } from "@/components/ui/link-button";
import { Separator } from "@/components/ui/separator";
import AdminTable from "@/modules/admin/admin-table";
import type { PageProps } from "@/types";

export const metadata: Metadata = {
  title: "Admins",
  description: "",
};

export default async function Page(_props: PageProps) {
  return (
    <>
      <BreadCrumb items={[{ title: "Admin", href: "/users" }]} />

      <div className="flex items-start justify-between">
        <Heading title="Admins" description="Manage admins." />
        <LinkButton href="/users/new" label="Add New" />
      </div>

      <Separator />

      <AdminTable />
    </>
  );
}
