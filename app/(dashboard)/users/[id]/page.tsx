import { notFound } from "next/navigation";

import BreadCrumb from "@/components/layout/breadcrumb";
import InfoContainer from "@/components/layout/info-container";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useAdminQuery } from "@/graphql";
import AdminForm from "@/modules/admin/admin-form";
import type { PageProps } from "@/types";

export async function generateMetadata({ params }: PageProps<{ id: string }>) {
  return {
    title: params?.id === "new" ? "New Admin" : "Edit Admin",
  };
}
export default async function Page({ params }: PageProps<{ id: string }>) {
  const id = params?.id;
  const isNew = id === "new";

  const getRecord = async () => {
    "use server";
    if (isNew) return undefined;
    try {
      const query = await useAdminQuery.fetcher({ where: { id: Number(id) } })();
      return query.admin;
    } catch (_e) {
      notFound();
    }
  };
  const record = await getRecord();
  if (!isNew && !record) notFound();

  return (
    <InfoContainer>
      <BreadCrumb items={[{ title: "Admins", href: "/users" }, isNew ? { title: "New" } : { title: "Edit" }]} />

      <div className="flex items-start justify-between">
        <Heading module="Admin" type={isNew ? "create" : "edit"} />
      </div>

      <Separator />

      <AdminForm mode={isNew ? "create" : "edit"} record={record || undefined} />
    </InfoContainer>
  );
}
