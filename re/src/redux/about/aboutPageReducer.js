import { GET_CONTENT_FAILURE, GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS } from "./aboutPageTypes";


const initialState = {
    id: null,
    content: '',
    view_title: '',
    link: {},
    extra_text: '',
    loading: false
}

export const contentReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CONTENT_REQUEST: {
            return {loading: true};
        }
        case GET_CONTENT_SUCCESS: {
            return {
            loading: false, 
            id: payload.id,
            content: payload.content.rendered,
            view_title: payload.acf.title_for_view,
            link: payload.acf.link_for_view,
            extra_text: payload.acf.extra_text

        }
        }
        case GET_CONTENT_FAILURE: {
            return {
            loading: false,
            error: payload
        }
        }
        default:
      return state; 
    }
}