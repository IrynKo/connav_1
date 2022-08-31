import axios from "axios";
import { useEffect, useState } from "react";
import MessageForm from "../components/messageForm/MessageForm";
import { MessageFormStyled } from "../components/messageForm/MessageFormStyled";

const ContactPage = () => {
    const [data, setData] = useState({})
    useEffect(()=>{
        axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/pages/206').then(res=>setData(res.data))
    },[])
   
    return(
        <MessageFormStyled className="container">
        <div className="contact row">
        <img className="col-5"  src={data.acf?.image?.url} alt={data.acf?.image?.title} />
        <div className="col-6">
        <h1 className="mb-4" >{data.acf?.title}</h1>
        <MessageForm/>
        </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: data.content?.rendered}}/>
        </MessageFormStyled>
    )
    }

export default ContactPage