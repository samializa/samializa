"use client";

import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const email = "samiajannatliza@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    const mailtoUrl = `mailto:${email}?subject=Portfolio Contact from ${encodeURIComponent(
      name || "Visitor"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${emailInput}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="border-b border-border py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">04 //</span>
              Get In Touch
            </h2>
            <Badge variant="mono">Direct Contact</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Contact Information & Channels */}
            <div className="md:col-span-5 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Whether you have an engineering role opening, an interesting project,
                or want to collaborate on software systems and 3D graphics, feel free
                to connect.
              </p>

              <div className="space-y-2">
                {/* Email Item */}
                <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="truncate text-xs font-mono text-foreground">
                      {email}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="h-7 px-2 text-xs font-mono text-muted-foreground hover:text-foreground"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href="https://www.linkedin.com/in/samia-jannat-liza-969098408/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-3 hover:border-foreground/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-xs font-mono text-foreground">
                      linkedin.com/in/samia-jannat-liza
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>

                {/* GitHub Item */}
                <a
                  href="https://github.com/samializa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-3 hover:border-foreground/30 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-xs font-mono text-foreground">
                      github.com/samializa
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-border px-3 py-1 text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-border px-3 py-1 text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="md:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-border bg-card p-4 space-y-3"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                  Send A Quick Message
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Samia, I saw your portfolio and would love to discuss..."
                    className="w-full rounded-md border border-border bg-background p-3 text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="sm"
                  className="w-full sm:w-auto gap-2 font-medium"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </Button>

                {submitted && (
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                    Opening your email client with the pre-filled message...
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
