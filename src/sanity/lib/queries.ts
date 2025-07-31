import { defineQuery } from 'next-sanity';

export const PRODUCTS_QUERY = defineQuery(`
    *[_type == 'product'
    && defined(slug.current)]
    |order(dateAdded desc){
        name,
        slug,
        price,
        desc,
        'category': category->{name},
        "brand": brand->{name},
        'image': {
            'urls': mainImages[].asset->url,
            'alts': mainImages[].alt
        },
        isFeatured
    }
`);

export const BRANDS_QUERY = defineQuery(`
    *[_type == 'brand'
    && defined(slug.current)]{
        name,
        'imageURL': mainImage.asset->{url},
        'imageALT': mainImage.alt
        }`);

export const CATEGORIES_QUERY = defineQuery(`
    *[_type == 'category'
    && defined(slug.current)]
    |order(name asc){
        name,
        slug
    }
    `);

export const FAQS_QUERY = defineQuery(`
    *[_type == 'faq'
    && defined(slug.current)]{
        list[]{
            question,
            answer
        }
    }
 `);
