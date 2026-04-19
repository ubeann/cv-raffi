"use client";

import { useState, useEffect } from "react";
import { User, Briefcase, Code, Mail } from "lucide-react";

export default function FloatingNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentId = "hero";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight / 2) {
          currentId = section.getAttribute("id") || currentId;
        }
      });

      setActive(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "hero", icon: <User className="w-4 h-4" /> },
    { id: "experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "projects", icon: <Code className="w-4 h-4" /> },
    { id: "contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-transform duration-300">
      <div className="flex items-center gap-1 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg shadow-black/20">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-label={link.id}
            className={`p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
              active === link.id
                ? "bg-accent text-background"
                : "text-foreground hover:bg-border"
            }`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
