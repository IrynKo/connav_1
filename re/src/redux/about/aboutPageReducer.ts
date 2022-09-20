import { ActionType } from "./aboutPageActionsTypes";
import { IAboutContent,  State } from "./aboutPageTypes";




interface ActionPending {
    type: ActionType.GET_CONTENT_REQUEST;
    payload: boolean;
}
interface ActionSuccess {
    type: ActionType.GET_CONTENT_SUCCESS;
    payload: IAboutContent;
}

interface ActionFail {
    type: ActionType.GET_CONTENT_FAILURE;
    payload: string;
}

export type Action = ActionPending | ActionSuccess | ActionFail;

const initialState = {
    content: {
        id: null,
        content: {
            rendered: ''
        },
        acf:{
            title_for_view: '',
            link_for_view: {
                title: '',
                url: ''
            },
            extra_text: '',
        }
    },
    loading: false,
    error:  null,
}
export const contentReducer = (state:State = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.GET_CONTENT_REQUEST: 
            return {loading: true};
        
        case ActionType.GET_CONTENT_SUCCESS: 
            return {

            loading: false, 
            content: {
            id: action.payload.id,
          content: {
            rendered: action.payload.content.rendered,
          }, 
            acf: {
                title_for_view: action.payload.acf.title_for_view,
                link_for_view: {
                    title: action.payload.acf.link_for_view.title,
                    url: action.payload.acf.link_for_view.url,
                },
                extra_text: action.payload.acf.extra_text
            }            
        }
        }
        case ActionType.GET_CONTENT_FAILURE: 
            return {
            loading: false,
            error:  action.payload
        
    }
        default:
      return state; 
    }
}