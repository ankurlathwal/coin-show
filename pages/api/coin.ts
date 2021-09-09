import type { NextApiRequest, NextApiResponse } from 'next';
import config from 'config';
import { normalizeCoin } from 'lib/helpers/normalizeCoin';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;
    const currency = req.query.currency;
    const coin = await fetch(`${config.geckoAPIURL}coins/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => response.json());
    const normalizedCoin = normalizeCoin(coin, currency.toString());
    res.status(200).json(normalizedCoin);
  } catch (err) {
    console.log(err);
  }
};
