import { FC, useContext } from 'react';
import useSWR from 'swr';
import Loader from '@components/UI/Loader';
import Error from '@components/UI/Error';
import { fetcher } from 'lib/helpers/fetcher';
import CoinInfo from '@components/CoinInfo';
import { UserPreferenceContext } from 'lib/providers/UserPreferences';

interface props {
  id: string;
}

const CoinDetails: FC<props> = ({ id }) => {
  const { currency } = useContext(UserPreferenceContext);
  const { data: coin, error } = useSWR(
    '/api/coin?id=' + id + '&currency=' + currency,
    fetcher,
    {
      refreshInterval: 10000,
    },
  );

  if (error) return <Error />;
  if (!coin) return <Loader />;

  return <CoinInfo coin={coin} />;
};

export default CoinDetails;
