import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would normally come from a database or CMS
const blogPosts = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js 15',
    date: 'May 15, 2024',
    author: 'Your Name',
    category: 'Web Development',
    readTime: '8 min read',
    content: `
      <p>Next.js has revolutionized the way we build React applications, providing an exceptional developer experience with all the features needed for production.</p>
      
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations.</p>
      
      <p>You need to know React to use Next.js. If you're just getting started with React, we recommend going through the <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">official React tutorial</a> first.</p>
      
      <h2>Key Features of Next.js 15</h2>
      <ul>
        <li><strong>Server Components</strong>: Write components that render on the server for improved performance.</li>
        <li><strong>App Router</strong>: File-system based router built on top of Server Components.</li>
        <li><strong>Streaming</strong>: Display content as it becomes available from the server.</li>
        <li><strong>Turbopack</strong>: A Rust-based successor to Webpack for faster development.</li>
        <li><strong>Optimized Images and Fonts</strong>: Automatically optimize images and fonts for better performance.</li>
        <li><strong>API Routes</strong>: Create API endpoints inside your Next.js app.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Creating a new Next.js project is as simple as running:</p>
      
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new project with everything you need to build a modern web application.</p>
      
      <h2>Server Components vs Client Components</h2>
      <p>Next.js 15 features React Server Components, which allow you to render components on the server. This can significantly improve performance by reducing the JavaScript sent to the client.</p>
      
      <p>You can create Client Components by adding the "use client" directive at the top of your file:</p>
      
      <pre><code>"use client"

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}</code></pre>
      
      <h2>Routing with the App Router</h2>
      <p>The App Router uses a file-system based router where folders define routes. Routes are nested through folder hierarchies, and special files like page.tsx, layout.tsx, and loading.tsx define UI for each route segment.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js 15 represents a significant step forward for React development, making it easier than ever to build fast, scalable, and user-friendly web applications. Whether you're building a personal blog, an e-commerce site, or a complex web application, Next.js provides the tools and features you need to succeed.</p>
    `
  },
  'typescript-best-practices': {
    title: 'TypeScript Best Practices for 2024',
    date: 'May 2, 2024',
    author: 'Your Name',
    category: 'TypeScript',
    readTime: '10 min read',
    content: `<p>TypeScript has become the standard for modern JavaScript development...</p>`
  }
};

// Define the valid keys type
type BlogPostKey = keyof typeof blogPosts;

// Define the params type
type BlogPostParams = {
  params: {
    slug: string;
  };
};

// Dynamic metadata generation
export async function generateMetadata({ params }: BlogPostParams) {
  // Apply type assertion for slug
  const blogPostParams = await params;
  const post = blogPosts[blogPostParams.slug as BlogPostKey];
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Your Name's Blog`,
    description: `Read about ${post.title} on Your Name's blog.`,
  };
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  // Apply type assertion for slug
  const blogPostParams = await params;
  const post = blogPosts[blogPostParams.slug as BlogPostKey];
  
  if (!post) {
    notFound();
  }
  
  return (
    <article>
      {/* Blog Post Header */}
      <section className="ms-section bg-[var(--muted)]">
        <div className="ms-container max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[var(--muted-foreground)] hover:text-[var(--primary)] mb-4 transition-colors"
          >
            <span className="mr-1">←</span> Back to all posts
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[var(--muted-foreground)]">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="text-[var(--primary)]">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="ms-section">
        <div className="ms-container max-w-3xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Author Bio */}
          <div className="mt-12 pt-12 border-t border-[var(--border)]">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                YN
              </div>
              <div>
                <h3 className="font-semibold text-lg">{post.author}</h3>
                <p className="text-[var(--muted-foreground)]">
                  Full Stack Developer specializing in modern web technologies.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="mt-12 pt-12 border-t border-[var(--border)]">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="ms-card">
                <span className="text-xs text-[var(--primary)]">WEB DEVELOPMENT</span>
                <h3 className="font-semibold mt-1 mb-2 hover:text-[var(--primary)] transition-colors">
                  <Link href="/blog/responsive-design-techniques">
                    Modern Responsive Design Techniques
                  </Link>
                </h3>
                <div className="text-sm text-[var(--muted-foreground)]">April 20, 2024 • 7 min read</div>
              </div>
              
              <div className="ms-card">
                <span className="text-xs text-[var(--primary)]">REACT</span>
                <h3 className="font-semibold mt-1 mb-2 hover:text-[var(--primary)] transition-colors">
                  <Link href="/blog/state-management-react">
                    State Management in React: Beyond Redux
                  </Link>
                </h3>
                <div className="text-sm text-[var(--muted-foreground)]">April 5, 2024 • 12 min read</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}