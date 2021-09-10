import Coin from 'lib/types/coin';
import { FC, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import CoinStats from '@components/CoinStats';
import CoinValues from '@components/CoinValues';
import CurrencySelector from '@components/CurrencySelector';
import AddToWatchListBtn from '@components/UI/AddToWatchListBtn';
import { UserPreferenceContext } from 'lib/providers/UserPreferences';

interface props {
  coin: Coin;
}

const CoinInfo: FC<props> = ({ coin }) => {
  const { watchlist, addCoinToWatchlist } = useContext(UserPreferenceContext);
  const [inWatchlist, setInWatchlist] = useState(
    watchlist?.find((w) => w.id === coin.id) ? true : false,
  );

  return (
    <div>
      <div className="flex gap-x-16 gap-y-32 py-16 flex-wrap laptop:flex-nowrap">
        {coin.image && (
          <Image src={coin.image} alt={coin.name} width="48" height="48" />
        )}
        <h2 className="text-black">{coin.name}</h2>
        <h3 className="text-gray-400 mt-4">({coin.symbol})</h3>
        <div className="self-end laptop:ml-auto">
          {inWatchlist && (
            <div className="text-gray-400">&#9734; In My Watchlist</div>
          )}
          {!inWatchlist && (
            <AddToWatchListBtn
              onClick={() => {
                if (addCoinToWatchlist) addCoinToWatchlist(coin);
                setInWatchlist(true);
              }}
            />
          )}
        </div>
      </div>
      <div className="h-100 py-16 flex">
        <CurrencySelector />
      </div>
      <div className="mt-16 flex flex-col laptop:flex-row-reverse gap-16">
        <div className="w-full laptop:w-1/3">
          <CoinValues coin={coin} />
        </div>
        <div className="w-full laptop:w-2/3">
          <CoinStats coin={coin} />
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
