import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  topic: string;
  thumbnail: string;
  summary: string;
};

export type BlogPost = BlogPostMeta & { content: string };

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getAllPostsMeta(): BlogPostMeta[] {
  const files = fs.readdirSync(postsDirectory);
  return files
    .filter(file => file.endsWith(".md"))
    .map(file => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        topic: data.topic || "",
        thumbnail: data.thumbnail || "",
        summary: data.summary || "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    topic: data.topic || "",
    thumbnail: data.thumbnail || "",
    summary: data.summary || "",
    content,
  };
}
