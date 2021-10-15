import { Action } from "./ItemActions";
import { shopItems } from "./shopItems";

const obj = {};
shopItems.forEach(item => {
    const { title, ...rest } = item;
    obj[title] = rest;
});

const initialState = {};

export default function ItemReducer(state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        case Action.UPDATE_ITEMS: {
            const obj = {};
            payload.forEach(item => {
                const { title, ...rest } = item;
                obj[title] = rest;
            });
            return {
                ...state,
                ...obj
            }
        };
        default:
            return state
    }
}