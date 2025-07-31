import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { categoryType } from './categoryType';
import { brandType } from './brandType';
import { colorType } from './colorType';
import { blockContentType } from './blockContentType';
import { cuponType } from './cuponType';
import { incomeType } from './incomeType';
import { faqType } from './faqType';
import { contactType } from './contactType';
import { subscriptionType } from './subscriptionType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    categoryType,
    brandType,
    colorType,
    blockContentType,
    cuponType,
    incomeType,
    faqType,
    contactType,
    subscriptionType,
  ],
};
