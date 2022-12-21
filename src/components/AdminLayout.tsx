import React from "react";

import { Header, Sidebar } from "@/components/UI";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex">
      <div className="w-full max-w-[75px] lg:max-w-[240px] p-4 bg-[#323133]">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;
