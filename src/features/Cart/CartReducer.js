import { Action } from "./CartActions";

const initialState = {
    // cartItems: {"name" : quantity}
    cartItems: {},
    cartQuantity: 0
}

export default function CartReducer(state = initialState, action) {
    const payload = action.payload;

    switch(action.type) {
        case Action.ADD_TO_CART: {
            let newQuantity = 1;
            let newCartQuantity = state.cartQuantity + 1;
            if(state.cartItems[payload]) {
                newQuantity = state.cartItems[payload] + 1;
            }
            return {
                ...state,
                cartItems: { ...state.cartItems, [payload]: newQuantity },
                cartQuantity: newCartQuantity
            }
        }

        case Action.REMOVE_FROM_CART: {
            let newCartItems = state.cartItems;
            let newCartQuantity = state.cartQuantity - 1;
            // decrease quantity if more than 1
            if(state.cartItems[payload] > 1 ) {
                newCartItems[payload] -= 1;
            }
            // deletes key-value pair in object
            else 
                delete newCartItems[payload];
            return {
                ...state,
                cartItems: {...newCartItems},
                cartQuantity: newCartQuantity
            }
        }

        default: 
            return state
    }
}