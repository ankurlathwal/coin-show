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
        <h1 className="text-primary">Welcome to Coin Show</h1>
      </main>
    </div>
  );
};

export default Home;
