import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import BusinessSystemStyled from "./BusinessSystemStyled";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAppSelector } from "../../hooks";
import { IMainContent } from "../../redux/mainPage/mainPageTypes";

interface IBusinessList {
    title: string,
    description: string
}

let listItems:IBusinessList[];

const BusinessSystem = () => {
    const [open, setOpen] = useState(false)
    const {mainContent}:{mainContent:IMainContent} = useAppSelector(state=>state.mainPage)
    if (mainContent?.acf.list_business_system) {
        listItems = Object.values(mainContent?.acf.list_business_system)
    }
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])
    const openHandler = (e:React.MouseEvent<HTMLElement>) => {
        if (e.target instanceof HTMLElement && !null){
            let getP = e.target.closest('li')?.classList.toggle('close')

        }
        
        setOpen(state=>!state)
    }

 return (
     <BusinessSystemStyled  >
         <div className="container">
         <h2 data-aos="fade">{mainContent?.acf.title_business_system}</h2>
         <ul >
            {
                listItems?.map(item=>(
                    <li onClick={openHandler}  key={item.title}>
                        <h6 >{item.title}</h6>
                        <p >{item.description}</p>
                    </li>
                ))
            }
         </ul>
         </div>
          

     </BusinessSystemStyled>
 )   
}

export default BusinessSystem