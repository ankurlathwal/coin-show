export default interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: Number;
  image?: string;
  price_24h?: Number;
  price_1y?: Number;
}
