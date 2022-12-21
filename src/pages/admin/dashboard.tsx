import React, { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";

import { NextPageWithLayout } from "../_app";

const Dashboard: NextPageWithLayout = () => {
  return <div className="h-full">Dashboard</div>;
};

Dashboard.getLayout = function (page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Dashboard;
