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
button {
    color: white;
}
.error {
    color: red;
}
`