export function addGoodToCart(id) {
    return {
        type: 'ADD_GOOD_TO_CART',
        payload: {
            id: id
        }
    }
};

export function removeGoodFromCart(id) {
    return {
        type: 'REMOVE_GOOD_FROM_CART',
        payload: {
            id: id,
        },
    };
}