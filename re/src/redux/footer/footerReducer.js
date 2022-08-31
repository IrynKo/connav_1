import { GET_FOOTER_FAILURE, GET_FOOTER_REQUEST, GET_FOOTER_SUCCESS } from "./footerTypes"

const initialState = {
    id: null,
    adress: '',
    logo: {},
    info: ''
}

export const footerReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_FOOTER_REQUEST: {
            return {loading: true};
        }
        case GET_FOOTER_SUCCESS: {
            return {
            loading: false, 
            id: payload.id,
            adress: payload.acf.adress,
            logo: payload.acf.logo,
            info: payload.acf.info_about_connav
        }
        }
        case GET_FOOTER_FAILURE: {
            return {
            loading: false,
            error: payload
        }
        }
        default:
      return state; 
    }
}