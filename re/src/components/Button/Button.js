import React from 'react';
import { useSelector } from 'react-redux';
import ButtonStyled from './ButtonStyled';



const STYLES = ['btn-main', 'btn-secondary' ];
const Button = ({title, url, buttonStyle, goToTop})=> {
   const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
   
    return(
        <ButtonStyled onClick={goToTop} className={checkButtonStyle}>
       <a href={url}>{title}</a>
        </ButtonStyled>
    )
}

export default Button;