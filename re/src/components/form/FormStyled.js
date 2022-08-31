import styled from "styled-components";

export const FormStyled = styled.form `
    display: flex;
    justify-content: space-between;
    .form-error {
        color: red;
    }
    .form-email {
        width: 60%;
        text-transform: uppercase;
        padding: 0 0 0 10px;
        font-size: 12px;
        height: 35px;
        border-radius: 10px;
        border: solid 0.2px #a7a3a3;
    }
    button {
        width: 30%;
        color: white;
    } 
`