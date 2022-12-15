export function getPriceSale(price: number, tallage: number): number {
    const result = price / 100 * tallage;
    return price - result;
}