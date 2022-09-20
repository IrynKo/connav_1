import axios from "axios";
import { Dispatch } from "redux";
import { PostAction, PostsAction } from "./postsReducer";
import { PostsActionType, PostActionType } from "./postsTypes";

export const getPosts = () => async (dispatch: Dispatch<PostsAction>) => {
    try {
        dispatch({type: PostsActionType.GET_POSTS_REQUEST});
        const {data} = await axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/courses');
        dispatch({type: PostsActionType.GET_POSTS_SUCCESS, payload: data})

    } catch (error) {
      if(axios.isAxiosError(error))
        dispatch({type: PostsActionType.GET_POSTS_FAILURE, payload: error.message})
        
    }
}
export const getPost = (postID: string) => async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionType.GET_POST_REQUEST, payload: postID });
      const { data } = await axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/courses/' + postID);
      dispatch({ type: PostActionType.GET_POST_SUCCESS, payload: data });
    } catch (error) {
      if (axios.isAxiosError(error))
      dispatch({ type: PostActionType.GET_POST_FAILURE, payload: error.message });
    }
  };
