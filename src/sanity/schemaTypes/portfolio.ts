export default {
  name: "portfolio",
  title: "Portfolio Case Study",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Auto-generated based on the title. Edit manually if needed.",
      options: {
        source: "title",
        maxLength: 50,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+/g, "-") // replace spaces & symbols with hyphens
            .replace(/^-+|-+$/g, ""), // trim hyphens
      },
    },
    {
      name: "client",
      title: "Client / Brand Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "E-commerce", value: "E-commerce" },
          { title: "B2B", value: "B2B" },
          { title: "SaaS", value: "SaaS" },
          { title: "Local Business", value: "Local Business" },
          { title: "Healthcare", value: "Healthcare" },
          { title: "Education", value: "Education" },
        ],
      },
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "keyResults",
      title: "Key Results",
      type: "array",
      of: [{ type: "string" }],
      description: 'Example: "250% Revenue Increase"',
    },
    {
      name: "image",
      title: "Feature Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
