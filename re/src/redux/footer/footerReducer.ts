import { string } from "yup";
import {FooterActionTypes } from "./footerActionsTypes"
import { FooterAction, IFooterState } from "./footerTypes";

const initialState = {
    footerContent: {
        id: null,
        acf: {
            adress: '',
            logo: {
                url: '',
            },
            info_about_connav: ''
        }
    },
    loading: false,
    error: null
}

export const footerReducer = (state:IFooterState = initialState, action:FooterAction) => {
    switch (action.type) {
        case FooterActionTypes.GET_FOOTER_REQUEST: {
            return {loading: true};
        }
        case FooterActionTypes.GET_FOOTER_SUCCESS: {
            return {
            footerContent: { 
            id: action.payload.id,
            acf: {

                adress: action.payload.acf.adress,
                logo: action.payload.acf.logo,
                info_about_connav: action.payload.acf.info_about_connav
            }
            }
        }
        }
        case FooterActionTypes.GET_FOOTER_FAILURE: {
            return {
            loading: false,
            error: action.payload
        }
        }
        default:
      return state; 
    }
}