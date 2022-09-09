
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroSecondPartStyled } from './HeroSecondPartStyled';
import Aos from "aos";
import "aos/dist/aos.css";




const HeroSecondPart = ()=> {
    const data = useSelector((state) => state.mainPage)
    const array = data.acf?.second_block_list
    let propertyNames;
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])
    if (array) {
        propertyNames=Object.values(array); 
    }
   
    
    return(
        <HeroSecondPartStyled className='container '>
        <h2>{data.acf?.second_block_title}</h2>
        <div className='mb-4'>
        <p>{data.acf?.second_block_text}</p>
        </div>
        <div className=''>
        {propertyNames &&
        <ul className='row'>
                {
                    propertyNames.map(item=>(
                        <li className='col-sm-10 col-md-4 ' key={item.icon.ID}>
                        <img className='' data-aos="fade" src={item.icon.url} alt={item.icon.title}/>
                        <h6 className='' data-aos="fade">{item.text}</h6>
                        </li>
                    ))
                }
            </ul>
        } 
        </div>
        </HeroSecondPartStyled>
    )
}

export default HeroSecondPart;