import Coin from 'lib/types/coin';

export const setCurrency = (currency: string) => {
  global?.localStorage?.setItem('currency', currency);
};

export const getCurrency = (): string | null => {
  const currency: string | null = global?.localStorage?.getItem('currency');
  return currency;
};

export const getWatchlist = (): Coin[] => {
  const watchlistString: string | null =
    global?.localStorage?.getItem('watchlist');
  if (watchlistString) {
    return JSON.parse(watchlistString);
  } else {
    global?.localStorage?.setItem('watchlist', JSON.stringify([]));
    return [];
  }
};

export const addToWatchlist = (coin: Coin) => {
  const list: Coin[] | [] = getWatchlist();
  list.push(coin);
  global?.localStorage?.setItem('watchlist', JSON.stringify(list));
};
