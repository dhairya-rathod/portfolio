import { useRouter } from "next/router";
import type { ReactElement } from "react";

import AdminLayout from "@/components/AdminLayout";
import { PrimaryButton } from "@/components/UI";
import type { NextPageWithLayout } from "@/pages/_app";

const AddBlog: NextPageWithLayout = () => {
  const { back: pushBack } = useRouter();

  return (
    <section>
      <div className="flex mb-4 justify-start w-full">
        <PrimaryButton label="<- List" onClick={() => pushBack()} />
      </div>
    </section>
  );
};

AddBlog.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AddBlog;
