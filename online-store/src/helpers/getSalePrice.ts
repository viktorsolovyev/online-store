export function getPriceSale(price: number, tallage: number): number {
    const result = Math.ceil(price / 100 * tallage);
    return price - result;
}

export function getSaleInCurrency(price: number, tallage: number): number {
    return Math.ceil(price / 100 * tallage);
}