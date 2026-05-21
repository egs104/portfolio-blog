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
              {/* TODO: replace href with /Eric_Suarez_Senior_Software_Engineer_Resume.pdf when ready */}
              <a
                href="https://www.linkedin.com/in/TODO"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-button text-sm hidden md:inline-flex"
              >
                Resume
              </a>
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
                    {/* TODO: replace # with LinkedIn profile URL when ready */}
                    <a href="#" className="hover:text-[var(--primary)]">
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
