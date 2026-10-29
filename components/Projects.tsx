import React from "react";
import { ExternalLink, Github, FolderGit2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Park Scene 3D Simulation",
      desc: "Interactive 3D park scene developed for computer graphics using C++ and GLUT/OpenGL. Implemented 3D object rendering, camera perspectives, terrain geometry, and lighting shaders.",
      repoUrl: "https://github.com/samializa/park-scene-graphics",
      tags: ["C++", "OpenGL", "GLUT", "3D Graphics"],
      featured: true,
      category: "Graphics & Systems",
    },
    {
      title: "Next.js Minimalist Portfolio",
      desc: "Ultra-clean engineering portfolio designed with Next.js 14, Tailwind CSS, and lightweight Three.js 3D viewport. Built for maximum speed, compact density, and zero fluff.",
      repoUrl: "https://github.com/samializa/samializa",
      demoUrl: "https://samializa.vercel.app",
      tags: ["Next.js", "React", "TypeScript", "Three.js", "Tailwind CSS"],
      featured: true,
      category: "Web Engineering",
    },
    {
      title: "Software Quality & Testing (SQT)",
      desc: "Validation suites and automated test specifications for verifying system logic, edge boundaries, and software quality compliance standards.",
      repoUrl: "https://github.com/samializa/sqt-test",
      tags: ["SQT", "Test Automation", "QA", "Boundary Testing"],
      featured: false,
      category: "Software Quality",
    },
    {
      title: "Web Technologies Lab Suite",
      desc: "Full-stack web applications exploring responsive user interfaces, client-server communication, database transactions, and session security.",
      repoUrl: "https://github.com/samializa/web-tech-lab",
      tags: ["JavaScript", "HTML5", "CSS3", "PHP", "Full Stack"],
      featured: false,
      category: "Web Development",
    },
    {
      title: "C++ & Java Core Implementations",
      desc: "Comprehensive collection of object-oriented programs, algorithmic problems, memory management patterns, and reusable data structures.",
      repoUrl: "https://github.com/samializa/Cpp",
      tags: ["C++", "Java", "OOP", "Data Structures"],
      featured: false,
      category: "Object-Oriented Systems",
    },
    {
      title: "GitLab Task & CI Workflows",
      desc: "Practices in version control branching strategies, automated repository scripts, and collaborative workflow pipelines.",
      repoUrl: "https://github.com/samializa/GitLabTask",
      tags: ["GitLab", "Git", "DevOps", "Version Control"],
      featured: false,
      category: "Tools & DevOps",
    },
  ];

  return (
    <section id="projects" className="border-b border-border py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">02 //</span>
              Selected Projects
            </h2>
            <a
              href="https://github.com/samializa?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground font-mono flex items-center gap-1 transition-colors"
            >
              <span>all repositories</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="flex flex-col justify-between border-border/80 hover:border-foreground/30 transition-all bg-card/50 hover:bg-card"
              >
                <CardHeader className="p-3 pb-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-amber-600 dark:text-amber-400">
                        <Sparkles className="h-2.5 w-2.5" />
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-sm font-semibold hover:underline cursor-pointer">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-3 pt-0 space-y-3">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-3 pt-0 flex items-center justify-between border-t border-border/40 mt-auto">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
