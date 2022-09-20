import styled from "styled-components";

export const MessageFormStyled = styled.section `
h1 {
    font-size: 48px;
}
.contact {
    margin-bottom: 50px;
}
input, textarea {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;
    padding-left: 10px;
    margin-bottom: 16px;
    border: solid 0.5px;
    @media(min-width: 767px) {
        width: 70%;
    }
}
textarea {
    height: 100px;
}
img {
    object-fit: contain;
}
.form-btn {
    width: 70%;
    background-color: #266554;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    
} 
.form-btn:hover {
    color: #266554;
    background-color: #fff;
    border: solid 1px  #266554;
}
.error {
    color: red;
}
`