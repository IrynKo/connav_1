import { IImage } from "../mainPage/mainPageTypes";
import { PostActionType, PostsActionType } from "./postsTypes";

export interface IPost {
  id: number | null,
  acf: IPostAcf,
  content: IRendered
}
interface IRendered {
  rendered: string
}
interface IPostAcf {
  title: string,
    image: IImage
}
interface PostsState {
  loading: boolean,
  posts: IPost[],
  error: string | null
}
interface PostsRequest {
  type: PostsActionType.GET_POSTS_REQUEST
}

interface PostsSuccess {
  type: PostsActionType.GET_POSTS_SUCCESS,
  payload: any//IPost[]
}

interface PostsFailure {
  type: PostsActionType.GET_POSTS_FAILURE,
  payload: string | null
}

export type PostsAction = PostsRequest | PostsSuccess | PostsFailure;

interface IPostAcf {
  title: string,
    image: IImage
}
interface PostsState {
  loading: boolean,
  posts: IPost[],
  error: string | null
}
interface PostRequest {
  type: PostActionType.GET_POST_REQUEST
}

interface PostSuccess {
  type: PostActionType.GET_POST_SUCCESS,
  payload: IPost
}

interface PostFailure {
  type: PostActionType.GET_POST_FAILURE,
  payload: string | null
}

export type PostAction = PostRequest | PostSuccess | PostFailure;


const initialState = {
    posts: [],
    loading: false,
    error:null
    
}
const initialStatePost = {
    id: null,
    acf:{
      title: '',

      image: {
        title: '',
        url:''
      }
    },
    content: {
    rendered: ''
    }
}

export const postsReducer = (state:PostsState = initialState, action:PostsAction) => {
    switch (action.type) {
        case PostsActionType.GET_POSTS_REQUEST: {
            return {loading: true};
        }
        case PostsActionType.GET_POSTS_SUCCESS: {
            return {
            loading: false, 
            posts: action.payload,
            //title: payload.acf.title
        }
        }
        case PostsActionType.GET_POSTS_FAILURE: {
            return {
            loading: false,
            error: action.payload
        }
        }
        default:
      return state; 
    }
}
export const postReducer = (state:IPost=initialStatePost, action:PostAction) => {
    switch (action.type) {
      case PostActionType.GET_POST_REQUEST:
        return { loading: true };
      case PostActionType.GET_POST_SUCCESS:
        return { loading: false, post: action.payload };
      case PostActionType.GET_POST_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };