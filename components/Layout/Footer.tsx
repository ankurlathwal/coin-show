import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="pt-32">
      <div className="text-center font-semibold border-t p-8">
        <Link href="https://www.coingecko.com/en/api">
          <a
            href="https://www.coingecko.com/en/api"
            target="_blank"
            rel="noreferrer"
          >
            Powered by CoinGecko API
          </a>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
