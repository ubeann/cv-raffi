import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Foundation from "./components/sections/Foundation";
import Leadership from "./components/sections/Leadership";
import Contact from "./components/sections/Contact";

export const metadata = {
  title: "RAFFI ACHMAD R. — SDE // CV",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full border-x border-border min-h-screen bg-background text-foreground overflow-hidden">
      <Hero />
      <Experience />
      <Projects />
      <Foundation />
      <Leadership />
      <Contact />

      {/* =========================================
          FOOTER
          ========================================= */}
      <footer className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-subtle bg-background border-t border-border relative z-30">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          [ SYSTEM: ONLINE / OPTIMIZED ]
        </div>
        <div className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} RAFFI ACHMAD RIANDRI. ALL RIGHTS RESERVED.</div>
      </footer>
    </div>
  );
}