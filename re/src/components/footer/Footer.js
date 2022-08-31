import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getFooter } from "../../redux/footer/footerActions";
import { FooterStyled } from "./FooterStyled";

const Footer = () => {
    const data = useSelector(state => state.footer)
    const dispatch = useDispatch();
    useEffect( ()=>{
         dispatch(getFooter());
    },[])
   
   

 return (
     <FooterStyled>
        <div className="container">
          <img  src={data.logo?.url} alt={data.logo?.title}/>
         <div className="row justify-content-between">
          <div className="col-5">
         <p>{data?.info}</p>
         </div>
         <div className="col-5">
         <p dangerouslySetInnerHTML={{__html: data?.adress}} />
         </div>
         </div>
        </div>
     </FooterStyled>
 )   
}

export default Footer