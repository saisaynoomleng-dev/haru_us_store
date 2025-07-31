'use client';

import Form from 'next/form';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { GrSend } from 'react-icons/gr';
import { useActionState } from 'react';
import { handleSubscription } from '@/lib/actions';
import clsx from 'clsx';
import Title from './Title';
import { MdArrowOutward } from 'react-icons/md';

const initialFormState = {
  state: '',
  message: '',
  field: '',
};

const Footer = () => {
  const [state, actionFunction, isPending] = useActionState(
    handleSubscription,
    initialFormState,
  );
  return (
    <footer className="grid md:grid-cols-2 p-3 md:p-5 bg-primary-100/40 font-jost gap-5">
      <div className="text-fs-100 grid grid-cols-[auto_1fr] gap-x-5">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="haru u.s store logo"
              className="max-w-[100px] md:max-w-[150px]"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-y-3">
          <h3 className="font-semibold">Subscribe Now!</h3>
          <p>
            Stay up to date with our latest offers and product launches & be the
            first to get exclusive offers and sale information.
          </p>

          <Form
            action={actionFunction}
            className="flex justify-between relative"
          >
            <Input
              name="email"
              type="email"
              placeholder="Enter you Email Address"
              className="border-0 border-b-2 border-dark rounded-none shadow-none"
            />
            {state.state === 'error' && (
              <p className="text-[0.5rem] text-red-500 italic">
                {state.message}
              </p>
            )}
            <Button
              type="submit"
              className="bg-transparent absolute right-0 hover:bg-transparent hover:text-dark"
            >
              <GrSend className={clsx(isPending && 'animate-spin')} />
            </Button>
          </Form>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="flex flex-col">
          <Title as="h3" className="!text-fs-200">
            Useful Links
          </Title>
          <Link href="/contact-us" className="text-fs-100 hover:underline">
            Contact
          </Link>
          <Link href="/favorite" className="text-fs-100 hover:underline">
            Favorite
          </Link>
          <Link href="/products" className="text-fs-100 hover:underline">
            All Products
          </Link>
          <Link href="/profile" className="text-fs-100 hover:underline">
            Account
          </Link>
        </div>

        <div className="flex flex-col">
          <Title as="h3" className="!text-fs-200">
            Social
          </Title>
          <Link
            href="/contact-us"
            className="text-fs-100 hover:underline flex items-center"
          >
            <span>Facebook</span>
            <MdArrowOutward />
          </Link>
        </div>
      </div>

      <div className="col-span-full place-self-end">
        <p className="text-fs-100 text-dark/50">
          Copyright&copy;{new Date().getFullYear()} Haru U.S Store
        </p>
      </div>
    </footer>
  );
};

export default Footer;
