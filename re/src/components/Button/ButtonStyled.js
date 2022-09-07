import styled from  'styled-components';

const ButtonStyled = styled.button `
max-height: 50px;
text-transform: uppercase;
border-radius: 10px;
width: 60%;
cursor: point;
@media (min-width: 320px) {
    font-size: 16px;
    padding: 6px 24px;
}
@media (min-width: 768px) {
    font-size: 16px;
    padding: 6px 26px;
}
@media (min-width: 1280px) {
    font-size: 18px;
    padding: 8px 32px;
    width: 40%;
}
@media (min-width: 1440px) {
    font-size: 18px;
    padding: 14px 40px;
}
a {
    text-decoration: none;
    color: white;
    @media (min-width: 320px) {
        font-size: 12px;
    }
    @media (min-width: 768px) {
        font-size: 12px;
    }
    @media (min-width: 1280px) {
        font-size: 14px;
    }
    @media (min-width: 1440px) {
        font-size: 16px;
    }

}
&.btn-main {
    display: block;
    background-color: #266554;
    border: none;
    @media (max-width: 1279px) {
        margin-bottom: 20px;
    }
    @media (min-width: 1280px) {
       // margin-right: 20px;
    }
}
&.btn-main:hover {
    opacity:0.7;
}
&.btn-secondary {
    background: transparent;
    border: solid 1px #266554;
    a {
        color: #266554;
    }
}
&.btn-secondary:hover {
    opacity:0.7;
}
`  
export default ButtonStyled;