export const calculatediscount = (price: number, discountPercentage: number): number => {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
}