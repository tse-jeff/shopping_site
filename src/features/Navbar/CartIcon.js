import React from 'react';
import { useSelector } from 'react-redux';
import "./navbar.scss";
import img from './cart.png';

function CartIcon() {

    const { cartQuantity } = useSelector((state) => state.Cart);
    let hidden = {visibility: (cartQuantity == 0)? "hidden":"visible"};

    return (
        <div id="cartIcon">
            <img src={img} alt="cart" />
            <span class="dot" style={hidden}></span>
            <h3 style={hidden}>{cartQuantity}</h3>
        </div>
    )
}

export default CartIcon;