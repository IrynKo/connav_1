import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import BusinessSystemStyled from "./BusinessSystemStyled";
import Aos from "aos";
import "aos/dist/aos.css";

const BusinessSystem = () => {
    const [open, setOpen] = useState(false)
    const data = useSelector(state=>state.mainPage.bus_system)
    let listItems;
    if (data?.list) {
        listItems = Object.values(data?.list)
    }
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])
    const openHandler = (e) => {
        let getP = e.target.closest('li').classList.toggle('close')
        setOpen(state=>!state)
    }

 return (
     <BusinessSystemStyled  >
         <div className="container">
         <h2 data-aos="fade">{data?.title}</h2>
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