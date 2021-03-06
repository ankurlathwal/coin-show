import { FC, useContext } from 'react';
import CoinTable from '@components/CoinTable';
import useSWR from 'swr';
import { fetcher } from 'lib/helpers/fetcher';
import Loader from '@components/UI/Loader';
import Error from '@components/UI/Error';
import { UserPreferenceContext } from 'lib/providers/UserPreferences';
import Image from 'next/image';

const TopCoins: FC = () => {
  const { currency } = useContext(UserPreferenceContext);
  const { data: coins, error } = useSWR(
    currency ? ['/api/top-coins', currency] : null,
    (url) => fetcher(url + `?currency=${currency}`),
    {
      refreshInterval: 10000,
    },
  );

  if (error) return <Error />;
  if (!coins) return <Loader />;

  return (
    <div className="w-full py-10">
      <h3 className="font-medium text-primary mb-10">
        <div className="flex gap-8">
          <span>
            <Image src="/coin.svg" alt="Coins" width="40" height="40" />
          </span>
          <span>Top Coins</span>
        </div>
      </h3>
      <small className="text-10 leading-16 text-gray-400">
        (Click on a coin to view more details. Data auto-refreshes every 10
        seconds)
      </small>
      <CoinTable coins={coins} />
    </div>
  );
};

export default TopCoins;
