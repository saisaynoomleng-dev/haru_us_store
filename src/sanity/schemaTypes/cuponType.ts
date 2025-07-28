import { IoTicketOutline } from 'react-icons/io5';
import { defineField, defineType } from 'sanity';

export const cuponType = defineType({
  name: 'cupon',
  title: 'Cupons',
  icon: IoTicketOutline,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Cupon Name',
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
    defineField({
      name: 'code',
      title: 'Cupon Code',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
  ],
});
