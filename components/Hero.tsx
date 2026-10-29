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
  GraduationCap,
  Sparkles,
  Layers,
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
    <section className="relative overflow-hidden border-b border-border bg-background pt-6 pb-8 md:pt-10 md:pb-12">
      {/* Subtle ambient Three.js 3D background behind hero */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-25 pointer-events-none">
        <ThreeScene className="w-full h-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bio & Core Info */}
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
                <span>Software Engineer & CS Graduate</span>
                <span className="inline-flex items-center gap-1 text-xs border border-border px-2 py-0.5 rounded text-foreground/80 font-mono">
                  <GraduationCap className="h-3 w-3" />
                  AIUB
                </span>
              </p>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground max-w-xl">
              Computer Science & Engineering graduate from the{" "}
              <span className="text-foreground font-medium">
                American International University-Bangladesh (AIUB)
              </span>
              . Passionate about software architecture, 3D interactive graphics,
              and building fast, reliable web applications with C++, Java, Next.js, and Three.js.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a href="#projects">
                <Button size="sm" className="gap-2 font-medium">
                  View Selected Work
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

            {/* Social & Contact Channels */}
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
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-2.5 py-1.5 text-xs font-mono hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-2.5 py-1.5 text-xs font-mono hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Portrait Photo + Interactive Three.js Showcase */}
          <div className="md:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[320px] rounded-2xl border border-border bg-card/80 p-2.5 shadow-lg backdrop-blur-sm transition-all hover:border-foreground/30">
              {/* Photo Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted/40">
                <Image
                  src="/avatar.png"
                  alt="Samia Jannat Liza"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                />
                
                {/* Overlay Badge at Bottom of Photo */}
                <div className="absolute inset-x-2 bottom-2 z-10 flex items-center justify-between rounded-lg border border-white/20 bg-neutral-950/75 p-2 backdrop-blur-md shadow-md text-white">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold leading-tight">
                      Samia Jannat Liza
                    </span>
                    <span className="text-[10px] text-neutral-300 font-mono">
                      B.Sc. CSE &bull; AIUB
                    </span>
                  </div>
                  <div className="flex items-center gap-1 rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online
                  </div>
                </div>
              </div>

              {/* Three.js 3D Graphics Status pill */}
              <div className="mt-2.5 flex items-center justify-between px-1 text-[11px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-sky-500" />
                  <span>Three.js 3D Graphics</span>
                </span>
                <span className="text-[10px] bg-muted/60 px-1.5 py-0.5 rounded">
                  WebGL 60FPS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
