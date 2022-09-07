import styled from "styled-components";

export const AboutViewStyled = styled.section `
.about {
    margin-bottom: 40px;
}
.about-title, 
.about-text {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 60px;
    width: 100%;
    @media(min-width: 767px) {
        width: 80%;
    }
}
.about-text {
    margin-top: 20px;
}
button {
    width: 60%;
    height: 50px;
    margin: 0 auto;
    margin-bottom: 60px;
    @media(min-width: 767px) {
        width: 20%;
    }

}
img {
    margin: 0 auto;
    margin-bottom: 100px;
}
.about-description {
    padding: 20px;
}
`