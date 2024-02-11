export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
        name: 'order',
        title: 'Order',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
        description: 'Set the order of the categories (lower numbers go first)',
      },
  ],
}

//   export default {
//     title: "Category",
//     name: "category",
//     type: "document",
//     fields: [
//       {
//         name: "title",
//         title: "Title",
//         type: "string"
//       },
//       {
//         name: "slug",
//         title: "Slug",
//         type: "slug",
//         validation: (Rule) => Rule.required(),
//         options: {
//           source: "name",
//           maxLength: 96
//         }
//       },
//       {
//         name: "description",
//         title: "Description",
//         type: "text"
//       },
//       {
//         title: "Featured Image",
//         name: "featured_image",
//         type: "image"
//       }
//     ]
//   };
