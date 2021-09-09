import CurrencySelector from '@components/CurrencySelector';
import TopCoins from '@containers/CoinTables/TopCoins';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coin Show</title>
        <meta
          name="description"
          content="Track your favourite cryptocurrencies"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="wrapper">
          <CurrencySelector />
          <TopCoins />
        </div>
      </main>
    </div>
  );
};

export default Home;
