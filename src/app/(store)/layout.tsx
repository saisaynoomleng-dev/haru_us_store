import Footer from '@/components/Footer';
import Header from '@/components/Header';

const StoreLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default StoreLayout;
