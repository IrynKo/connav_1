import { useState } from "react";
import { useSelector } from "react-redux"
import Form from "../form/Form";
import { FormBlockStyled } from "./FormBlockStyled";

const FormBlock = () => {
    const data = useSelector(state=>state.mainPage.signup_form)
 

 return (
     <FormBlockStyled className="container row" >
         <h2>{data?.title}</h2>
         <p>{data?.text}</p>
         <Form/>
     </FormBlockStyled>
 )   
}

export default FormBlock