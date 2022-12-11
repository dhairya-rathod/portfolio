import Head from "next/head";

import { METADATA } from "../../constants";

interface AdminMetaProps {
  title?: string;
  children: React.ReactNode;
}

const AdminMeta = ({ title = "Admin", children }: AdminMetaProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | Dhairya Rathod`}</title>
        <meta name="title" content={title} />
        <meta name="description" content={METADATA.description} />
        <meta
          name="keywords"
          content="Dhairya Rathod, Full Stack Developer, Software Developer, Software Engineer, Frontend Engineer, Frontend Developer, Portfolio, Devfolio, Web Development, Web Developer"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Dhairya rathod" />
        <meta
          name="copyright"
          content="All rights reserved, 2022. Dhairya Rathod"
        />
        <meta httpEquiv="content-language" content="en" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#7000FF" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      {children}
    </>
  );
};

export default AdminMeta;
