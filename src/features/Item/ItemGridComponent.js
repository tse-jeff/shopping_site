// The parent of ItemComponent to loop through every item for the shop.

import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { ItemComponent } from "./ItemComponent";
import './items.scss';



function ItemGridComponent() {

    const items = useSelector((state) => state.Items);
    const [seen, togglePop] = useState(false);

    return (
        // <div id="itemGrid">
        //     {Object.entries(items).map(i => <ItemComponent item={i} />)}
        // </div>
        <div id="itemGrid">
            {Object.entries(items).map(i => <ItemComponent item={i} 
            onClick={() => togglePop(!seen)}/>)}
        </div>
    )
}

export default ItemGridComponent;
