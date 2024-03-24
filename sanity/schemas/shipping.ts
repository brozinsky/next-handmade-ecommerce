export default {
    name: "shipping",
    title: "Opcje wysyłki",
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
        title: "Cena",
        name: "price",
        type: "number"
      },
    ]
  };