import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Approach } from "@/components/Approach";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Approach />
      <About />
      <Footer />
    </main>
  );
}
