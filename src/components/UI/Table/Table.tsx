import {
  PaginationState,
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useState, useEffect, useMemo } from "react";

interface TableProps<T> {
  columns: ColumnDef<T, any>[];
  data: T[];
  pageCount?: number;
  onPageChange?: (page: number) => void;
}

interface PaginationButtonProps {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

const PaginationButton = ({
  onClick,
  label,
  disabled,
}: PaginationButtonProps) => {
  return (
    <button
      className="border rounded p-1 px-4 disabled:cursor-not-allowed font-bold"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export const Table = <T,>({
  columns,
  data,
  pageCount = -1,
  onPageChange,
}: TableProps<T>) => {
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    pageCount: pageCount,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    manualPagination: true,
    // debugTable: false,
  });

  useEffect(() => {
    if (typeof onPageChange === "function") {
      onPageChange(pagination.pageIndex);
    }
  }, [pagination.pageIndex, onPageChange]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full">
          <thead className="text-sm uppercase bg-gray-700 text-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="text-left px-6 py-3">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="text-left px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center mt-4 justify-between">
        <div className="flex gap-4">
          <PaginationButton
            label="<"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
          <PaginationButton
            label=">"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </div>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
      </div>
    </>
  );
};
