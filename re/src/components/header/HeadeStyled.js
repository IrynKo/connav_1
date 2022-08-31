import styled from "styled-components"

const HeaderStyled = styled.header `
margin: 20px 0 40px;
@media (min-width: 1280px) {
    margin: 20px 0 60px;
}
.nav {
    display: flex;
    justify-content: space-between;
}
.logo {
    display: block;
    width: 20%;
}
.nav-menu {
    width: 50%;
}
.btn-main {
    width: 15%;
    padding: 6px 12px;
}
.btn-main a {
    color: white;
    font-size: 12px;
    margin-right: 0;
}
a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'Titillium-SemiBold';
    margin-right: 20px;

}
div {
    display: block:
    width: 70%;
}
img {
    width: 40%; 
}
.contact-btn {
    height: 30px;
    padding: 6px 16px;
    background: #266554;
    border-radius: 6px;
    color: white;
    font-size: 12px;
}
`

export default HeaderStyled
