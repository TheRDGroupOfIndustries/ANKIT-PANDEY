import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function getCourses() {
  return client.fetch(`
    *[_type == "course"]{
      _id, 
      title,
      subtitle,
      level,
      description,
      popular,
      features,
      moreFeaturesCount,
      price,
      duration,
      buttonText,
      "imageUrl": image.asset->url
    }[0...3]
  `);
}

export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"]{
      _id,
      rating,
      quote,
      badgeText,
      authorName,
      authorRole,
      company,
      "authorImage": authorImage.asset->url
    }
  `);
}

export async function getPortfolios() {
  return client.fetch(`
    *[_type == "portfolio"]{
      _id,
      title,
      client,
      category,
      description,
      keyResults,
      "imageUrl": image.asset->url
    }
  `);
}

export async function getBlogs() {
  return client.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      excerpt,
      author,
      authorInitial,
      "authorImage": authorImage.asset->url,
      "thumbnail": thumbnail.asset->url,
      readTime,
      publishedAt
    }
  `);
}

export async function getBlog(slug: string) {
  return client.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      excerpt,
      content,
      publishedAt,
      readTime,
      author,
      authorInitial,
      "authorImage": authorImage.asset->url,
      "thumbnail": thumbnail.asset->url,
      ctaText,
      ctaUrl,
      seoTitle,
      seoDescription,
      seoKeywords
    }
  `,
    { slug }
  );
}