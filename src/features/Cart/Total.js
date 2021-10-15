import React from 'react';

export function Total(props) {
    // for some reason I tried using the hooks here 
    // but it said it wasn't a react componenet
    // const shopItems = useSelector((state) => state.Items);
    // const cartItems = useSelector((state) => state.Cart);
    let total = 0;

    Object.entries(props.cartItems).map(item =>
        total += props.shopItems[item[0]].price * item[1]);

    return (
        <p>
            Total: ${total.toFixed(2)}
        </p>
    )
}