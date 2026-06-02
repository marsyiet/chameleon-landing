import Hero from "./_components/hero";
import Navbar from "@/components/navbar";
export default async function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}