import { GetServerSideProps } from "next";
import { getCsrfToken, getSession } from "next-auth/react";

import { Login } from "@/components/Form";
import { AdminMeta } from "@/components/Seo";

const Admin = ({ csrfToken }: { csrfToken: string }) => {
  return (
    <AdminMeta title="Admin Login">
      <main className="flex flex-col h-full min-h-screen justify-center items-center">
        <Login csrfToken={csrfToken} />
      </main>
    </AdminMeta>
  );
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/admin/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
};
