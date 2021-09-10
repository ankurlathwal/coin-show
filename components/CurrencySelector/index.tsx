import { FC, useContext, useEffect, useState } from 'react';
import { Currencies, Currency } from 'lib/helpers/currencies';
import { UserPreferenceContext } from 'lib/providers/UserPreferences';
import Image from 'next/image';

const CurrencySelector: FC = () => {
  const { currency, setCurrencyPreference } = useContext(UserPreferenceContext);
  const [selectedCurrency, setSelectedCurrency] = useState(Currencies[0]);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (currency && selectedCurrency.value !== currency) {
      const curr: Currency | undefined = Currencies.find(
        (c) => c.value === currency,
      );
      if (curr) {
        setSelectedCurrency(curr);
      }
    }
  }, [currency]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const updateCurrency = (index: number) => {
    setSelectedCurrency(Currencies[index]);
    if (setCurrencyPreference) {
      setCurrencyPreference(Currencies[index].value);
    }
    toggleDropdown();
  };

  return (
    <div className="relative">
      <div className="mb-8 font-medium">Currency</div>
      <div className="w-100 text-14 leading-16 p-8 border rounded-md absolute bg-white">
        <div
          className="flex gap-8 py-8 cursor-pointer border-gray-400"
          onClick={toggleDropdown}
        >
          <div>{selectedCurrency.flag}</div>
          <div>{selectedCurrency.value}</div>
          {dropdown && (
            <Image
              src="/chevron-up.png"
              alt="Currency"
              width="16"
              height="16"
            />
          )}
          {!dropdown && (
            <Image
              src="/chevron-down.png"
              alt="Currency"
              width="16"
              height="16"
            />
          )}
        </div>
        {dropdown &&
          Currencies.map((c, index) => (
            <div key={c.value}>
              {c.value !== selectedCurrency.value && (
                <div
                  className="flex gap-8 py-8 cursor-pointer"
                  onClick={() => {
                    updateCurrency(index);
                  }}
                >
                  <div>{c.flag}</div>
                  <div>{c.value}</div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
