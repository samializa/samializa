import React from "react";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const skillGroups = [
    {
      name: "Programming Languages",
      skills: ["C++", "Java", "TypeScript", "JavaScript", "SQL", "PHP", "HTML5", "CSS3"],
    },
    {
      name: "Frontend & Web Technologies",
      skills: ["Next.js (App Router)", "React", "Tailwind CSS", "Shadcn UI", "REST APIs", "Three.js"],
    },
    {
      name: "Graphics & Interactive Computing",
      skills: ["OpenGL", "GLUT", "3D Coordinate Systems", "Lighting & Transformations", "Web Graphics"],
    },
    {
      name: "Engineering Tools & Testing",
      skills: ["Git & GitHub", "GitLab", "Software Quality Assurance (SQT)", "Unit Testing", "Vercel", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="border-b border-border py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">03 //</span>
              Technical Competencies
            </h2>
            <Badge variant="mono">Stack Matrix</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillGroups.map((group, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card/40 p-4 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold text-foreground tracking-wide uppercase font-mono">
                    {group.name}
                  </h3>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {group.skills.length} skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-border/80 bg-background px-2 py-1 text-xs font-mono text-foreground/90 transition-colors hover:border-primary/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
