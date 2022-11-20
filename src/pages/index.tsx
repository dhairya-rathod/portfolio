import { Meta } from "@/components/Seo";
import { Navigation } from "@/components/UI";

export default function Home() {
  return (
    <Meta>
      <Navigation />

      <main className="flex flex-col h-full">
        <div>Home page</div>
      </main>
    </Meta>
  );
}
