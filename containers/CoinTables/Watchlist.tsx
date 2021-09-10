import { FC, useContext } from 'react';
import CoinTable from '@components/CoinTable';
import useSWR from 'swr';
import { fetcher } from 'lib/helpers/fetcher';
import Loader from '@components/UI/Loader';
import Error from '@components/UI/Error';
import { UserPreferenceContext } from 'lib/providers/UserPreferences';
import Image from 'next/image';

const WatchList: FC = () => {
  const { currency, watchlist } = useContext(UserPreferenceContext);
  const ids: string | undefined = watchlist?.map((c) => c.id)?.join('%2C');
  const { data: watchlistCoins, error } = useSWR(
    currency ? ['/api/watchlist-coins', currency] : null,
    (url) => fetcher(url + `?currency=${currency}&ids=` + ids),
    {
      refreshInterval: 10000,
    },
  );

  if (error) return <Error />;
  if (!watchlistCoins) return <Loader />;

  return (
    <div className="w-full py-10">
      <h3 className="font-medium text-primary mb-10">
        <div className="flex gap-8">
          <span>
            <Image src="/star.svg" alt="Coins" width="40" height="40" />
          </span>
          <span>My Watchlist</span>
        </div>
      </h3>
      <small className="text-10 leading-16 text-gray-400">
        (Click on a coin to view more details. Data auto-refreshes every 10
        seconds)
      </small>
      {watchlistCoins.length > 0 && <CoinTable coins={watchlistCoins} />}
      {watchlistCoins.length === 0 && (
        <div className="py-16 text-gray-400">
          Start adding to your watchlist by clicking Add to watchlist button on
          coin details page
        </div>
      )}
    </div>
  );
};

export default WatchList;
