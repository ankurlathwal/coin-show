import CurrencySelector from '@components/CurrencySelector';
import Search from '@components/UI/Search';
import TopCoins from '@containers/CoinTables/TopCoins';
import WatchList from '@containers/CoinTables/Watchlist';
import { getAllCoinsList } from 'lib/coin-gecko';
import Coin from 'lib/types/coin';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';

interface props {
  coinList: Coin[] | undefined;
}

const Home: FC<props> = ({ coinList }) => {
  return (
    <div>
      <Head>
        <title>Coin Show</title>
        <meta
          name="description"
          content="Track your favourite cryptocurrencies"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <div className="wrapper">
          <div className="flex flex-col laptop:flex-row laptop:justify-between gap-24 laptop:gap-40 h-160 laptop:h-100">
            <div className="laptop:w-3/4">
              <Search coinList={coinList} />
            </div>
            <div className="min-w-100 self-end laptop:self-auto">
              <CurrencySelector />
            </div>
          </div>
          <div className="flex flex-col laptop:flex-row-reverse gap-16 laptop:gap-32">
            <WatchList />
            <TopCoins />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const coinList: Coin[] | undefined = await getAllCoinsList();
  if (coinList) {
    return {
      props: {
        coinList,
      },
    };
  }
  return {
    props: {},
  };
};
