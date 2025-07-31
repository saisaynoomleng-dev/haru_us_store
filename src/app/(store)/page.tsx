import Bounded from '@/components/Bounded';
import BrandBanner from '@/components/BrandBanner';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';
import FeaturedProductCard from '@/components/FeaturedProductCard';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
import { sanityFetch } from '@/sanity/lib/live';
import { PRODUCTS_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { CgGym } from 'react-icons/cg';
import { FaCarrot, FaPlusCircle } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { GiLipstick } from 'react-icons/gi';
import { LuShirt } from 'react-icons/lu';

const iconList = [
  { name: 'supplements', icon: <FaPlusCircle /> },
  {
    name: 'clothings',
    icon: <LuShirt />,
  },
  { name: 'cosmetics', icon: <GiLipstick /> },
  { name: 'groceries', icon: <FaCarrot /> },
  { name: 'electronics', icon: <FaComputer /> },
  { name: 'gym supplements', icon: <CgGym /> },
];

export default async function Home() {
  const { data: products } = await sanityFetch({ query: PRODUCTS_QUERY });
  const featuredProducts = products.filter((product) => product.isFeatured);

  return (
    <Bounded>
      {/* hero */}
      <Hero />

      <div className="grid grid-cols-3 md:grid-cols-6  gap-x-2 gap-y-4">
        {iconList.map((list) => (
          <Link
            href={`/products?category=${list.name}`}
            key={list.name}
            className="flex flex-col justify-center items-center text-center gap-y-2 border border-primary-200 rounded-xl p-2 h-[120px] group"
          >
            <div className="bg-primary-200 p-2 rounded-full group-hover:scale-[1.1] transition-transform duration-150 text-light ">
              {list.icon}
            </div>
            <p className="text-[0.875rem] capitalize group-hover:text-[0.895rem] transition-all duration-150">
              {list.name}
            </p>
          </Link>
        ))}
      </div>

      {/* brands */}
      <BrandBanner />

      <div>
        <Title as="h2" size="sm">
          Featured Products
        </Title>
        <div className="flex overflow-x-auto gap-x-3 py-3 ">
          {featuredProducts.map((product) => (
            <FeaturedProductCard key={product.slug?.current} {...product} />
          ))}
        </div>
      </div>

      {/* contact */}
      <div className=" px-3 py-10 flex flex-col gap-y-5 font-jost">
        <Title as="h2" size="sm" className="text-center">
          Contact Us
        </Title>

        <p className="text-center text-fs-100">
          We also do wholesale with less price for retailers. Feel free to
          contact us for pricing.
        </p>

        <ContactForm />
      </div>

      {/* faq */}
      <div>
        <Title as="h2" size="sm" className="text-center">
          Have Questions?
        </Title>
        <div className="flex flex-col">
          <FAQAccordion />
        </div>
      </div>
    </Bounded>
  );
}
