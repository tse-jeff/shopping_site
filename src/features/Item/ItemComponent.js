// This is the React componenet for each individual item in the shop.

import React from 'react';
import { Button } from "antd";
import { useDispatch } from 'react-redux';
import { doAddToCart } from "../Cart/CartActions";

export function ItemComponent(props) {

    const dispatch = useDispatch();
    const title = props.item[0];
    const { image, price, description } = props.item[1];

    return (
        <div className="item-component row">
            <div className="item-img">
                <img src={image} alt={title}></img>
            </div>
            <div className="item-info">
                <div className="item-title">{title}</div>
                <p className="item-price">${price}</p>
                <div className="add-to-cart-btn">
                    <Button type="primary" shape="round" onClick={() =>
                        dispatch(doAddToCart(title))}>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}