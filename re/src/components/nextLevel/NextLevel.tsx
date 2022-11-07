import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"
import NextLevelStyled from "./NextLevelStyled";
import Aos from "aos";
import "aos/dist/aos.css";
import { useAppSelector } from "../../hooks";
import { IMainContent } from "../../redux/mainPage/mainPageTypes";

interface IProperty {
    image: IIcon,
    title: string,
    decription: string
}
interface IIcon {
    ID: number | null,
    url: string,
    title: string
}

let listItems:IProperty[];

const NextLevel = () => {
    const {mainContent, loading, error}:{mainContent : IMainContent, loading: string, error: string | null} = useAppSelector(state=>state.mainPage)
    let list = mainContent?.acf.list_next_level;
    if (list) {
        listItems = Object.values(list)
    }
    useEffect(()=>{
        Aos.init({duration: 1000})
    }, [])
    
    console.log('listItems',listItems)
      
 return (
     <NextLevelStyled  className="container">
         <h2 data-aos="fade" className="title"  >{mainContent?.acf.title_next_level}</h2>
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