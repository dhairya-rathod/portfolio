import { ReactElement } from "react";

import { AdminMeta } from "@/components/Seo";
import { Footer, Header, Sidebar } from "@/components/UI/Admin";

const AdminLayout = ({ children }: { children: ReactElement }) => {
  return (
    <AdminMeta>
      <main className="flex flex-col h-full min-h-screen">
        <Header />
        <div className="flex h-full flex-1 my-16">
          <Sidebar />
          <div className="px-8 py-4">{children}</div>
        </div>
        <Footer />
      </main>
    </AdminMeta>
  );
};

export default AdminLayout;
