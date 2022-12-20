export function getPriceSale(price: number, tallage: number): number {
    const result = Math.ceil(price / 100 * tallage);
    return price - result;
}