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
        title: "Cena przed promocją",
        name: "oldPrice",
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