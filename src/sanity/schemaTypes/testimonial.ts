export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",

  fields: [
    {
      name: "rating",
      title: "Star Rating (1–5)",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      description: "The main testimonial text inside quotes",
    },
    {
      name: "badgeText",
      title: "Achievement Badge Text",
      type: "string",
      description: 'Example: "300% Lead Increase"',
    },
    {
      name: "authorName",
      title: "Author Name",
      type: "string",
    },
    {
      name: "authorRole",
      title: "Author Role",
      type: "string",
      description: "Example: Marketing Director",
    },
    {
      name: "company",
      title: "Company Name",
      type: "string",
      description: "Example: TechStart Inc.",
    },
    {
      name: "authorImage",
      title: "Author Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
