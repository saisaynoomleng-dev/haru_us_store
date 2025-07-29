import Form from 'next/form';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { GrSend } from 'react-icons/gr';

const Footer = () => {
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

          <Form action="" className="flex justify-between relative">
            <Input
              name="email"
              type="email"
              placeholder="Enter you Email Address"
              className="border-0 border-b-2 border-dark rounded-none shadow-none"
            />
            <Button type="submit" className="bg-transparent absolute right-0">
              <GrSend />
            </Button>
          </Form>
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
