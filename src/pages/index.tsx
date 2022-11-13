import Head from "next/head";

import { About, Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";
import { Navbar, Footer } from "@/components/UI";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhairya Rathod | Software Engineer</title>
        <meta name="description" content="Dhairya Rathod Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Profile />
      <About />
      <Skills />

      <Footer />
    </>
  );
}
