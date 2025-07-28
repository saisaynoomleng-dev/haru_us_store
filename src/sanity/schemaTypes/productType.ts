import { LuShirt } from 'react-icons/lu';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Products',
  icon: LuShirt,
  groups: [
    { name: 'details', title: 'Details' },
    { name: 'editorials', title: 'Editorials' },
  ],
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 99,
      },
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (rule) =>
        rule
          .required()
          .info(`Brand name is required to generate a page on the website`),
      group: 'details',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) =>
        rule
          .required()
          .info(
            `Category is required to filter and generate a page on the website`,
          ),
      group: 'details',
    }),
    defineField({
      name: 'dateAdded',
      title: 'Date Added',
      type: 'date',
      validation: (rule) => rule.required(),
      group: 'details',
    }),
    defineField({
      name: 'mainImages',
      title: 'Product Photos',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'mainImage',
          title: 'Product Photo',
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
                  .error(
                    'Image alternative text is requried for accessibility.',
                  ),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
      group: 'editorials',
    }),
    defineField({
      name: 'desc',
      title: 'Product Description',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      category: 'category.name',
      image: 'mainImages.0.asset',
      price: 'price',
    },
    prepare({ name, category, image, price }) {
      return {
        title: name,
        subtitle: `${category} | ${price.toLocaleString()} MMK `,
        media: image || LuShirt,
      };
    },
  },
});
