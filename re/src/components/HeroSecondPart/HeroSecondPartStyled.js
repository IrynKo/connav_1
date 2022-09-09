import styled from "styled-components"

export const HeroSecondPartStyled = styled.section `
img {
    width: 50%;
    @media (min-width: 767px) {
    width: 80%;
    }
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    @media (min-width: 767px) {
        flex-direction: column;
        }
}
li:nth-of-type(2),
li:nth-of-type(3) {
    img {
        width: 40%;
        @media (min-width: 767px) {
            width: 60%;
            }
    }
}
p {
    //width: 80%;
}
h6 {
    width: 80%
}

` 