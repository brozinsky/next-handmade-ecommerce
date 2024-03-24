export default {
    title: 'Opis',
    name: 'content',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Tytuł',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: (Rule: any) => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        title: "Opis",
        name: "description",
        type: "blockContent"
      },
    ],
  }