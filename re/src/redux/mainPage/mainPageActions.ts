import axios from "axios";
import { Dispatch } from "redux";
import { AppDispatch } from "../../hooks";
import { MainActionTypes } from "./mainPageActionTypes";
import { MainAction } from "./mainPageTypes";

export const getMain = () => async (dispatch: Dispatch<MainAction>) => {
    try {
      dispatch({ type: MainActionTypes.GET_MAIN_REQUEST });
      const { data } = await axios.get("https://i111191.hostde21.fornex.host/wp-json/wp/v2/pages/24");
      dispatch({ type: MainActionTypes.GET_MAIN_SUCCESS, payload: data });
    } catch (error) {
      if(axios.isAxiosError(error)){
      dispatch({ type: MainActionTypes.GET_MAIN_FAILURE, payload: error.message });
      }
    }
  };