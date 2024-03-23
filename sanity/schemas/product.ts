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
        title: "Nazwa",
        name: "name",
        type: "string",
        validation: (Rule: any) => Rule.required()
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        validation: (Rule: any) => Rule.required(),
        options: {
          source: "name",
          maxLength: 96
        }
      },
      {
        title: "Opis",
        name: "description",
        type: "blockContent"
      },
      {
        title: "Wymiary",
        name: "measurements",
        type: "blockContent"
      },
      {
        title: "Kategoria",
        name: "categories",
        type: "array",
        of: [
          {
            type: "reference",
            to: { type: "category" }
          }
        ]
      },
      {
        title: "Główne zdjęcie",
        name: "featured_image",
        type: "image"
      },
      {
        title: "Cena",
        name: "price",
        type: "number"
      },
      {
        title: "Waluta",
        name: "currency",
        type: "string",
        initialValue: "PLN",
        hidden: true
      },
      {
        title: "Cena promocyjna",
        name: "discountPrice",
        type: "number",
        hidden: ({ document }: any) => !document.isOnSale
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
      },
      {
        title: "Wybór koloru",
        name: "isColorSelect",
        type: "boolean"
      },
      {
        title: "Galeria",
        name: "imageGallery",
        type: "array",
        of: [{ type: "image" }],
        options: {
          layout: "grid"
        }
      },
      {
        title: "Podobne produkty",
        name: "similarProducts",
        type: "array",
        of: [{ type: "reference", to: [{ type: "product" }] }],
        options: {
            layout: "tags"
        },
        validation: (Rule: any) => Rule.max(3).unique().error("Możesz wybrać maksymalnie 3 podobne produkty."),
      }
    ]
  };