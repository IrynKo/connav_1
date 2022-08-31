import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Button from "../Button/Button";
import { FormStyled } from "./FormStyled";


const Form = () => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const form = useRef();
  const handleChange = (e) => {
      setEmail(e.target.value);
  }
  const onHandleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_1c7af9g', 'template_vqcui1o', form.current, 'wvIorJcpBSPzypUUp')
      .then(res=>{setText(res.text)}).catch(err=>{console.log(err)
        form='';
        
    })
    setEmail('');
  }

 return (
   <>
  {text==='OK' && <p className="form-error">Your Demo is sent</p>}
     <FormStyled ref={form} onSubmit={onHandleSubmit}>
       <input className="form-email" type='email' name="user_email"  onChange={handleChange} value={email} placeholder="enter your email"/>
       <Button  buttonStyle='btn-main' title="Get a demo">
       <input type='submit' value='Get a demo'/>
       </Button>
     </FormStyled>
   </>
 )   
}

export default Form