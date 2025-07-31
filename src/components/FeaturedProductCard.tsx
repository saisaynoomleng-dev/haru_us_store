import React from 'react';
import { PRODUCTS_QUERYResult } from '../../sanity.types';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const FeaturedProductCard = (
  props: NonNullable<PRODUCTS_QUERYResult>[number],
) => {
  const { image, name, slug, price } = props;
  const productImageURL = image.urls
    ? image.urls[0]
    : 'https://placehold.co/400';

  return (
    <Link
      href={`/products/${slug?.current}`}
      className="flex flex-col bg-white gap-y-3 p-2 min-w-[160px] shadow-sm shadow-dark/50 rounded-sm"
    >
      <div>
        {productImageURL && (
          <Image
            src={urlFor(productImageURL)
              .width(500)
              .height(800)
              .format('webp')
              .url()}
            width={400}
            height={400}
            alt={name as string}
            className="rounded-sm mx-auto group-hover:scale-[1.02] transition-transform duration-200"
          />
        )}
      </div>
      <div className="flex flex-col gap-y-2 text-center">
        <h3 className="text-[0.6rem] font-bold ">{name}</h3>
        <p className="text-[0.8rem]">{price?.toLocaleString()} MMK</p>
      </div>
    </Link>
  );
};

export default FeaturedProductCard;
