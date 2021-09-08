export const setCurrency = (currency: string) => {
  global?.localStorage?.setItem('currency', currency);
};

export const getCurrency = (): string | null => {
  const currency: string | null = global?.localStorage?.getItem('currency');
  return currency;
};
