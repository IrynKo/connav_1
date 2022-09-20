import { MainActionTypes } from "./mainPageActionTypes";
import { IMainState, MainAction } from "./mainPageTypes";

const initialState = {
    mainContent :{ 
    id: 0, 
    acf: {
      hero_title: '',
      hero_text: '',
      demo_link: '',
      hero_image: {
        url: '',
        title: ''
      },
      second_block_title:  '',
      second_block_text: '',
      second_block_list: {},
      video: '', 
      video_title: '',
      image_business_system: {
        url: '',
        title: ''
      },
      list_business_system: {},
      title_business_system: '',
      title_next_level: '',
      list_next_level: {},
      signup_title: '',
      signup_text: '',
      title: '',
      contact_text: '',
      contact_foto: {
        url: '',
        title: ''
      },
      contact_link: {
        url: '',
        title: ''
      },
      icon_facebook : {
        url: '',
        title: ''
      },
      icon_linkedIn : {
        url: '',
        title: ''
      },
    }
    },
    loading: false,
    error: null
    
}
export const mainPageReducer = (state:IMainState = initialState, action:MainAction) => {
    switch (action.type) {
    case MainActionTypes.GET_MAIN_REQUEST:
      return { loading: true };
    case MainActionTypes.GET_MAIN_SUCCESS:
      return { ...state, 
        mainContent: { 
        id: action.payload.id, 
        //data: action.payload.content.rendered, 
        acf: {
          hero_title: action.payload.acf.hero_title,
          hero_text: action.payload.acf. hero_text,
          demo_link: action.payload.acf.demo_link,
          hero_image:{
           url : action.payload.acf.hero_image.url,
           title : action.payload.acf.hero_image.title,
          },
          second_block_title:  action.payload.acf.second_block_title,
          second_block_text: action.payload.acf.second_block_text,
          second_block_list: action.payload.acf.second_block_list,
          video: action.payload.acf.video, 
          video_title: action.payload.acf.video_title,
          image_business_system: action.payload.acf.image_business_system,
          list_business_system: action.payload.acf.list_business_system,
          title_business_system: action.payload.acf.title_business_system,
          title_next_level: action.payload.acf.title_next_level,
          list_next_level: action.payload.acf.list_next_level,
          signup_title: action.payload.acf.signup_title,
          signup_text: action.payload.acf.signup_text,
          title: action.payload.acf.title,
          contact_text: action.payload.acf.contact_text,
          contact_foto: {
            url : action.payload.acf.contact_foto.url,
            title : action.payload.acf.contact_foto.title
          }, 
          contact_link: {
            url : action.payload.acf.contact_link.url,
            title : action.payload.acf.contact_link.title},
          icon_facebook : {
            url : action.payload.acf.icon_facebook.url,
            title : action.payload.acf.icon_facebook.title},
          icon_linkedIn : {
            url : action.payload.acf.icon_linkedIn.url,
            title : action.payload.acf.icon_linkedIn.title},
              }
      },
        loading: false
       };
    case MainActionTypes.GET_MAIN_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state; 
    }
}