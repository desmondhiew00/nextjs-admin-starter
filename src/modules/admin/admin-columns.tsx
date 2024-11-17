"use client";

import { DataTableColumnHeader, DataTableRowActions } from "@/components/common/data-table";
import type { AdminFragment } from "@/graphql";
import { parseDateTime } from "@/lib/date";
import type { Column } from "@/types/table.types";

type DataType = AdminFragment;
interface Props {
  onEdit: (data: DataType) => void;
  onDelete: (data: DataType) => void;
}
export const columns = ({ onEdit, onDelete }: Props): Column<DataType>[] => {
  return [
    {
      accessorKey: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
      cell: ({ row }) => {
        return row.original.name;
      },
    },
    {
      accessorKey: "createdAt",
      size: 200,
      header: ({ column }) => <DataTableColumnHeader column={column} title="Created At" />,
      cell: ({ row }) => <span>{parseDateTime(row.original.createdAt)}</span>,
    },
    {
      id: "actions",
      size: 100,
      cell: ({ row }) => (
        <DataTableRowActions<DataType>
          center
          onEdit={() => {
            onEdit(row.original);
          }}
          onDelete={() => {
            onDelete(row.original);
          }}
        />
      ),
    },
  ];
};
