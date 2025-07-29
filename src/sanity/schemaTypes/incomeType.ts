import { CiDollar } from 'react-icons/ci';
import { defineField, defineType } from 'sanity';

export const incomeType = defineType({
  name: 'income',
  title: 'Income',
  icon: CiDollar,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
});
