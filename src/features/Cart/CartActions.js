export const Action = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CHECKOUT: "CHECKOUT"
}

export const doAddToCart = item => 
    ({ type: Action.ADD_TO_CART, payload: item });
export const doRemoveFromCart = item => 
    ({ type: Action.REMOVE_FROM_CART, payload: item });
export const doCheckout = items =>
    ({ type: Action.CHECKOUT, payload: items})