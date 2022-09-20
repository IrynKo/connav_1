import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ListFormat } from "typescript";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getFooter } from "../../redux/footer/footerActions";
import { IFooterContent } from "../../redux/footer/footerTypes";
import { FooterStyled } from "./FooterStyled";

const Footer = () => {
    const {footerContent, loading, error}:{footerContent:IFooterContent, loading: boolean, error:string} = useAppSelector(state => state.footer)
    const dispatch = useAppDispatch();
    useEffect( ()=>{
         dispatch<any>(getFooter());
    },[])


 return (
     <FooterStyled>
        {error && <p>{error}</p>}
        <div className="container">
        <img  src={footerContent?.acf.logo?.url} /*alt={data.logo?.title}*//>
         <div className="row justify-content-between">
          <div className="col-5">
          <p>{footerContent?.acf.info_about_connav}</p>
         </div>
         <div className="col-5">
         <p dangerouslySetInnerHTML={{__html: footerContent?.acf.adress}} />
         </div>
         </div>
        </div>
     </FooterStyled>
 )   
}

export default Footer

/*     <img  src={footerContent?.acf.logo?.url} /*alt={data.logo?.title}/>
 <p>{footerContent?.acf.info_about_connav}</p>
*/