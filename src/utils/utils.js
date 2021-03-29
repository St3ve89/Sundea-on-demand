import { pricePerItem } from '../constants';

export function calculateSubtotal(optionType, optionCounts) {
  let optionCount = 0;
  console.log({ optionCounts });
  for (const count of optionCounts[optionType].values()) {
    optionCount += count;
  }

  return optionCount * pricePerItem[optionType];
}

/**
 * @function formatCurrency
 * Format number as currency (GBP)
 * @param {number} amount
 * @returns {string} number formatted as currency
 *
 * @example
 *  formatCurrency(0)
 *  // => £0.00
 *
 * @example
 *  formatCurrency(1.5)
 *  // => £1.50
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  }).format(amount);
}
