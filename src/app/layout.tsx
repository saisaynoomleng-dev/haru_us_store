import type { Metadata } from 'next';
import './globals.css';
import { Jost, Objectivity } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Haru US Store',
    default: 'Haru US Store',
  },
  description:
    'Haru US Store is an online e-commerce store that sells clothings, supplements, cosmetic, and groceries from United State to Myanmar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Objectivity.variable} ${Jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
