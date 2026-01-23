export default {
  name: "course",
  title: "Course",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Course Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Course Subtitle",
      type: "string",
      description: "Appears below the main title",
    },
    {
      name: "level",
      title: "Course Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "Beginner" },
          { title: "Intermediate", value: "Intermediate" },
          { title: "Advanced", value: "Advanced" },
        ],
      },
    },
    {
      name: "popular",
      title: "Popular Course",
      type: "boolean",
    },

    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "features",
      title: "Course Features (Points)",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "moreFeaturesCount",
      title: "Additional Features Count",
      type: "number",
      description: "Example: +2 more features",
    },
    {
      name: "price",
      title: "Price (in INR)",
      type: "number",
    },
    {
      name: "duration",
      title: "Course Duration",
      type: "string",
      description: "Example: 8 Weeks",
    },
    {
      name: "image",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
    }
  ],
};
