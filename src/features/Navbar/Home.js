import React, { useEffect } from "react";
import ItemGridComponent from "../Item/ItemGridComponent";
import { thunkDoGetItems } from "../Item/ItemThunks";
import "../../App.scss";
import { useDispatch } from "react-redux";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(thunkDoGetItems());
    }, [dispatch]);


    return (
        <div>
            <header className="App-header">
                <h1>The Shop</h1>
            </header>
            <hr></hr>
            <ItemGridComponent />
        </div>
    )
}

export default Home;