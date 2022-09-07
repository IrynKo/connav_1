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
    button {
        width: 100%;
        color: white;
        @media(min-width: 767px) {
            width:30%;
        }
    } 
`