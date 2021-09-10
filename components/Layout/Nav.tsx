import { FC } from 'react';
import Link from 'next/link';

const Nav: FC = () => {
  return (
    <nav className="wrapper">
      <div className="py-56 flex justify-center text-40 leading-56 laptop:text-56 font-bold uppercase">
        <Link href="/">
          <a href="/">
            <span>🪙 </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-800">
              CoinShow
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
