import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Button from "../Button/Button";
import { FormStyled } from "./FormStyled";


const Form = () => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const form = useRef<HTMLFormElement>(null);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
  }
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formInfo = form.current?form.current:''
    let formInpput = form?form:''
      emailjs.sendForm('service_1c7af9g', 'template_vqcui1o', formInfo, 'wvIorJcpBSPzypUUp')
      .then(res=>{setText(res.text)}).catch(err=>{console.log(err)
        formInpput='';
        
    })
    setEmail('');
  }

 return (
   <>
  {text==='OK' && <p className="form-error">Your Demo is sent</p>}
     <FormStyled ref={form} onSubmit={onHandleSubmit}>
       <input className="form-email" type='email' name="user_email"  onChange={handleChange} value={email} placeholder="enter your email"/>
       <input className="form-btn" type='submit' value='Get a demo'/>
     
     </FormStyled>
   </>
 )   
}

export default Form
/*
       <Button  buttonStyle='btn-main' title="Get a demo">*/