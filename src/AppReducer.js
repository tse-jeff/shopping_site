import { combineReducers } from "redux";
import CartReducer from "./features/Cart/CartReducer";
import ItemReducer from "./features/Item/ItemReducer";

export default combineReducers({
    Cart: CartReducer,
    Items: ItemReducer
});