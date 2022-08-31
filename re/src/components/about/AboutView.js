import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getContent } from "../../redux/about/aboutPageAction";
import { AboutViewStyled } from "./AboutViewStyled";
import company from "../../assets/image/company.svg"
import Button from "../Button/Button";


const AboutView = () => {
    const data = useSelector(state => state.content)
    const dispatch = useDispatch();
    useEffect( ()=>{
         dispatch(getContent());
    },[])
 

 return (
     <>
    {data?.loading && <p>Loading...</p>}
     <AboutViewStyled className="container" >
            <div className="about">
               <h1 className="about-title">{data?.view_title}</h1>
               <Button buttonStyle='btn-main' title={data?.link?.title} url={data?.link?.url} />
               <p className="about-text">{data?.extra_text}</p>
              <img src={company} alt="company_illustration"/>
         </div>
        <div dangerouslySetInnerHTML={{__html: data?.content}}/>
     </AboutViewStyled>
     </>
 )   
}

export default AboutView