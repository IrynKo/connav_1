import Aos from "aos";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import Form from "../form/Form";
import { FormBlockStyled } from "./FormBlockStyled";
import "aos/dist/aos.css";

const FormBlock = () => {
    const data = useSelector(state=>state.mainPage.signup_form)
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])

 return (
     <FormBlockStyled data-aos="fade" className="container" >
         <h2>{data?.title}</h2>
         <p>{data?.text}</p>
         <Form/>
     </FormBlockStyled>
 )   
}

export default FormBlock