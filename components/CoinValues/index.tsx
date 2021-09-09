import { Currencies } from 'lib/helpers/currencies';
import { UserPreferenceContext } from 'lib/providers/UserPreferences';
import Coin from 'lib/types/coin';
import { FC, useContext } from 'react';
import cn from 'classnames';

interface props {
  coin: Coin;
}

const CoinValues: FC<props> = ({ coin }) => {
  const { currency } = useContext(UserPreferenceContext);
  const selectedCurrency = Currencies.find((c) => c.value === currency);

  return (
    <div className="px-32 py-56 border border-gray-400 rounded-sm">
      <div className="flex gap-16 font-semibold text-24 leading-32 justify-center">
        <span>{selectedCurrency?.flag}</span>
        <span>
          {selectedCurrency?.symbol}
          {coin.current_price?.toLocaleString()}
        </span>
      </div>
      <div className="flex justify-center text-14 leading-16 gap-40 text-center mt-40">
        <div>
          <div className="text-gray-400 font-semibold mb-16">1h</div>
          <div
            className={cn({
              'text-green-500': Number(coin.price_1h) >= 0,
              'text-red-800': Number(coin.price_1h) < 0,
            })}
          >
            {coin.price_1h}%
          </div>
        </div>
        <div>
          <div className="text-gray-400 font-semibold mb-16">24h</div>
          <div
            className={cn({
              'text-green-500': Number(coin.price_24h) >= 0,
              'text-red-800': Number(coin.price_24h) < 0,
            })}
          >
            {coin.price_24h}%
          </div>
        </div>
      </div>
      <div className="flex justify-center text-14 leading-16 gap-40 text-center mt-40">
        <div>
          <div className="text-gray-400 font-semibold mb-16">30d</div>
          <div
            className={cn({
              'text-green-500': Number(coin.price_30d) >= 0,
              'text-red-800': Number(coin.price_30d) < 0,
            })}
          >
            {coin.price_30d}%
          </div>
        </div>
        <div>
          <div className="text-gray-400 font-semibold mb-16">1y</div>
          <div
            className={cn({
              'text-green-500': Number(coin.price_1y) >= 0,
              'text-red-800': Number(coin.price_1y) < 0,
            })}
          >
            {coin.price_1y}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinValues;
