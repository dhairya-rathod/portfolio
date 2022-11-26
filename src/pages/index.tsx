import { About, Intro } from "@/components/Home";
import { Meta } from "@/components/Seo";
import { Skills } from "@/components/Skills";
import { Navigation } from "@/components/UI";

export default function Home() {
  return (
    <Meta>
      <Navigation />

      <main className="flex flex-col h-full min-h-screen">
        <Intro />
        <About />
        <Skills />
      </main>
    </Meta>
  );
}
