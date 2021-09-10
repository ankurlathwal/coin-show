import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Nav: FC = () => {
  return (
    <nav className="wrapper">
      <div className="py-56 flex justify-center text-40 leading-56 laptop:text-56 font-bold uppercase">
        <Link href="/">
          <a href="/">
            <div className="flex gap-16">
              <span>
                <Image src="/logo.svg" alt="CoinShow" width="56" height="56" />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-800">
                CoinShow
              </span>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
