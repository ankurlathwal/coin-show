import Coin from 'lib/types/coin';
import { FC } from 'react';

interface props {
  coin: Coin;
}

const CoinInfo: FC<props> = ({ coin }) => {
  return (
    <div>
      <div>ID: {coin.id}</div>
      <div>Name: {coin.name}</div>
      <div>Market Cap Rank: {coin.market_cap_rank}</div>
      <div>Website: {coin.homepage}</div>
      <div>Description: {coin.description}</div>
    </div>
  );
};

export default CoinInfo;
