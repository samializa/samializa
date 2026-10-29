"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, ArrowUpRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check dark mode
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs text-primary-foreground font-mono">
            S
          </span>
          <span>samia.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <a
            href="https://github.com/samializa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant="outline" className="h-8 gap-1.5 text-xs font-mono">
              <Code2 className="h-3.5 w-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 opacity-60" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
