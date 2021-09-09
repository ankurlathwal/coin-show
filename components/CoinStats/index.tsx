import Coin from 'lib/types/coin';
import { FC } from 'react';
import Link from 'next/link';

interface props {
  coin: Coin;
}

const CoinStats: FC<props> = ({ coin }) => {
  return (
    <div className="p-16 border border-gray-400 rounded-sm">
      <div className="text-16 leading-24 font-bold text-black mb-24">
        Coin Stats
      </div>
      <div className="mb-24 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-x-16 gap-y-32">
        <div className="text-14 leading-16">
          <div className="font-medium text-gray-400 mb-8">Market Cap Rank</div>
          <div className="font-normal text-gray-600">
            #{coin.market_cap_rank}
          </div>
        </div>
        <div className="text-14 leading-16">
          <div className="font-medium text-gray-400 mb-8">Genesis Date</div>
          <div className="font-normal text-gray-600">{coin.genesis_date}</div>
        </div>
        <div className="text-14 leading-16">
          <div className="font-medium text-gray-400 mb-8">
            Country of Origin
          </div>
          <div className="font-normal text-gray-600">
            {coin.origin_country || 'Not Known'}
          </div>
        </div>
        <div className="text-14 leading-16">
          <div className="font-medium text-gray-400 mb-8">Website</div>
          <div className="font-normal">
            {coin.homepage && (
              <Link href={coin.homepage}>
                <a href={coin.homepage} target="_blank" rel="noreferrer">
                  {coin.homepage}
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="text-14 leading-16">
          <div className="font-medium text-gray-400 mb-8">
            Hashing Algorithm
          </div>
          <div className="font-normal text-gray-600">
            {coin.hashing_algorithm}
          </div>
        </div>
      </div>
      <div className="mb-24">
        <div className="text-14 leading-16">
          <div className="font-medium text-gray-400 mb-8">Summary</div>
          {coin.description && (
            <div
              className="font-normal text-gray-600"
              dangerouslySetInnerHTML={{ __html: coin.description }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinStats;
