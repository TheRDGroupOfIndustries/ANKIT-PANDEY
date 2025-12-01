import { getBlog } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetails(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const blog = await getBlog(slug);

  if (!blog) {
    return <div className="p-10 text-center text-xl">Blog not found.</div>;
  }

  return (
    <section className="py-24 bg-white">
      {/* Back Button */}
      <div className="px-4 mb-10">
        <Link
         href="/#blog"
          className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-full 
               hover:bg-black transition-all text-sm sm:text-base"
        >
          <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
          Back
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-gray-500 text-sm lg:text-base">
            <span>{blog.author}</span>
            <span>• {blog.readTime} min read</span>
            <span>• {blog.publishedAt}</span>
          </div>
        </div>

        {/* Thumbnail */}
        <div className="w-full mb-12">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={1200}
            height={600}
            className="w-full max-h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Excerpt */}
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-12">
          {blog.excerpt}
        </p>

        {/* Blog Content */}
        <div
          className="prose prose-lg lg:prose-xl max-w-4xl mx-auto text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </section>
  );
}
