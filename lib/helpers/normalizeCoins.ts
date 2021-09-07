import Coin from 'lib/types/coin';

export const normalizeCoins = (coinList: any[]): Coin[] => {
  if (coinList.length) {
    const normalizedCoins: Coin[] = [];
    coinList.forEach((coin: any) => {
      normalizedCoins.push({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        current_price: coin.current_price?.toFixed(2),
        image: coin.image,
        price_24h: coin.price_change_percentage_24h?.toFixed(2),
        price_1y: coin.price_change_percentage_1y_in_currency?.toFixed(2),
      });
    });
    return normalizedCoins;
  }
  return [];
};
