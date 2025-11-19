import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender
} from "@tanstack/react-table";

export default function DataTable({ data, onRowSelect }) {
  const columns = useMemo(() => [
    {
      header: "Datasource",
      accessorKey: "name",
      cell: info => <div className="font-semibold text-primary">{info.getValue()}</div>
    },
    {
      header: "Organization",
      accessorKey: "org"
    },
    {
      header: "Users",
      accessorKey: "users"
    },
    {
      header: "Revenue",
      accessorKey: "revenue",
      cell: info => `$${info.getValue()}`
    },
    {
      header: "Conv. %",
      accessorKey: "conversionRate"
    },
    {
      header: "Updated",
      accessorKey: "updatedAt"
    }
  ], []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  return (
    <div className="bg-white rounded-xl shadow p-4 border">
      <table className="min-w-full">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="text-left p-2 text-sm text-muted">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr
              key={row.id}
              onClick={() => onRowSelect(row.original)}
              className="cursor-pointer hover:bg-gray-50"
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-2 align-top text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
