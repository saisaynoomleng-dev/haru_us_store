import Bounded from '@/components/Bounded';
import BrandBanner from '@/components/BrandBanner';
import Hero from '@/components/Hero';
import Title from '@/components/Title';
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
  return (
    <Bounded>
      {/* hero */}
      <Hero />

      <div className="grid grid-cols-3 md:grid-cols-6  gap-x-2 gap-y-4">
        {iconList.map((list) => (
          <Link
            href={`/products?category=${list.name}`}
            key={list.name}
            className="flex flex-col justify-center items-center text-center gap-y-2 border border-primary-200 rounded-xl p-2 h-[120px]"
          >
            <div className="bg-primary-200 p-2 rounded-full hover:scale-[1.01] text-light ">
              {list.icon}
            </div>
            <p className="text-fs-100 capitalize">{list.name}</p>
          </Link>
        ))}
      </div>

      {/* brands */}
      <BrandBanner />

      <div>
        <Title as="h2" size="sm">
          Featured Products
        </Title>
      </div>

      {/* contact */}
      <div></div>

      {/* faq */}
      <div>
        <Title as="h2" size="sm">
          Have Questions?
        </Title>
      </div>
    </Bounded>
  );
}
