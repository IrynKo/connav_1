import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import MessageForm from "../components/messageForm/MessageForm";
import { MessageFormStyled } from "../components/messageForm/MessageFormStyled";
import { IImage } from "../redux/mainPage/mainPageTypes";


interface IContact {
    loading: boolean,
    acf: IContactAcf,
    content: {
        rendered: string
    }
}
interface IContactAcf {
    title: string,
    image: IImage
}
 const initialState = {
    loading: true,
    acf: {
        title:'',
        image: {
            title:'',
            url:''
        }
    },
    content: {
        rendered: ''
    }
 }

const ContactPage = () => {
    const [data, setData] = useState<IContact>(initialState)
    useEffect(()=>{
        axios.get('https://i111191.hostde21.fornex.host/wp-json/wp/v2/pages/206').then(res=>setData(res.data))
    },[])
   
    return(
        <>
        {data?.loading && <Loading/>}
        <MessageFormStyled className="container">
        <div className="contact row">
        <img className="col-sm-12 col-lg-5"  src={data.acf?.image?.url} alt={data.acf?.image?.title} />
        <div className="col-sm-12 col-lg-6">
        <h1 className="mb-4" >{data.acf?.title}</h1>
        <MessageForm/>
        </div>
        </div>
        <div dangerouslySetInnerHTML={{__html: data.content?.rendered}}/>
        </MessageFormStyled>
        </>
    )
    }

export default ContactPage