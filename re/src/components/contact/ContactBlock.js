import { useSelector } from "react-redux"
import Button from "../Button/Button";
import { ContactBlockStyled } from "./ContactBlockStyled";

const ContactBlock = () => {
    
    const data = useSelector(state=>state.mainPage.contact_form)
 
   

 return (
     <ContactBlockStyled className="container row" >
         <img className="col-3 contact-foto" src={data?.image?.url} alt={data?.icon_linkedIn?.title}/>
         <div className="col-4">
         <h4 className="mb-3">{data?.title}</h4>
         <p className="mb-3" dangerouslySetInnerHTML={{__html: data?.text}} />
         <div className="d-flex mb-3">  
         <img className="contact-icon"   src={data?.icon_linkedIn?.url} alt={data?.icon_linkedIn?.title}/>
         <img className="contact-icon" src={data?.icon_facebook?.url} alt={data?.icon_linkedIn?.title}/>
         </div>
         <Button buttonStyle='btn-main' title={data?.link?.title} url={data?.link?.url}/>
         </div>
         
     </ContactBlockStyled>
 )   
}

export default ContactBlock