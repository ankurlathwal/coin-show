import BreadCrumbs from '@components/UI/Breadcrumbs';
import CoinDetails from '@containers/CoinDetails';
import { getAllCoinsList } from 'lib/coin-gecko';
import Coin from 'lib/types/coin';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

const CoinDetailsPage = ({ id }: { id: string }) => {
  return (
    <div>
      <Head>
        <title>{id} | Coin Details | Coin Show</title>
        <meta
          name="description"
          content="Track your favourite cryptocurrencies"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <div className="wrapper">
          <BreadCrumbs crumbs={['Home', 'Coin', id]} />
          <CoinDetails id={id} />
        </div>
      </main>
    </div>
  );
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
