// shopping displayed on the right side of the page

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doRemoveFromCart, doAddToCart, doCheckout } from "../Cart/CartActions";
import { Total } from "./Total";
import './cart.scss';

function ShoppingCart() {

    const { cartItems } = useSelector((state) => state.Cart);
    const shopItems = useSelector((state) => state.Items);
    const dispatch = useDispatch();

    return (
        <div id="shoppingCart">
            <h3>Your Cart</h3>
            <hr></hr>
            {Object.entries(cartItems).map(item =>
            (
                <div className="cart_item">
                    <img src={shopItems[item[0]].image} />
                    <b className="item_name left_padding">{item[0]}</b>
                    <p className="unit_price left_padding right_padding">
                        ${shopItems[item[0]].price.toFixed(2)}</p>

                    <button id="addToCart" onClick={() =>
                        dispatch(doAddToCart(item[0]))}>+</button>

                    <p className="quantity">{item[1]}</p>

                    <button id="removeFromCart" onClick={() =>
                        dispatch(doRemoveFromCart(item[0]))}>-</button>
                    <p className="item_price left_padding">
                        ${(shopItems[item[0]].price.toFixed(2)
                            * item[1]).toFixed(2)}</p>
                </div>
            ))}
            <h3 id="total">
                <Total cartItems={cartItems} shopItems={shopItems} /></h3>
            
            <button id="checkout" onClick={() => 
                dispatch(doCheckout(cartItems))}>checkout</button>
        </div>
    )
}

export default ShoppingCart;


// checkout button with info into database