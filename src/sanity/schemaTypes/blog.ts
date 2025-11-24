export default {
  name: "blog",
  title: "Blog",
  type: "document",

  fields: [
    // --- Blog Title ---
    {
      name: "title",
      title: "Blog Title",
      type: "string",
    },

    // --- SEO Friendly Slug ---
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+/g, "-")
            .replace(/^-+|-+$/g, ""),
      },
    },

    // --- Blog Category Selector ---
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Trends", value: "Trends" },
          { title: "Strategy", value: "Strategy" },
          { title: "SEO", value: "SEO" },
          { title: "Social Media", value: "Social Media" },
          { title: "Email Marketing", value: "Email Marketing" },
          { title: "Paid Ads", value: "Paid Ads" },
          { title: "Other", value: "Other" },

        ],
      },
    },

    // --- Thumbnail / Cover Image ---
    {
      name: "thumbnail",
      title: "Blog Thumbnail",
      type: "image",
      options: { hotspot: true },
    },

    // --- Published Date ---
    {
      name: "publishedAt",
      title: "Published Date",
      type: "date",
    },

    // --- Read Time ---
    {
      name: "readTime",
      title: "Read Time (in minutes)",
      type: "number",
    },

    // --- Blog Excerpt (short paragraph on card) ---
    {
      name: "excerpt",
      title: "Short Excerpt",
      type: "text",
    },

    // --- FULL Detailed Blog Content for the detail-page ---
    {
      name: "content",
      title: "Full Blog Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    },

    // --- Author Information ---
    {
      name: "author",
      title: "Author Name",
      type: "string",
    },
    {
      name: "authorInitial",
      title: "Author Initial (For Circle Icon)",
      type: "string",
    },
    {
      name: "authorImage",
      title: "Author Image",
      type: "image",
      options: { hotspot: true },
    },

    // --- Extra Fields for Details Page (optional) ---
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    },
    {
      name: "ctaUrl",
      title: "CTA URL",
      type: "url",
    },

    // --- SEO Metadata ---
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    },
    {
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
