import type { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";
import type { NextPageWithLayout } from "@/pages/_app";

const Blog: NextPageWithLayout = () => {
  return <div>Blogs</div>;
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Blog;
