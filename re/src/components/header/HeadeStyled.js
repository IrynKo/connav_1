import styled from "styled-components"

const HeaderStyled = styled.header `

margin: 40px 0 100px;
.container {
    display: flex;
    justify-content: space-between;
}
@media (min-width: 1280px) {
    margin: 30px 0 140px;
}
.nav {
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
        display: none;
    }
}
.logo {
    display: block;
    width: 22%;
    @media (max-width: 768px) {
        width: 26%;
      }
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
    font-size: 16px;
    font-family: 'Titillium-Light';
    margin-right: 50px;
    text-shadow: 0.5px 0.5px #000000;
}
a:hover {
    color: #266554;
}


.contact-btn {
    height: 34px;
    padding: 6px 24px;
    border: solid 2px #266554;
    border-radius: 6px;
    color: #266554;
    font-size: 12px;
    text-transform: uppercase;
    font-family: 'Titillium-SemiBold';
    text-shadow: 0 0 black;
}
.contact-btn:hover {
    color: #fff;
    background-color: #266554;
}
.hamburger {
    display: none;
    @media (max-width: 767px) {
        display: block;
        width: 60%;
    }
}

.hamburger-menu {
    display: ${props => (props.isOpen  ? "block" : "none")};
}
.hambergur-menu__list {
    @media (max-width: 767px) {
        padding-top: 50px;
        position: absolute;
        width: 100%;
        background: white;
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
      }
      a {
        margin-bottom: 30px;
      }
}
`

export default HeaderStyled
