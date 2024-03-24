export default {
    title: 'Kolor',
    name: 'color',
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
        name: 'colorOptions',
        title: 'Opcje Kolorów',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags',
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'colorGallery',
        title: 'Galeria Kolorów',
        type: 'array',
        of: [{type: 'image'}],
        options: {
          layout: 'grid'
        },
      },
    ],
  }