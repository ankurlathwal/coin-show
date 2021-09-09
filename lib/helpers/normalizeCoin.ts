import Coin from 'lib/types/coin';

export const normalizeCoin = (coin: any): Coin => {
  return {
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    current_price: coin.current_price?.toFixed(2),
    image: coin.image,
    price_24h: coin.price_change_percentage_24h?.toFixed(2),
    price_1y: coin.price_change_percentage_1y_in_currency?.toFixed(2),
    description: coin.description?.en,
    hashing_algorithm: coin.hashing_algorithm,
    genesis_date: coin.genesis_date,
    origin_country: coin.country_origin,
    homepage: coin.links?.homepage?.[0],
    market_cap_rank: coin.market_cap_rank,
  };
};
