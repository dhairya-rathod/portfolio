import type { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";
import type { NextPageWithLayout } from "@/pages/_app";

const Dashboard: NextPageWithLayout = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Dashboard;
