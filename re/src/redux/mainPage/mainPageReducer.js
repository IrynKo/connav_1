import { GET_MAIN_FAILURE, GET_MAIN_REQUEST, GET_MAIN_SUCCESS } from "./mainPageTypes";

const initialState = {
    id: 0, 
    acf: {},
    data: {},
    video: {},
    bus_system: {},
    next_level: {},
    signup_form: {},
    contact_form: {},
    loading: false
}
export const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_MAIN_REQUEST:
      return { loading: true };
    case GET_MAIN_SUCCESS:
      return { ...state,  
        id: action.payload.id, 
        acf: action.payload.acf, 
        data: action.payload.content.rendered, 
        video: {
          video: action.payload.acf.video, 
          title: action.payload.acf.video_title
        },
        bus_system: {
          image: action.payload.acf.image_business_system,
          list: action.payload.acf.list_business_system,
          title: action.payload.acf.title_business_system
        },
        next_level: {
          title: action.payload.acf.title_next_level,
          list: action.payload.acf.list_next_level,
        },
        signup_form: {
          title: action.payload.acf.signup_title,
          text: action.payload.acf.signup_text,
        },
        contact_form: {
          title: action.payload.acf.title,
          text: action.payload.acf.contact_text,
          image: action.payload.acf.contact_foto,
          link: action.payload.acf.contact_link,
          icon_facebook : action.payload.acf.icon_facebook,
          icon_linkedIn : action.payload.acf.icon_linkedIn,
        },
        loading: false
       };
    case GET_MAIN_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state; 
    }
}