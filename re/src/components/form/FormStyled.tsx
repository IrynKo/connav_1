import styled from "styled-components";

export const FormStyled = styled.form `
    display: block;
    justify-content: space-between;
    @media(min-width: 767px) {
        display: flex;
    }
    .form-error {
        color: red;
    }
    .form-email {
        width: 100%;
        margin-bottom: 20px;
        text-transform: uppercase;
        padding: 0 0 0 10px;
        font-size: 12px;
        height: 35px;
        border-radius: 10px;
        border: solid 0.2px #a7a3a3;
        @media(min-width: 767px) {
            width:60%;
            margin-bottom: 0;
        }
    }
    .form-btn {
        width: 100%;
        background-color: #266554;
        color: #fff;
        border: none;
        border-radius: 10px;
        padding: 10px;
        @media(min-width: 767px) {
            width: 30%;
            padding: 0;
        }
    } 
    .form-btn:hover {
        color: #266554;
        background-color: #fff;
        border: solid 1px  #266554;
    }
`
