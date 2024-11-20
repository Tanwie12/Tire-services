import {
  Emergency,
  Footer,
  HeroSection,
  Navbar,
  Services,
  Testimonials,
  WhyChooseUs,
} from '@/containers';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      {/* <main
        className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`}
      >
        {children}
      </main> */}
      
      <WhyChooseUs />
      <Testimonials />
      <Emergency />
      <Footer />
      {/* <Social />
      <Email /> */}
    </>
  );
};

export default Layout;
