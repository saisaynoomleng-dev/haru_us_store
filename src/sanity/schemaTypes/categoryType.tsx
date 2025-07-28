import { MdCategory } from 'react-icons/md';
import { defineField } from 'sanity';
import { FaCarrot, FaPlusCircle } from 'react-icons/fa';
import { LuShirt } from 'react-icons/lu';
import { GiLipstick } from 'react-icons/gi';
import { FaComputer } from 'react-icons/fa6';
import { CgGym } from 'react-icons/cg';
import { TbCandy } from 'react-icons/tb';

const iconList = [
  { name: 'supplements', icon: FaPlusCircle },
  {
    name: 'clothings',
    icon: LuShirt,
  },
  { name: 'cosmetics', icon: GiLipstick },
  { name: 'groceries', icon: FaCarrot },
  { name: 'electronics', icon: FaComputer },
  { name: 'gym supplements', icon: CgGym },
  { name: 'snacks', icon: TbCandy },
];

export const categoryType = defineField({
  name: 'category',
  title: 'Categories',
  icon: MdCategory,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
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
      name: 'desc',
      title: 'desc',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }) {
      const iconObj = iconList.find((icon) => icon.name === name.toLowerCase());
      const iconComponent = iconObj ? iconObj.icon : MdCategory;
      const nameFormatted =
        name && `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;

      return {
        title: nameFormatted,
        media: iconComponent,
      };
    },
  },
});
