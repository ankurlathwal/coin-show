import { normalizeCoins } from 'lib/helpers/normalizeCoins';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=C24h%2C1y',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  const coins = await response.json();
  res.status(200).json(normalizeCoins(coins));
};
