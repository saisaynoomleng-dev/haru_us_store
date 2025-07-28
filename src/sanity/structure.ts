import { IoIosColorPalette } from 'react-icons/io';
import { LuShirt } from 'react-icons/lu';
import { MdCategory } from 'react-icons/md';
import { SiNike } from 'react-icons/si';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('product').title('Products').icon(LuShirt),
      S.documentTypeListItem('category').title('Categories').icon(MdCategory),
      S.documentTypeListItem('brand').title('Brands').icon(SiNike),
      S.documentTypeListItem('color').title('Colors').icon(IoIosColorPalette),
    ]);
