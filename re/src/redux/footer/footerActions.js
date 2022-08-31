import axios from "axios";
import { GET_FOOTER_FAILURE, GET_FOOTER_REQUEST, GET_FOOTER_SUCCESS } from "./footerTypes";

export const getFooter = () => async (dispatch) => {
    try {
        dispatch({type: GET_FOOTER_REQUEST});
        const {data} = await axios.get('/wp-json/wp/v2/pages/149');
        dispatch({type: GET_FOOTER_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: GET_FOOTER_FAILURE, payload: error.message})
        
    }
}
