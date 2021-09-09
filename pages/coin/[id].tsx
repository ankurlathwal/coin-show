import CoinDetails from '@containers/CoinDetails';
import { getAllCoinsList } from 'lib/coin-gecko';
import Coin from 'lib/types/coin';
import { GetStaticPaths, GetStaticProps } from 'next';

const CoinDetailsPage = ({ id }: { id: string }) => {
  return <CoinDetails id={id} />;
};

export default CoinDetailsPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: params?.id || '',
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const list: Coin[] | undefined = await getAllCoinsList();
  if (list) {
    const ids: string[] = list.map((coin) => coin.id);
    const paths = ids.map((id: string) => ({
      params: { id },
    }));
    return { paths, fallback: false };
  }
  return { paths: [], fallback: false };
};
