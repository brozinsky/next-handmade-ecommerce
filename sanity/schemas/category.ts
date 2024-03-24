export default {
  title: "Kategorie",
  name: "category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule: any) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
      description: "Set the order of the categories (lower numbers go first)",
    },
  ],
};
