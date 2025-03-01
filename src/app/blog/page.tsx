import Link from "next/link";

export const metadata = {
  title: "Blog | Your Name",
  description: "Articles about web development and technology",
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn how to build modern web applications with the latest version of Next.js, featuring server components and the App Router.",
    date: "May 15, 2024",
    category: "Web Development",
    readTime: "8 min read"
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    excerpt: "Explore the latest TypeScript features and best practices to make your code more robust, maintainable, and error-free.",
    date: "May 2, 2024",
    category: "TypeScript",
    readTime: "10 min read"
  },
  {
    id: "responsive-design-techniques",
    title: "Modern Responsive Design Techniques",
    excerpt: "Discover advanced techniques for creating truly responsive websites that work seamlessly across all devices and screen sizes.",
    date: "April 20, 2024",
    category: "CSS",
    readTime: "7 min read"
  },
  {
    id: "state-management-react",
    title: "State Management in React: Beyond Redux",
    excerpt: "Explore modern state management solutions for React applications, from Context API to Zustand and Jotai.",
    date: "April 5, 2024",
    category: "React",
    readTime: "12 min read"
  },
  {
    id: "tailwind-vs-css",
    title: "TailwindCSS vs. Traditional CSS",
    excerpt: "A comprehensive comparison between utility-first CSS with Tailwind and traditional CSS approaches for modern web development.",
    date: "March 22, 2024",
    category: "CSS",
    readTime: "9 min read"
  },
  {
    id: "ai-in-web-development",
    title: "AI Tools for Modern Web Development",
    excerpt: "How AI-powered tools are transforming the web development landscape, from code generation to design assistance.",
    date: "March 10, 2024",
    category: "AI",
    readTime: "11 min read"
  }
];

export default function BlogPage() {
  return (
    <div>
      {/* Blog Header */}
      <section className="ms-section bg-[var(--muted)]">
        <div className="ms-container text-center">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and technology.
          </p>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="ms-section">
        <div className="ms-container">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button className="px-4 py-1.5 bg-[var(--primary)] text-white rounded-full text-sm">
              All
            </button>
            <button className="px-4 py-1.5 bg-[var(--muted)] hover:bg-[var(--muted-foreground)] hover:text-white rounded-full text-sm transition-colors">
              React
            </button>
            <button className="px-4 py-1.5 bg-[var(--muted)] hover:bg-[var(--muted-foreground)] hover:text-white rounded-full text-sm transition-colors">
              TypeScript
            </button>
            <button className="px-4 py-1.5 bg-[var(--muted)] hover:bg-[var(--muted-foreground)] hover:text-white rounded-full text-sm transition-colors">
              CSS
            </button>
            <button className="px-4 py-1.5 bg-[var(--muted)] hover:bg-[var(--muted-foreground)] hover:text-white rounded-full text-sm transition-colors">
              AI
            </button>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="ms-card group hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="text-xs font-medium text-[var(--primary)] uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-[var(--primary)] transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[var(--muted-foreground)] mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors">
                &larr;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)] text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--muted)] transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--muted)] transition-colors">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] hover:bg-[var(--muted)] transition-colors">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="ms-section bg-[var(--muted)]">
        <div className="ms-container max-w-3xl">
          <div className="ms-card text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to my newsletter</h3>
            <p className="mb-6 text-[var(--muted-foreground)]">
              Get the latest articles and resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-2 border border-[var(--border)] rounded-sm bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
              <button className="ms-button whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}