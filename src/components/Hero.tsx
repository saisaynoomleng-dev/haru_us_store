'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';
import { GoDot, GoDotFill } from 'react-icons/go';

const Cosmetic = () => (
  <div className="bg-[#f8d0c7] flex justify-between rounded-md h-">
    <div className="flex flex-col py-3 px-5 justify-center gap-y-5">
      <h1 className="font-jost">
        Feel Fresh,
        <span className="block">Look Radiant</span>
      </h1>
      <Link href="/products?category=cosmetics">
        <Button>Shop Now</Button>
      </Link>
    </div>
    <div>
      <Image
        src="/hero-1.jpg"
        width={100}
        height={100}
        alt=""
        className="min-w-[200px] rounded-md"
      />
    </div>
  </div>
);

const Supplement = () => (
  <div className="bg-[#f8d0c7] flex justify-between rounded-md h-">
    <div className="flex flex-col py-3 px-5 justify-center gap-y-5">
      <h1 className="font-jost">
        Feel Fresh,
        <span className="block">Look Radiant</span>
      </h1>
      <Link href="/products?category=cosmetics">
        <Button>Shop Now</Button>
      </Link>
    </div>
    <div>
      <Image
        src="/hero-1.jpg"
        width={100}
        height={100}
        alt=""
        className="min-w-[200px] rounded-md"
      />
    </div>
  </div>
);

const Clothings = () => (
  <div className="bg-[#f8d0c7] flex justify-between rounded-md h-">
    <div className="flex flex-col py-3 px-5 justify-center gap-y-5">
      <h1 className="font-jost">
        Feel Fresh,
        <span className="block">Look Radiant</span>
      </h1>
      <Link href="/products?category=cosmetics">
        <Button>Shop Now</Button>
      </Link>
    </div>
    <div>
      <Image
        src="/hero-1.jpg"
        width={100}
        height={100}
        alt=""
        className="min-w-[200px] rounded-md"
      />
    </div>
  </div>
);

const Groceries = () => (
  <div className="bg-[#f8d0c7] flex justify-between rounded-md h-">
    <div className="flex flex-col py-3 px-5 justify-center gap-y-5">
      <h1 className="font-jost">
        Feel Fresh,
        <span className="block">Look Radiant</span>
      </h1>
      <Link href="/products?category=cosmetics">
        <Button>Shop Now</Button>
      </Link>
    </div>
    <div>
      <Image
        src="/hero-1.jpg"
        width={100}
        height={100}
        alt=""
        className="min-w-[200px] rounded-md"
      />
    </div>
  </div>
);

const Electronics = () => (
  <div className="bg-[#f8d0c7] flex justify-between rounded-md h-">
    <div className="flex flex-col py-3 px-5 justify-center gap-y-5">
      <h1 className="font-jost">
        Feel Fresh,
        <span className="block">Look Radiant</span>
      </h1>
      <Link href="/products?category=cosmetics">
        <Button>Shop Now</Button>
      </Link>
    </div>
    <div>
      <Image
        src="/hero-1.jpg"
        width={100}
        height={100}
        alt=""
        className="min-w-[200px] rounded-md"
      />
    </div>
  </div>
);

const Gym = () => (
  <div className="bg-[#f8d0c7] flex justify-between rounded-md h-">
    <div className="flex flex-col py-3 px-5 justify-center gap-y-5">
      <h1 className="font-jost">
        Feel Fresh,
        <span className="block">Look Radiant</span>
      </h1>
      <Link href="/products?category=cosmetics">
        <Button>Shop Now</Button>
      </Link>
    </div>
    <div>
      <Image
        src="/hero-1.jpg"
        width={100}
        height={100}
        alt=""
        className="min-w-[200px] rounded-md"
      />
    </div>
  </div>
);

const Hero = () => {
  const [activeHero, setActiveHero] = useState('cosmetics');
  const heroes = [
    { name: 'cosmetics', component: <Cosmetic /> },
    {
      name: 'supplements',
      component: <Supplement />,
    },
    {
      name: 'clothings',
      component: <Clothings />,
    },
    {
      name: 'groceries',
      component: <Groceries />,
    },
    {
      name: 'electronics',
      component: <Electronics />,
    },
    {
      name: 'gym-supplements',
      component: <Gym />,
    },
  ];

  const renderComponent = () => {
    switch (activeHero) {
      case 'cosmetics':
        return <Cosmetic />;
      case 'supplements':
        return <Supplement />;
    }
  };

  return (
    <div>
      <div>{renderComponent()}</div>
      <div className="flex justify-center items-center gap-y-4">
        {heroes.map((hero) => (
          <button
            className=""
            key={hero.name}
            onClick={() => setActiveHero(hero.name)}
          >
            {activeHero === hero.name ? (
              <GoDotFill className="text-primary-200" />
            ) : (
              <GoDot />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
