"use client";

import { useRouter } from "next-nprogress-bar";
import { type ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useMemo, useRef } from "react";
import { toast } from "sonner";

import { type DataTableRef, createDataTable } from "@/components/common/data-table";
import { useConfirmModal } from "@/context/confirm-modal-context";
import {
  type AdminFragment,
  type AdminOrderByWithRelationInput,
  type AdminWhereInput,
  type InputMaybe,
  SortOrder,
  useAdminsQuery,
} from "@/graphql";
import { getListingQueryParams } from "@/lib/query-router";
import { parseErrorMessage } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { columns } from "./admin-columns";

const DataTable = createDataTable<AdminFragment, AdminFragment>();

export default function AdminTable() {
  const _router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();

  const ref = useRef<DataTableRef<AdminFragment>>(null);
  const { confirmDelete } = useConfirmModal();

  const authId = session?.authUser.id;

  const queryOptions = useMemo(() => getQueryOptions(searchParams, authId), [searchParams, authId]);
  const query = useAdminsQuery(queryOptions);

  const data = query.data?.admins.data;
  const total = query.data?.admins.total || 0;

  const onEdit = (_record: AdminFragment) => {
    // Implement edit logic
  };

  const onDelete = (record: AdminFragment) => {
    confirmDelete({
      presetDesc: { label: "admin", value: record.email },
      onConfirm: async () => {
        try {
          // TODO: Implement delete logic
          toast.success("Admin deleted successfully");
          query.refetch();
        } catch (e) {
          toast.error(parseErrorMessage(e));
        }
      },
    });
  };

  const tableColumns = columns({ onEdit, onDelete });

  return (
    <DataTable
      loading={query.isFetching}
      selectable={false}
      ref={ref}
      columns={tableColumns}
      total={total}
      data={data || []}
    />
  );
}

const getQueryOptions = (searchParams: ReadonlyURLSearchParams, authId: number | undefined) => {
  const { from, to, sortBy, direction, limit, offset } = getListingQueryParams(searchParams, "client");
  const keyword = searchParams.get("keyword");

  const where: InputMaybe<AdminWhereInput> = { AND: [] };
  if (authId) where.AND?.push({ id: { not: { equals: authId } } });
  if (from) where.AND?.push({ createdAt: { gte: from } });
  if (to) where.AND?.push({ createdAt: { lte: to } });
  if (keyword) {
    const keywords = keyword.split(" ").filter(Boolean);
    where.AND?.push({
      OR: keywords.map((keyword) => ({ fullName: { contains: keyword } })),
    });
  }

  const orderBy: InputMaybe<AdminOrderByWithRelationInput> = sortBy
    ? { [sortBy]: direction }
    : { fullName: SortOrder.Asc };

  return { where, orderBy, take: limit, skip: offset };
};
