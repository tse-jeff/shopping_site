export const Action = {
    UPDATE_ITEMS: "UPDATE_ITEMS"
};

export const doUpdateItems = (items) => ({type: Action.UPDATE_ITEMS, payload: items});