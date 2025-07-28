import { SiNike } from 'react-icons/si';
import { defineField, defineType } from 'sanity';

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  icon: SiNike,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Brand Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) =>
            rule
              .required()
              .info(`Image alternative text is required for accessiblity.`),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      image: 'mainImage',
    },
    prepare({ name, image }) {
      const nameFormatted =
        name && `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;

      return {
        title: name ? nameFormatted : 'Untitled Brand',
        media: image || SiNike,
      };
    },
  },
});
