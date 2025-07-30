'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoCart, IoHeart, IoPerson } from 'react-icons/io5';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Form from 'next/form';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const [searchText, setSearchText] = useState(query || '');
  const router = useRouter();

  const resetQuery = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('query');
    router.push(`/`);
    setSearchText('');
  };

  return (
    <header className="grid grid-cols-2 grid-rows-[1fr_auto] md:grid-cols-3 md:grid-rows-1 px-2 py-3 md:px-4 md:py-5 lg:px-8 lg:py-6 lg:max-w-[1400px] items-center justify-between">
      <div className="col-start-1 col-end-2">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="haru u.s store logo"
            className="max-w-[50px] md:max-w-[80px]"
          />
        </Link>
      </div>

      <nav
        role="navigation"
        id="main-nav"
        className="flex gap-x-4 items-center justify-end col-start-2 col-end-3 md:col-start-3 md:col-end-4"
      >
        <Link href="/favorite" className="text-primary-200">
          <IoHeart className="size-5 md:size-6 lg:size-7" />
        </Link>
        <Link href="/cart" className="text-primary-200">
          <IoCart className="size-5 md:size-6 lg:size-7" />
        </Link>
        <Link href="/sign-up" className="text-primary-200">
          <IoPerson className="size-5 md:size-6 lg:size-7" />
        </Link>
      </nav>

      <Form
        action="/search"
        className="col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 flex justify-between relative items-center"
      >
        <Input
          className=""
          placeholder="Search Anything..."
          name="query"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {searchText || query ? (
          <Button
            type="reset"
            className="absolute right-[2.5rem] bg-transparent"
            onClick={resetQuery}
          >
            <IoIosCloseCircleOutline className="text-primary-200" />
          </Button>
        ) : null}

        <Button type="submit" className="absolute right-[1rem] bg-transparent">
          <HiOutlineMagnifyingGlass />
        </Button>
      </Form>
    </header>
  );
};

export default Header;
