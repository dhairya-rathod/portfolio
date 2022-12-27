import React, { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";
import { NextPageWithLayout } from "src/pages/_app";

const User: NextPageWithLayout = () => {
  return <div className="h-full">User</div>;
};

User.getLayout = function (page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default User;
