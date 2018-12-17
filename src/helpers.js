export const formatPrice = (price /*: number*/) /*: string*/ =>
    typeof price === 'number' &&
    price
        .toFixed(2)
        .toString()
        .replace('.', ',') + `€`;

const badges = ['secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(name => `badge-${name}`);

export const categoryToBadge = (name /*: string */) /*: string*/ => {
    return badges[name.length % (badges.length - 1)];
};
