const CURRENCY_FORMATER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});

export function currencyFormater(number) {
  return CURRENCY_FORMATER.format(number);
}
