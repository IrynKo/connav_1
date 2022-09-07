import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import NextLevelStyled from "./NextLevelStyled";
import Aos from "aos";
import "aos/dist/aos.css";

const NextLevel = () => {
    const data = useSelector(state=>state.mainPage.next_level)
    let listItems;
    if (data?.list) {
        listItems = Object.values(data?.list)
    }
    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])
    

      
 return (
     <NextLevelStyled  className="container">
         <h2 data-aos="fade" className="title"  >{data?.title}</h2>
         <div >
                <ul >
            {
                listItems?.map(( item, index)=>(
                    <li  data-aos="fade" className={`row vis-${index} `} key={item.title}>
                
                        <img data-aos="fade" className="col-sm-12 col-md-5" src={item.image.url} alt={item.image.title}/>
                        <div data-aos="fade" className="col-sm-12 col-md-7">
                        <h6 data-aos="fade">{item.title}</h6>
                        <p data-aos="fade">{item.decription}</p>
                        </div>
                    </li>
                ))
            }
         </ul>
         </div>
     </NextLevelStyled>
 )   
}

export default NextLevel