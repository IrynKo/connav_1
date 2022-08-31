import styled from "styled-components"

export const HeroSecondPartStyled = styled.section `
img {
    width: 80%;
    //@media (min-width: 1280px) {
    //width: 10%;
    //}
}
ul {
    display: flex;
    justify-content: space-between;
}
li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
}
li:nth-of-type(2) {
    img {
        width: 60%;
    }
}
p {
    //width: 80%;
}
h6 {
    width: 80%
}

` 