"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThreeScene from "@/components/ThreeScene";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "samiajannatliza@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative border-b border-border bg-background pt-6 pb-8 md:pt-10 md:pb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Main Info Column */}
          <div className="md:col-span-7 flex flex-col space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Software Engineering Roles
              </span>
              <Badge variant="mono">Dhaka, Bangladesh</Badge>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
                Samia Jannat Liza
              </h1>
              <p className="text-base sm:text-lg font-medium text-muted-foreground flex items-center gap-2 flex-wrap">
                <span>Software Engineer & Computer Science Graduate</span>
                <span className="inline-flex items-center gap-1 text-xs border border-border px-2 py-0.5 rounded text-foreground/80 font-mono">
                  <GraduationCap className="h-3 w-3" />
                  AIUB
                </span>
              </p>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">
              Engineering web applications and graphics systems with focus on
              performance, clean object-oriented architecture, and modern UX.
              Experienced across C++, Java, Next.js, React, and Software Quality & Testing.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a href="#projects">
                <Button size="sm" className="gap-2 font-medium">
                  View Work
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyEmail}
                className="gap-2 text-xs font-mono"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>samiajannatliza@gmail.com</span>
                  </>
                )}
              </Button>
            </div>

            {/* Public Links */}
            <div className="flex items-center gap-2 pt-1 text-muted-foreground">
              <a
                href="https://github.com/samializa"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border p-2 hover:text-foreground hover:bg-muted/50 transition-colors"
                title="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/samia-jannat-liza-969098408/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border p-2 hover:text-foreground hover:bg-muted/50 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:samiajannatliza@gmail.com"
                className="rounded-md border border-border p-2 hover:text-foreground hover:bg-muted/50 transition-colors"
                title="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-2.5 py-1.5 text-xs font-mono hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-2.5 py-1.5 text-xs font-mono hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Right Column: Visual Frame + Minimal Three.js Canvas */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] rounded-lg border border-border bg-card p-2 shadow-sm">
              <div className="relative h-56 w-full overflow-hidden rounded bg-secondary/30">
                {/* Minimal ThreeJS wireframe interactive canvas in background */}
                <div className="absolute inset-0 z-0">
                  <ThreeScene />
                </div>
                {/* Floating Portrait Badge */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2.5 rounded-md border border-border/80 bg-background/90 p-1.5 backdrop-blur-md shadow-sm">
                  <div className="relative h-10 w-10 overflow-hidden rounded border border-border">
                    <Image
                      src="/avatar.png"
                      alt="Samia Jannat Liza"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col pr-1">
                    <span className="text-xs font-semibold leading-tight text-foreground">
                      Samia J. Liza
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      CSE @ AIUB
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between px-1 text-[11px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  Three.js 3D Viewport
                </span>
                <span>Interactive Wireframe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
