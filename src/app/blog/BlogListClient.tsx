"use client";
import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta } from "./utils";
import { useState } from "react";

type Props = {
  posts: BlogPostMeta[];
};

export default function BlogListClient({ posts }: Props) {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");

  const filtered = posts.filter(
    post =>
      post.title.toLowerCase().includes(search.toLowerCase()) &&
      (topic ? post.topic === topic : true)
  );
  const topics = Array.from(new Set(posts.map(p => p.topic)));

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-64"
        />
        <select
          value={topic}
          onChange={e => setTopic(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-48"
        >
          <option value="">All Topics</option>
          {topics.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="ms-card group hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="aspect-video bg-[var(--muted)] rounded mb-4 flex items-center justify-center overflow-hidden">
              {post.thumbnail ? (
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-4xl text-[var(--muted-foreground)]">📝</span>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
              {post.title}
            </h2>
            <div className="text-sm text-[var(--muted-foreground)] mb-2">
              {post.date} • {post.topic}
            </div>
            <p className="text-[var(--muted-foreground)] mb-4">{post.summary}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
