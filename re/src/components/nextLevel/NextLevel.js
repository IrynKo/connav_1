import { useState } from "react";
import { useSelector } from "react-redux"
import NextLevelStyled from "./NextLevelStyled";


const NextLevel = () => {
    const data = useSelector(state=>state.mainPage.next_level)
    let listItems;
    if (data?.list) {
        listItems = Object.values(data?.list)
    }
   

 return (
     <NextLevelStyled className="container">
         <h2>{data?.title}</h2>
         <div >
         <ul >
            {
                listItems?.map(item=>(
                    <li className="row"  key={item.title}>
                        <img className="col-sm-12 col-md-5" src={item.image.url} alt={item.image.title}/>
                        <div className="col-sm-12 col-md-7">
                        <h6>{item.title}</h6>
                        <p>{item.decription}</p>
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