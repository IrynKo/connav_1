import styled from 'styled-components'

const NextLevelStyled = styled.section `
li {
    margin-bottom: 50px;
}
li:nth-of-type(even) {
    display: flex;
    flex-direction: row-reverse;
}
`
export default NextLevelStyled