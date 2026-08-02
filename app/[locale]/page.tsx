import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
export default async function Home() {

  return (
    <main className="relative">
      <Navbar className="fixed w-full top-0 z-50 bg-background" />
      <Hero className="min-h-screen" />
    </main>
  );
}