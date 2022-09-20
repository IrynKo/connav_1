import Aos from "aos";
import { useEffect, useState } from "react";
import Form from "../form/Form";
import { FormBlockStyled } from "./FormBlockStyled";
import "aos/dist/aos.css";
import { useAppSelector } from "../../hooks";
import { IMainContent } from "../../redux/mainPage/mainPageTypes";

const FormBlock = () => {
    const {mainContent}:{mainContent:IMainContent} = useAppSelector(state=>state.mainPage)
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])

 return (
     <FormBlockStyled data-aos="fade" className="container" >
         <h2>{mainContent?.acf.signup_title}</h2>
         <p>{mainContent?.acf.signup_text}</p>
         <Form/>
     </FormBlockStyled>
 )   
}

export default FormBlock