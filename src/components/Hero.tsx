'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GoDot, GoDotFill } from 'react-icons/go';
import { Button } from './ui/button';
import { MdArrowOutward } from 'react-icons/md';
import Title from './Title';

const heroCategories = [
  {
    name: 'supplements',
    bgColor: '#ffdf80',
    imgURL: '/hero-supplement.jpg',
    linkURL: 'supplements',
    title: 'fuel your body, power your day',
  },
  {
    name: 'clothings',
    bgColor: '#ce021d',
    imgURL: '/hero-clothing.jpg',
    linkURL: 'clothings',
    title: 'find your best fit',
  },
  {
    name: 'cosmetics',
    bgColor: '#f8d0c7',
    imgURL: '/hero-cosmetic.jpg',
    linkURL: 'cosmetics',
    title: 'Feel fresh, Look Radiant',
  },
  {
    name: 'groceries',
    bgColor: '#1e3932',
    imgURL: '/hero-grocery.jpg',
    linkURL: 'groceries',
    title: 'everyday essentials, delivered fresh',
  },
  {
    name: 'electronics',
    bgColor: '#f49da3',
    imgURL: '/hero-electronic.png',
    linkURL: 'electronics',
    title: 'gear up, game on',
  },
  {
    name: 'gym-supplements',
    bgColor: '#ffffff',
    imgURL: '/hero-gym.jpg',
    linkURL: 'gym-supplements',
    title: 'train harder, recover faster',
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === heroCategories.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentComponent = heroCategories[activeIndex];

  return (
    <div className="flex flex-col space-y-3">
      <div
        className="grid grid-cols-2 rounded-lg overflow-hidden h-[370px] transition-colors duration-500"
        style={{
          background: currentComponent.bgColor,
          color:
            currentComponent.bgColor === '#ce021d' ||
            currentComponent.bgColor === '#1e3932'
              ? '#f2f2f2'
              : '#262626',
        }}
      >
        <div className="flex flex-col justify-center p-3 md:p-8">
          <Title size="sm" className="!text-fs-300 capitalize">
            {currentComponent?.title}
          </Title>
          <Link href={`/products?category=${currentComponent?.linkURL}`}>
            <Button variant="link" className="flex">
              <span>Shop Now</span>
              <MdArrowOutward />
            </Button>
          </Link>
        </div>

        <div className="self-center">
          <Image
            src={currentComponent?.imgURL}
            width={800}
            height={800}
            alt={currentComponent.name}
            className="object-cover transition-all duration-100 rounded-full"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-2">
        {heroCategories.map((category, i) => (
          <button key={category.name} onClick={() => setActiveIndex(i)}>
            {activeIndex === i ? (
              <GoDotFill className="text-primary-200" />
            ) : (
              <GoDot className="size-3" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
