import { Currencies } from 'lib/helpers/currencies';
import { getCurrency, setCurrency } from 'lib/helpers/localStorage';
import { createContext, FC, useState } from 'react';

interface ContextProps {
  currency: string | null;
  setCurrencyPreference: (currency: string | null) => void;
}
const UserPreferenceContext = createContext<Partial<ContextProps>>({});

const UserPreferencesProvider: FC = ({ children }) => {
  const [currency, setCurrencyValue] = useState<string | null>(
    getCurrency() || Currencies[0].value,
  );

  const setCurrencyPreference = (currency: string | null): void => {
    if (currency) {
      setCurrency(currency);
      setCurrencyValue(currency);
    }
  };

  return (
    <UserPreferenceContext.Provider
      value={{
        currency,
        setCurrencyPreference,
      }}
    >
      {children}
    </UserPreferenceContext.Provider>
  );
};

export default UserPreferencesProvider;

export { UserPreferenceContext };
