import React from "react";
import { Terminal, ShieldCheck, Layers, Cpu, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const highlights = [
    {
      icon: Terminal,
      title: "Full-Stack & Web Engineering",
      desc: "Architecting modular, performant web applications using Next.js, React, Tailwind CSS, and RESTful backends.",
    },
    {
      icon: Layers,
      title: "Computer Graphics & Modeling",
      desc: "Hands-on experience with OpenGL, GLUT, C++, and Three.js for 3D transformations, interactive lighting, and scene rendering.",
    },
    {
      icon: ShieldCheck,
      title: "Software Quality & Testing",
      desc: "Rigorous test design, automated unit/integration suites, edge-case analysis, and verification protocols.",
    },
    {
      icon: Cpu,
      title: "Object-Oriented Design",
      desc: "Strong foundational principles in C++ and Java with clean data structures, encapsulation, and scalable design patterns.",
    },
  ];

  return (
    <section id="about" className="border-b border-border py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">01 //</span>
              About & Background
            </h2>
            <Badge variant="mono">Undergrad CSE</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 space-y-3">
              <p className="text-sm leading-relaxed text-muted-foreground">
                I am a Computer Science & Engineering student at the{" "}
                <span className="font-medium text-foreground">
                  American International University-Bangladesh (AIUB)
                </span>
                . My engineering journey is driven by a deep interest in building
                intuitive software systems, high-efficiency web applications, and
                exploring 3D interactive graphics.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Whether implementing 3D algorithms in C++/OpenGL or crafting
                responsive Next.js frontends, I emphasize clean architecture,
                predictable state management, and strict software quality standards.
              </p>

              <div className="rounded-md border border-border bg-muted/30 p-3 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <BookOpen className="h-3.5 w-3.5 text-primary" />
                  <span>Academic Foundations</span>
                </div>
                <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
                  <li>Data Structures & Algorithms</li>
                  <li>Computer Graphics (OpenGL / GLUT)</li>
                  <li>Software Quality and Testing (SQT)</li>
                  <li>Web Technologies & Systems Programming</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <Card key={i} className="border-border/80 hover:border-border transition-colors">
                    <CardHeader className="p-3 pb-1">
                      <div className="flex items-center gap-2">
                        <div className="rounded bg-muted p-1.5 text-foreground">
                          <Icon className="h-4 w-4" />
                        </div>
                        <CardTitle className="text-xs font-semibold">
                          {h.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <p className="text-[12px] leading-relaxed text-muted-foreground">
                        {h.desc}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
