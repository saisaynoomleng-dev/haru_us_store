import { type SchemaTypeDefinition } from 'sanity';
import { productType } from './productType';
import { categoryType } from './categoryType';
import { brandType } from './brandType';
import { colorType } from './colorType';
import { blockContentType } from './blockContentType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, brandType, colorType, blockContentType],
};
