import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 bg-background">
      <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 text-xs text-muted-foreground font-mono">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Samia Jannat Liza</span>
          <span>&middot;</span>
          <span>Dhaka, Bangladesh</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Deployed on Vercel
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
