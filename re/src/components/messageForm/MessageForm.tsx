import React,{ useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Button from "../Button/Button";
import { MessageFormStyled } from "./MessageFormStyled";

const initialState = {
    user_name: "",
    user_email: "",
    message: ""
  };
  
const MessageForm = () => {
  const [user, setUser] = useState({...initialState});
  const [text, setText] = useState('');
  const form = useRef< HTMLFormElement >(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target
      setUser({
        ...user, [name]: value
    });
  }
  const formInfo=form.current?form.current:''
  const onHandleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      emailjs.sendForm('service_1c7af9g', 'template_kogeher', formInfo, 'wvIorJcpBSPzypUUp')
      .then(res=>{setText(res.text)}).catch(err=>{console.log(err)  
    })
    setUser({...initialState});
  }


 return (
    <>
    {text==='OK' && <p className="error">Your message is sent</p>}
     <form ref={form} onSubmit={onHandleSubmit}>
       <input  type='name' name="user_name"  onChange={handleChange} value={user.user_name} placeholder="name"/>
       <input  type='email' name="user_email"  onChange={handleChange} value={user.user_email} placeholder="email"/>
       <textarea className="form-email" name="message"  onChange={handleChange} value={user.message} placeholder="messages"/>
       
       <input className="form-btn" type='submit' value='Send a message'/>
   
     </form>
    </>
 )   
}

export default MessageForm

/**
 * <Button  buttonStyle='btn-main' title="Contact us">
 */