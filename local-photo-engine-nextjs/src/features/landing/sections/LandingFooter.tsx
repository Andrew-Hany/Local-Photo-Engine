"use client";

import React from "react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const LandingFooter = () => {
  return (
    <footer className="pt-20 bg-background border-t border-foreground/5">
      <div className="container mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-rose-500 to-rose-600 p-0.5 shadow-lg">
                <div className="w-full h-full rounded-[10px] bg-background flex items-center justify-center font-black text-xs text-foreground">
                  LPE
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">Local Photo Engine</span>
            </div>
            <p className="text-foreground/40 text-sm leading-relaxed mb-6">
              Premium local-first AI for your memories. Beautifully organized, securely private, and openly built for the future of photography.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/andrewzaki-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-orange-500 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/andrewzaki/local-photo-engine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-orange-500 transition-colors"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-left md:text-right">
            <p className="text-foreground/30 text-[13px] tracking-tight">
              &copy; {new Date().getFullYear()} Local Photo Engine.
            </p>
            <p className="text-rose-500/40 text-xs font-bold uppercase tracking-widest">
              Openly built & locally shared.
            </p>
          </div>
        </div>
      </div>

      {/* Signature Bar - Full Width at the end */}
      <div className="w-full py-8 border-t border-foreground/5 bg-foreground/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-foreground/30 text-center">
            {/* <span className="text-foreground/50 tracking-[0.4em]">Openly Built & Locally Shared</span> */}
            <span className="hidden md:inline-block opacity-20">•</span>
            <span>
              Designed and Developed by{" "}
              <a
                href="https://www.linkedin.com/in/andrewzaki-/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600 font-black hover:opacity-80 transition-all border-b-2 border-orange-500/20 pb-0.5 tracking-[0.2em]"
              >
                Andrew Zaki
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
