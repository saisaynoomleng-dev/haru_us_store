import { IoIosColorPalette } from 'react-icons/io';
import { defineField, defineType } from 'sanity';

export const colorType = defineType({
  name: 'color',
  title: 'Color',
  icon: IoIosColorPalette,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Color Name',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title,
        media: IoIosColorPalette,
      };
    },
  },
});
