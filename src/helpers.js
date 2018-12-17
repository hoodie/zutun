export const formatPrice = (price /*: number*/) /*: string*/ =>
    typeof price === 'number' &&
    price
        .toFixed(2)
        .toString()
        .replace('.', ',') + `€`;
