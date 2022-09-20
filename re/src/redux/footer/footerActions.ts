import axios from "axios";
import { Dispatch } from "redux";
import { FooterActionTypes } from "./footerActionsTypes";
import { FooterAction } from "./footerTypes";

export const getFooter = () => async (dispatch:Dispatch<FooterAction>) => {
    try {
        dispatch({type: FooterActionTypes.GET_FOOTER_REQUEST, payload:true});
        const {data} = await axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/pages/149');
        dispatch({type: FooterActionTypes.GET_FOOTER_SUCCESS, payload: data})

    } catch (error) {
        if (axios.isAxiosError(error)){
            dispatch({type: FooterActionTypes.GET_FOOTER_FAILURE, payload: error.message})
        }
        
    }
}
