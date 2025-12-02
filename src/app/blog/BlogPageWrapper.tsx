import BlogPage from "@/components/BlogPage";
import { getBlogs } from "@/sanity/lib/client";

export default async function BlogPageWrapper() {
  const posts = await getBlogs(); 
  return <BlogPage posts={posts} />;
}
