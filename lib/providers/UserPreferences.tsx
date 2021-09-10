import { Currencies } from 'lib/helpers/currencies';
import {
  addToWatchlist,
  getCurrency,
  getWatchlist,
  setCurrency,
} from 'lib/helpers/localStorage';
import Coin from 'lib/types/coin';
import { createContext, FC, useState } from 'react';

interface ContextProps {
  currency: string | null;
  setCurrencyPreference: (currency: string | null) => void;
  watchlist: Coin[];
  addCoinToWatchlist: (coin: Coin) => void;
}
const UserPreferenceContext = createContext<Partial<ContextProps>>({});

const UserPreferencesProvider: FC = ({ children }) => {
  const [currency, setCurrencyValue] = useState<string | null>(
    getCurrency() || Currencies[0].value,
  );

  const setCurrencyPreference = (currency: string | null): void => {
    if (currency) {
      setCurrency(currency);
      setCurrencyValue(currency);
    }
  };

  const [watchlist, setWatchlist] = useState<Coin[]>(getWatchlist());

  const addCoinToWatchlist = (coin: Coin): void => {
    if (coin && !watchlist.find((w) => w.id === coin.id)) {
      addToWatchlist(coin);
      const updatedWatchList: Coin[] = watchlist;
      updatedWatchList.push(coin);
      setWatchlist(updatedWatchList);
    }
  };

  return (
    <UserPreferenceContext.Provider
      value={{
        currency,
        setCurrencyPreference,
        watchlist,
        addCoinToWatchlist,
      }}
    >
      {children}
    </UserPreferenceContext.Provider>
  );
};

export default UserPreferencesProvider;

export { UserPreferenceContext };
