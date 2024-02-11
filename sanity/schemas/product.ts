import { TfiShoppingCartFull } from "react-icons/tfi";
import { defineField, defineType } from "sanity";


// export default defineType({
//   name: "product",
//   title: "Product",
//   description: "A list of products associated with some variants",
//   type: "document",
//   icon: TfiShoppingCartFull,
//   fields: [
//     defineField({
//       name: "name",
//       title: "Name",
//       type: "string",
//       validation: (rule) => rule.required()
//     }),
//     defineField({
//       name: "description",
//       title: "Description",
//       type: "text"
//     }),
//     defineField({
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       validation: (rule) => rule.required()
//     }),
//     defineField({
//       name: "reference",
//       title: "Reference",
//       type: "string",
//       validation: (rule) => rule.required()
//     }),
//     defineField({
//       name: "images",
//       title: "Images",
//       type: "array",
//       of: [
//         {
//           type: "reference",
//           to: {
//             type: "image"
//           }
//         }
//       ],
//       validation: (rule) => rule.required()
//     }),
//   ],
// });


export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
        validation: (Rule) => Rule.required()
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        validation: (Rule) => Rule.required(),
        options: {
          source: "name",
          maxLength: 96
        }
      },
      {
        title: "Description",
        name: "description",
        type: "blockContent"
      },
      {
        name: "categories",
        title: "Categories",
        type: "array",
        of: [
          {
            type: "reference",
            to: { type: "category" }
          }
        ]
      },
      {
        title: "Featured Image",
        name: "featured_image",
        type: "image"
      },
      {
        title: "Price",
        name: "price",
        type: "number"
      },
      {
        title: "Currency",
        name: "currency",
        type: "string",
        initialValue: "USD",
        hidden: true
      },
      {
        title: "Sale Price",
        name: "discountPrice",
        type: "number",
        hidden: ({ document }) => !document.on_sale
      },
      {
        title: "Promocja",
        name: "isOnSale",
        type: "boolean"
      },
      {
        title: "Od ręki",
        name: "isImmediate",
        type: "boolean"
      },
      {
        title: "Na stanie",
        name: "isAvailable",
        type: "boolean",
        initialValue: true,
      },
      {
        title: "Nowość",
        name: "isNew",
        type: "boolean"
      }
    ]
  };