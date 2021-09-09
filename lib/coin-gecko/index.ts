import Coin from 'lib/types/coin';
import config from 'config';

export const getAllCoinsList = async (): Promise<Coin[] | undefined> => {
  try {
    const list = await fetch(
      `${config.geckoAPIURL}coins/list?include_platform=false`,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    ).then((response) => response.json());
    return list;
  } catch (err) {
    console.log(err);
  }
};
