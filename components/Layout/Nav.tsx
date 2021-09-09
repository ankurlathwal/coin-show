import { FC } from 'react';
import Link from 'next/link';

const Nav: FC = () => {
  return (
    <nav>
      <div className="py-56 flex justify-center text-56 leading-56 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-800">
        <Link href="/">
          <a href="/">CoinShow</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
