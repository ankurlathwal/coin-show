import { FC } from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
