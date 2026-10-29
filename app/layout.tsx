import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samia Jannat Liza — Software Engineer & Undergraduate CSE Student",
  description:
    "Portfolio of Samia Jannat Liza. Undergraduate Computer Science and Engineering student at AIUB. Specialized in Full-Stack Web Engineering, Three.js & Computer Graphics, and Software Quality.",
  keywords: [
    "Samia Jannat Liza",
    "Software Engineer",
    "AIUB",
    "Next.js",
    "Three.js",
    "OpenGL",
    "C++",
    "Java",
    "Portfolio",
  ],
  authors: [{ name: "Samia Jannat Liza" }],
  openGraph: {
    title: "Samia Jannat Liza — Software Engineer",
    description:
      "Minimalist engineering portfolio with Three.js graphics and clean software architecture.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-neutral-800 selection:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
