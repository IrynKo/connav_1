import React, { useEffect } from "react";
import {  useSelector } from "react-redux"
import { getContent } from "../../redux/about/aboutPageAction";
import { AboutViewStyled } from "./AboutViewStyled";
import company from "../../assets/image/company.svg"; 
import Button from "../Button/Button";
import Loading from "../loading/Loading";
import {RootState} from "../../redux/rootReduser"
import {  useAppDispatch } from "../../hooks";
import { IAboutContent } from "../../redux/about/aboutPageTypes";



const AboutView = () => {
    const {content, loading, error} : {content:IAboutContent, loading: string, error: string} = useSelector((state:RootState) => state.content);
    const dispatch = useAppDispatch();
   useEffect( ()=>{ 
    /*async function handleAsync() {
        let order = await getContent()
        dispatch<Action>(order);
      })*/
         dispatch<any>(getContent());
    },[dispatch])


 return (
     <>
{loading && <Loading/>}
     <AboutViewStyled className="container" >
            <div className="about">
               <h1 className="about-title">{content?.acf.title_for_view}</h1>
               <Button buttonStyle='btn-main' title={content?.acf.link_for_view.title} url={content?.acf.link_for_view.url} />
               <h5 className="about-text">{content?.acf.extra_text}</h5>
              <img src={company} alt="company_illustration"/>
         </div>
         <div className="about-description" dangerouslySetInnerHTML={{__html: content?.content.rendered}}/>
        
     </AboutViewStyled>
     </>
 )   
}

export default AboutView

