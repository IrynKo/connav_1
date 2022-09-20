import { useSelector } from "react-redux"
import { useAppSelector } from "../../hooks";
import { IMainContent } from "../../redux/mainPage/mainPageTypes";
import Button from "../Button/Button";
import Loading from "../loading/Loading";
import { ContactBlockStyled } from "./ContactBlockStyled";


const ContactBlock = () => {
    
    const {mainContent}:{mainContent:IMainContent} = useAppSelector(state=>state.mainPage)
    //const {icon_linkedIn, icon_facebook}: {icon_linkedIn:IImage, icon_facebook:IImage} = mainContent.acf
    
   
    console.log(mainContent?.acf.contact_link);
    

 return (
    <>
     <ContactBlockStyled className="container row" >
        <img className="col-lg-3 col-md-5 col-sm-12 contact-foto" src={mainContent?.acf.contact_foto.url} alt={mainContent?.acf.contact_foto.title}/>
         <div className="col-md-4 col-sm-12">
         <h4 className="mb-3">{mainContent?.acf.title}</h4>
         <p className="mb-3" dangerouslySetInnerHTML={{__html: mainContent?.acf.contact_text}} />
         <div className="d-flex mb-3">  
         <img className="contact-icon"   src={mainContent?.acf.icon_linkedIn?.url} alt={mainContent?.acf.icon_linkedIn?.title}/>
         <img className="contact-icon" src={mainContent?.acf.icon_facebook?.url} alt={mainContent?.acf.icon_linkedIn?.title}/>
         </div>
        <Button buttonStyle='btn-main' title={mainContent?.acf.contact_link.title} url={mainContent?.acf.contact_link.url}/>
         </div>
         
     </ContactBlockStyled>
    </>
 )   
}

export default ContactBlock
