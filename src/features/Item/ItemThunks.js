import axios from "axios";
import { doUpdateItems } from "../Item/ItemActions";

export const thunkDoGetItems = () => (dispatch, getState) => {
    axios.get('https://localhost:44336/api/Items')
    .then((resp) => {
        console.log(resp);
        if(resp.data) {
            dispatch(doUpdateItems(resp.data));
        }
    })
    .catch((err) => {
        console.error(err);
    })
}

