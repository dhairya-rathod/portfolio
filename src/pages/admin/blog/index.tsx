import { createColumnHelper } from "@tanstack/react-table";
import type { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";
import { Table } from "@/components/UI/Table";
import type { NextPageWithLayout } from "@/pages/_app";

interface BlogRecord {
  title: string;
  slug: string;
  status: string | boolean;
  createdAt: string;
  updatedAt: string;
}

const Blog: NextPageWithLayout = () => {
  const columnHelper = createColumnHelper<BlogRecord>();
  const columns = [
    columnHelper.accessor((row) => row.title, {
      id: "title",
      cell: (info) => (
        <span className="font-medium whitespace-nowrap">{info.getValue()}</span>
      ),
      header: () => <span>Title</span>,
    }),
    columnHelper.accessor((row) => row.slug, {
      id: "slug",
      header: () => <span>Slug</span>,
    }),
    columnHelper.accessor((row) => row.status, {
      id: "status",
      header: () => <span>Status</span>,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "createdAt",
      header: () => <span>Created At</span>,
    }),
    columnHelper.accessor((row) => row.updatedAt, {
      id: "updatedAt",
      header: () => <span>Updated At</span>,
    }),
  ];

  return (
    <section>
      <Table<BlogRecord>
        columns={columns}
        data={[
          {
            title: "Example 1",
            slug: "example-1",
            status: "Active",
            createdAt: "19 Nov 2023",
            updatedAt: "19 Nov 2023",
          },
        ]}
      />
    </section>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Blog;
