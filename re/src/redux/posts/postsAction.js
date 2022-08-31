import axios from "axios";
import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS } from "./postsTypes";

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({type: GET_POSTS_REQUEST});
        const {data} = await axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/courses');
        dispatch({type: GET_POSTS_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: GET_POSTS_FAILURE, payload: error.message})
        
    }
}
export const getPost = (postID) => async (dispatch) => {
    try {
      dispatch({ type: GET_POST_REQUEST, payload: postID });
      const { data } = await axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/courses/' + postID);
      dispatch({ type: GET_POST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_POST_FAILURE, payload: error.message });
    }
  };
