// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     // cartitems = {title: [price, quantity]}
//     cartItems: {},
//     total: 0,
// }

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             // check if item is already in the cart
//             // if it is, then only the quantity increases
//             // else the item is added to the cart
//             let title = action.payload.title;
//             let price = action.payload.price;
//             if (state.cartItems[title])
//                 state.cartItems[title][1] += 1;
//             else
//                 state.cartItems[title] = [price, 1];

//             state.total += price;
//         },
//         removeFromCart: (state, action) => {
//             let title = action.payload.title;
//             let price = action.payload.price;
//             if (state.cartItems[title][1] >= 1)
//                 state.cartItems[title][1] -= 1;
//             else
//                 delete state.cartItems[title];

//             state.total -= price;
//         },
//     },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;