export function useCurrency() {
  function eurCurrencyFormat(amount: number) {
    return new Intl.NumberFormat(`en-US`, {
      currency: `EUR`,
      style: 'currency'
    }).format(amount)
  }

  return {
    eurCurrencyFormat
  }
}
