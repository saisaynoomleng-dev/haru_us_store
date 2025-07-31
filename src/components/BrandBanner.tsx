import { urlFor } from '@/sanity/lib/image';
import { sanityFetch } from '@/sanity/lib/live';
import { BRANDS_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';

const BrandBanner = async () => {
  const { data: brands } = await sanityFetch({ query: BRANDS_QUERY });

  if (!brands) return null;

  return (
    <div className="flex overflow-hidden h-[100px] ">
      {brands.map((brand) => (
        <Image
          key={brand.name}
          src={urlFor(brand.imageURL?.url as string)
            .width(300)
            .height(300)
            .format('webp')
            .url()}
          width={100}
          height={100}
          alt={`${brand.imageALT}'s Logo`}
          className="h-fit"
        />
      ))}
    </div>
  );
};

export default BrandBanner;
