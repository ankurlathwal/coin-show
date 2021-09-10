import { normalizeCoin } from 'lib/helpers/normalizeCoin';
import type { NextApiRequest, NextApiResponse } from 'next';
import config from 'config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const currency = req.query.currency;
    const ids = req.query.ids;
    if (ids) {
      const coins = await fetch(
        `${config.geckoAPIURL}coins/markets?vs_currency=${currency}&ids=${ids}&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=C24h%2C1y`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      ).then((response) => response.json());
      const normalizedCoins = coins?.map((coin) => normalizeCoin(coin));
      res.status(200).json(normalizedCoins);
    } else {
      res.status(200).json([]);
    }
  } catch (err) {
    console.log(err);
  }
};
