import { FC, useState, useEffect } from 'react';
import CoinTable from '@components/CoinTable';

const TopCoins: FC = () => {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    const data = await fetch('/api/top-coins')
      .then((response) => response.json())
      .then((data) => data);
    setCoins(data);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="py-10">
      <h3 className="font-medium text-primary mb-20">Top Coins</h3>
      <CoinTable coins={coins} />
    </div>
  );
};

export default TopCoins;
