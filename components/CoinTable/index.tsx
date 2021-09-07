import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import Coin from 'lib/types/coin';

interface props {
  coins: Coin[];
}

const CoinTable: FC<props> = ({ coins }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-hidden sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full tablet:px-6 laptop:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 tablet:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-left text-12 leading-16 font-medium text-gray-500 uppercase">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 tablet:px-6 tracking-wider"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 tablet:px-6 tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 tablet:px-6 tracking-wider"
                  >
                    24h Change
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 tablet:px-6 tracking-wider"
                  >
                    1Y Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coins.map((coin) => (
                  <tr key={coin.id}>
                    <td className="px-6 py-10 whitespace-nowrap ">
                      <div className="flex gap-6 tablet:gap-12">
                        <div>
                          {coin.image && (
                            <Image
                              className="rounded-full"
                              height="20"
                              width="20"
                              src={coin.image}
                              alt={coin.name}
                            />
                          )}
                        </div>
                        <div className="text-10 leading-24 tablet:text-16 tablet:leading-24">
                          {coin.name}
                        </div>
                        <div>
                          <span className="px-4 inline-flex text-8 leading-5 tablet:leading-6 font-semibold rounded-full bg-gray-400 text-white">
                            {coin.symbol}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-10 text-10 leading-12 tablet:text-12 tablet:leading-16 whitespace-nowrap">
                      {`$${coin.current_price}`}
                    </td>
                    <td
                      className={cn('px-6 py-10 whitespace-nowrap text-sm', {
                        'text-green-500': Number(coin.price_24h) >= 0,
                        'text-red-800': Number(coin.price_24h) < 0,
                      })}
                    >
                      {coin.price_24h ? `${coin.price_24h}%` : '-'}
                    </td>
                    <td
                      className={cn(
                        'px-6 py-10 whitespace-nowrap text-10 leading-12 tablet:text-12 tablet:leading-16',
                        {
                          'text-green-500': Number(coin.price_1y) >= 0,
                          'text-red-800': Number(coin.price_1y) < 0,
                        },
                      )}
                    >
                      {coin.price_1y ? `${coin.price_1y}%` : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
