export interface Currency {
  value: string;
  symbol: string;
  flag: string;
}

export const Currencies: Currency[] = [
  {
    value: 'USD',
    symbol: '$',
    flag: '🇺🇸',
  },
  {
    value: 'AUD',
    symbol: '$',
    flag: '🇦🇺',
  },
  {
    value: 'INR',
    symbol: '₹',
    flag: '🇮🇳',
  },
  {
    value: 'EUR',
    symbol: '€',
    flag: '🇪🇺',
  },
];
