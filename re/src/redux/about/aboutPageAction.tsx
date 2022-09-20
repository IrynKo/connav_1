import axios from "axios";
import { Action} from "./aboutPageReducer";
import {ActionType} from "./aboutPageActionsTypes";
import {Dispatch} from "redux";





export const getContent = () => async (dispatch: Dispatch<Action>) => {
    try {
        dispatch({type: ActionType.GET_CONTENT_REQUEST, payload:true});
        const {data}= await axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/pages/352');
        dispatch({type: ActionType.GET_CONTENT_SUCCESS, payload: data})

    } catch (err) {
       if (axios.isAxiosError(err)){
        dispatch({type: ActionType.GET_CONTENT_FAILURE, 
            payload: err.message})
        }
        
    }
}
