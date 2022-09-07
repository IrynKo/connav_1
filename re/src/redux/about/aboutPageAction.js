import axios from "axios";
import { GET_CONTENT_FAILURE, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS } from "./aboutPageTypes";


export const getContent = () => async (dispatch) => {
    try {
        dispatch({type: GET_CONTENT_REQUEST});
        const {data} = await axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/pages/352');
        dispatch({type: GET_CONTENT_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: GET_CONTENT_FAILURE, payload: error.message})
        
    }
}