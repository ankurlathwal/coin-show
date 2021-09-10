import Coin from 'lib/types/coin';
import { useRouter } from 'next/dist/client/router';
import { FC, useEffect, useState } from 'react';

interface props {
  coinList: Coin[] | undefined;
}

const Search: FC<props> = ({ coinList }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<Coin[] | []>([]);

  useEffect(() => {
    if (coinList?.length && searchValue) {
      const exactMatches = coinList.filter(
        (c) =>
          c.name.toLowerCase() === searchValue.toLowerCase() ||
          c.symbol.toLowerCase() === searchValue.toLowerCase(),
      );
      const partialMatches = coinList
        .filter(
          (c) =>
            c.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            c.symbol.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .slice(0, 10);
      if (exactMatches?.length) {
        setSearchResults(exactMatches);
      } else if (partialMatches?.length) {
        setSearchResults(partialMatches);
      }
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  return (
    <div className="relative">
      <input
        className="w-full h-40 p-8 border border-gray-400 rounded-sm focus:outline-none focus:border-gray-800"
        type="search"
        placeholder="Search for a coin by name or symbol"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <div className="border-r border-l border-b border-gray-400 absolute bg-white w-full z-10">
        <ul>
          {setSearchResults?.length &&
            searchResults.map((coin: Coin) => (
              <li
                key={coin.id}
                className="p-16 cursor-pointer"
                onClick={() => {
                  router.push('/coin/' + coin.id);
                }}
              >
                <div className="flex gap-16">
                  <div>{coin.name}</div>
                  <div className="bg-gray-400 rounded-full px-8">
                    {coin.symbol}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
