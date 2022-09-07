import styled from "styled-components";

export const HeroScreenStyled = styled.section `
padding-bottom: 100px;
h1 {
    font-size: 72px;
    font-family: 'Titillium-SemiBold';
    margin-bottom: 15px;
    @media (min-width: 320px) {
        font-size: 38px;
    }
    @media (min-width: 768px) {
        font-size: 44px;
    }
    @media (min-width: 1280px) {
        font-size: 60px;
        margin-bottom: 30px;
    }
    @media (min-width: 1440px) {
        font-size: 72px;
    }

}
p {
    font-size: 32px;
    margin-bottom: 15px;
    @media (min-width: 320px) {
        font-size: 18px;
    }
    @media (min-width: 768px) {
        font-size: 20px;
    }
    @media (min-width: 1280px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
    @media (min-width: 1440px) {
        font-size: 32px;
    }
}
img {
    object-fit: cover;
    object-position: right;
    margin-top: 50px;
}
.hero-btn {
    display: flex;
    flex-direction: column;
    @media (min-width: 1280px) {
        flex-direction: inherit;
    }
}
`

