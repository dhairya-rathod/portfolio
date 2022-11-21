import { Intro } from "@/components/Home";
import { Meta } from "@/components/Seo";
import { Navigation } from "@/components/UI";

export default function Home() {
  return (
    <Meta>
      <Navigation />

      <main className="flex flex-col h-full">
        <Intro />
      </main>
    </Meta>
  );
}
