import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPostBySlug } from "../utils";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <div className="ms-container py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-[var(--muted-foreground)] mb-6">
        {post.date} • {post.topic}
      </div>
      {post.thumbnail && (
        <div className="mb-8">
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={800}
            height={450}
            className="rounded w-full object-cover"
          />
        </div>
      )}
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {post.content as string}
        </ReactMarkdown>
      </div>
    </div>
  );
}
