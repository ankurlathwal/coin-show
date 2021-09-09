export default interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price?: Number;
  image?: string;
  price_1h?: Number;
  price_24h?: Number;
  price_30d?: Number;
  price_1y?: Number;
  description?: string;
  hashing_algorithm?: string;
  genesis_date?: string;
  origin_country?: string;
  homepage?: string;
  market_cap_rank?: number;
}
