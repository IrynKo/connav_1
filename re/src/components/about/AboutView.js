import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getContent } from "../../redux/about/aboutPageAction";
import { AboutViewStyled } from "./AboutViewStyled";
import company from "../../assets/image/company.svg"
import Button from "../Button/Button";
import Loading from "../loading/Loading";


const AboutView = () => {
    const data = useSelector(state => state.content);
    const [isVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch();
    useEffect( ()=>{
         dispatch(getContent());
    },[])


      console.log(data);

 return (
     <>
     {data?.loading && <Loading/>}
     <AboutViewStyled className="container" >
            <div className="about">
               <h1 className="about-title">{data?.view_title}</h1>
               <Button buttonStyle='btn-main' title={data?.link?.title} url={data?.link?.url} />
               <h5 className="about-text">{data?.extra_text}</h5>
              <img src={company} alt="company_illustration"/>
         </div>
        <div dangerouslySetInnerHTML={{__html: data?.content}}/>
     </AboutViewStyled>
     </>
 )   
}

export default AboutView