import { getAllPostsMeta } from "./utils";
import BlogListClient from "./BlogListClient";

export default function BlogPage() {
  const posts = getAllPostsMeta();
  return (
    <div className="ms-container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <BlogListClient posts={posts} />
    </div>
  );
}
