import { FC } from 'react';
import Footer from './Footer';
import Nav from './nav';

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
