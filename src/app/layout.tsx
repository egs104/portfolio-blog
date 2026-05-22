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
  title: "Eric Suarez | Senior Full-Stack Software Engineer | Microsoft",
  description:
    "Senior Full-Stack Software Engineer at Microsoft building backend services, React/TypeScript applications, Azure cloud systems, and applied AI features with a focus on reliability, performance, and engineering quality.",
  openGraph: {
    title: "Eric Suarez — Senior Full-Stack Software Engineer",
    description:
      "Microsoft engineer focused on full-stack systems, Azure, React/TypeScript, C#/.NET, reliability, and applied AI.",
    type: "website",
    url: "https://egstech.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Suarez — Senior Full-Stack Software Engineer",
    description:
      "Microsoft engineer focused on full-stack systems, Azure, React/TypeScript, C#/.NET, reliability, and applied AI.",
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
                  {/* <li>
                    <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">
                      Blog
                    </Link>
                  </li> */}
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
                  Senior Full-Stack Software Engineer at Microsoft focused on reliable systems,
                  product engineering, and cloud-native development.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                  <li>
                    <a
                      href="mailto:egs104@gmail.com"
                      className="inline-flex items-center gap-2 hover:text-[var(--primary)]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      egs104@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/egs104"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-[var(--primary)]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/eric-suarez-72332388/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-[var(--primary)]"
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
                  {/* <li>
                    <Link href="/blog" className="hover:text-[var(--primary)]">
                      Blog
                    </Link>
                  </li> */}
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
