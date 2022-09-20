import styled from "styled-components";

export const ContactBlockStyled = styled.section `
justify-content: center;
.contact-icon {
    width: 26px;
    height: 26px;
    margin-right: 20px;
}
.contact-foto {
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 10%;
    margin-right: 30px;
    @media(min-width: 767px) {
        margin-bottom: 0px;
    }
}
button {
    width: 100%;
    @media(min-width: 1280px) {
        width:60%;
    }
}

`