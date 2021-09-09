import Coin from 'lib/types/coin';

export const normalizeCoin = (coin: any, currency?: string): Coin => {
  return {
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol,
    current_price:
      coin.current_price?.toFixed(2) ||
      getCurrentPrice(coin.market_data, currency!),
    image: typeof coin.image === 'string' ? coin.image : coin.image?.large,
    price_1h:
      coin.price_change_percentage_1h?.toFixed(2) ||
      getPriceChange1h(coin.market_data, currency!),
    price_24h:
      coin.price_change_percentage_24h?.toFixed(2) ||
      getPriceChange24h(coin.market_data, currency!),
    price_30d:
      coin.price_change_percentage_30d_in_currency?.toFixed(2) ||
      getPriceChange30d(coin.market_data, currency!),
    price_1y:
      coin.price_change_percentage_1y_in_currency?.toFixed(2) ||
      getPriceChange1y(coin.market_data, currency!),
    description: coin.description?.en,
    hashing_algorithm: coin.hashing_algorithm,
    genesis_date: coin.genesis_date,
    origin_country: coin.country_origin,
    homepage: coin.links?.homepage?.[0],
    market_cap_rank: coin.market_cap_rank,
  };
};

const getCurrentPrice = (market_data: any, currency: string): string => {
  if (market_data?.current_price) {
    return market_data.current_price[currency?.toLowerCase()];
  }
  return '-';
};

const getPriceChange24h = (market_data: any, currency: string): string => {
  if (market_data?.price_change_percentage_24h_in_currency) {
    return market_data.price_change_percentage_24h_in_currency[
      currency?.toLowerCase()
    ]?.toFixed(2);
  }
  return '';
};

const getPriceChange30d = (market_data: any, currency: string): string => {
  if (market_data?.price_change_percentage_30d_in_currency) {
    return market_data.price_change_percentage_30d_in_currency[
      currency?.toLowerCase()
    ]?.toFixed(2);
  }
  return '';
};

const getPriceChange1y = (market_data: any, currency: string): string => {
  if (market_data?.price_change_percentage_1y_in_currency) {
    return market_data.price_change_percentage_1y_in_currency[
      currency?.toLowerCase()
    ]?.toFixed(2);
  }
  return '';
};

const getPriceChange1h = (market_data: any, currency: string): string => {
  if (market_data?.price_change_percentage_1h_in_currency) {
    return market_data.price_change_percentage_1h_in_currency[
      currency?.toLowerCase()
    ]?.toFixed(2);
  }
  return '';
};
