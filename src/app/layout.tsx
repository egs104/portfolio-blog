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
  title: "Portfolio | EgsTech",
  description: "Professional portfolio and blog",
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
                Your Name
              </Link>
              <div className="flex items-center">
                <nav className="mr-4">
                  <ul className="flex space-x-8">
                    <li>
                      <Link href="/" className="hover:text-[var(--primary)] transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">
                        Blog
                      </Link>
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
                  <h3 className="font-semibold mb-4">Your Name</h3>
                  <p className="text-[var(--muted-foreground)]">Professional developer building modern web experiences.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    <li><a href="#" className="hover:text-[var(--primary)]">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-[var(--primary)]">GitHub</a></li>
                    <li><a href="#" className="hover:text-[var(--primary)]">Twitter</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Navigation</h3>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    <li><Link href="/" className="hover:text-[var(--primary)]">Home</Link></li>
                    <li><Link href="/blog" className="hover:text-[var(--primary)]">Blog</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-[var(--muted-foreground)]">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
              </div>
            </div>
          </footer>
      </body>
    </html>
  );
}
