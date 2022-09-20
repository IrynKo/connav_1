import { MainActionTypes } from "./mainPageActionTypes";

export interface IMainState  {
    mainContent: IMainContent,
    loading: boolean,
    error: string | null
}

export interface IMainContent {
    id: number | null, 
    acf: IMainAcf
}
 interface IMainAcf {
    hero_title: string,
    hero_text: string,
    demo_link: string,
    hero_image: IImage,
    second_block_title:  string,
    second_block_text: string,
    second_block_list: {},
    video: string, 
    video_title: string,
    image_business_system: IImage,
    list_business_system: {},
    title_business_system: string,
    title_next_level: string,
    list_next_level: {},
    signup_title: string,
    signup_text: string,
    title: string,
    contact_text: string,
    contact_foto: IImage,
    contact_link: IImage,
    icon_facebook :  IImage,
    icon_linkedIn :  IImage,
 }

 export interface IImage {
    url: string,
    title: string
 }
 
  interface ActionPending {
    type: MainActionTypes.GET_MAIN_REQUEST;
    //payload: boolean;
}
interface ActionSuccess {
    type: MainActionTypes.GET_MAIN_SUCCESS;
    payload: IMainContent;
}

interface ActionFail {
    type: MainActionTypes.GET_MAIN_FAILURE;
    payload: string;
}

export type MainAction = ActionPending | ActionSuccess | ActionFail;