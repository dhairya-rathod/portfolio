import React, { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";
import { Table } from "@/components/UI";
import useMessage from "@/hooks/useMessage";
import { NextPageWithLayout } from "src/pages/_app";

const Message: NextPageWithLayout = () => {
  useMessage();
  return (
    <div className="h-full px-16 pt-8">
      <Table />
    </div>
  );
};

Message.getLayout = function (page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Message;
