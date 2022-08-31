import axios from "axios";
import { GET_MAIN_FAILURE, GET_MAIN_REQUEST, GET_MAIN_SUCCESS } from "./mainPageTypes";

export const getMain = () => async (dispatch) => {
    try {
      dispatch({ type: GET_MAIN_REQUEST });
      const { data } = await axios.get("https://i111191.hostde21.fornex.host/wp-json/wp/v2/pages/24");
      dispatch({ type: GET_MAIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_MAIN_FAILURE, payload: error.message });
    }
  };