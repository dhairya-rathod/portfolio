import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import type { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";
import { PrimaryButton } from "@/components/UI";
import { Table } from "@/components/UI/Table";
import { useBlog, BlogRecord } from "@/hooks/useBlog";
import type { NextPageWithLayout } from "@/pages/_app";

interface UseBlog {
  data: any;
  isLoading: boolean;
}

const Blog: NextPageWithLayout = () => {
  const { asPath, push: pushRoute } = useRouter();
  const { data, isLoading }: UseBlog = useBlog();

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
      <div className="flex mb-4 justify-end w-full">
        <PrimaryButton
          label="Add +"
          onClick={() => pushRoute(`${asPath}/add`)}
        />
      </div>
      <Table<BlogRecord>
        columns={columns}
        data={!isLoading ? data?.blogs || [] : []}
      />
    </section>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Blog;
