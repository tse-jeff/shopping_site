import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CartIcon from './CartIcon';
import "./navbar.scss"


function Navbar(props) {
    let hidden = {visibility: (props.location.pathname === "/") 
        ? "hidden":"visible"}
    
    return (
        <div id="navbar">
            <Link id="homeLink" to="/" style={hidden}>
                Return to The Shop
            </Link>
            <Link id="cartLink" to="/cart">
                <CartIcon />
            </Link>
        </div>
    )
}

export default withRouter(Navbar);