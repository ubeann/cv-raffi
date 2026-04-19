import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "CV - Professional Portfolio",
  description: "Explore my professional CV and portfolio",
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
