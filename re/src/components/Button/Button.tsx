import React from 'react';
import ButtonStyled from './ButtonStyled';

type Props = {
    title?: string,
    url?:string,
    buttonStyle:string,
    goToTop?: any
  };


const STYLES = ['btn-main', 'btn-secondary' ];
const Button = ({title, url, buttonStyle, goToTop}:Props)=> {
    //const Button: React.FC<Props> = ({title, url, buttonStyle,}/* goToTop*/)=> {
   const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
   
    return(

       <ButtonStyled onClick={goToTop} className={checkButtonStyle}>
       <a href={url}>{title}</a>
        </ButtonStyled>
    )
}

export default Button;

