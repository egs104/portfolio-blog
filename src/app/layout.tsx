import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Eric Suarez | Senior Full-Stack Software Engineer | AI Platforms, Azure, React, .NET",
  description:
    "Senior Full-Stack Software Engineer at Microsoft building AI-powered enterprise platforms, secure REST/GraphQL APIs, React/TypeScript applications, Azure cloud services, agentic workflows, and reliable production systems.",
  openGraph: {
    title: "Eric Suarez — Senior Full-Stack Software Engineer",
    description:
      "AI Platforms • Azure • React/TypeScript • C#/.NET • Agentic Workflows • Production Reliability",
    type: "website",
    url: "https://egstech.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Suarez — Senior Full-Stack Software Engineer",
    description:
      "AI Platforms • Azure • React/TypeScript • C#/.NET • Agentic Workflows • Production Reliability",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <header className="border-b border-[var(--border)] bg-[var(--card-bg)] sticky top-0 z-10">
          <div className="ms-container flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold text-[var(--primary)]">
              Eric Suarez
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:block">
                <ul className="flex space-x-6 text-sm">
                  <li>
                    <a href="#about" className="hover:text-[var(--primary)] transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="hover:text-[var(--primary)] transition-colors">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hover:text-[var(--primary)] transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-[var(--muted)] mt-16">
          <div className="ms-container py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Eric Suarez</h3>
                <p className="text-[var(--muted-foreground)] text-sm">
                  Senior Full-Stack Software Engineer building AI-powered enterprise platforms at
                  Microsoft.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <li>
                    <a href="mailto:egs104@gmail.com" className="hover:text-[var(--primary)]">
                      egs104@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/egs104"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--primary)]"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/eric-suarez-72332388/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--primary)]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <li>
                    <a href="#about" className="hover:text-[var(--primary)]">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="hover:text-[var(--primary)]">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hover:text-[var(--primary)]">
                      Skills
                    </a>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[var(--primary)]">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted-foreground)]">
              <p>© {new Date().getFullYear()} Eric Suarez. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
