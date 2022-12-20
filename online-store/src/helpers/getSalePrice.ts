export function getPriceSale(price: number, tallage: number): number {
    const result = Math.floor(price / 100 * tallage);
    return price - result;
}