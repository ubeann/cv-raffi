"use client";

import { useState, useEffect } from "react";
import { User, Briefcase, Code, Mail, Database, Users } from "lucide-react";

export default function FloatingNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentId = "hero";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight / 2 + 100) {
          currentId = section.getAttribute("id") || currentId;
        }
      });

      setActive(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const links = [
    { id: "hero", label: "Hero", icon: <User className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Code className="w-4 h-4" /> },
    { id: "foundation", label: "Foundation", icon: <Database className="w-4 h-4" /> },
    { id: "leadership", label: "Leadership", icon: <Users className="w-4 h-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-100 transition-transform duration-300">
      <div className="flex items-center gap-1 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg shadow-black/20">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-label={link.label}
            onClick={(e) => handleScrollTo(e, link.id)}
            className={`group relative p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
              active === link.id
                ? "bg-accent text-background scale-110"
                : "text-foreground hover:text-accent hover:scale-110"
            }`}
          >
            {link.icon}

            {/* Minimalist Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-mono uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl">
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></span>
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
