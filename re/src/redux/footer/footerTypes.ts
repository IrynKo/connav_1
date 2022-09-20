import { FooterActionTypes } from "./footerActionsTypes";

export interface IFooterState {
    footerContent: IFooterContent;
    loading: boolean;
    error: string | null
}

export interface IFooterContent {
    id: number | null;
    acf: IFooterAcf
}
interface IFooterAcf {
    adress: string;
    logo: IFooterLogo;
    info_about_connav: string
}
interface IFooterLogo {
    url: string;
}
interface ActionPending {
    type: FooterActionTypes.GET_FOOTER_REQUEST;
    payload: boolean;
}
interface ActionSuccess {
    type: FooterActionTypes.GET_FOOTER_SUCCESS;
    payload: IFooterContent;
}

interface ActionFail {
    type: FooterActionTypes.GET_FOOTER_FAILURE;
    payload: string;
}

export type FooterAction = ActionPending | ActionSuccess | ActionFail;