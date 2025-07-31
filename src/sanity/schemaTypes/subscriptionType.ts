import { MdSubscriptions } from 'react-icons/md';
import { defineField, defineType } from 'sanity';

export const subscriptionType = defineType({
  name: 'subscription',
  title: 'Subscriptions',
  icon: MdSubscriptions,
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
});
