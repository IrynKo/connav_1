
import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroSecondPartStyled } from './HeroSecondPartStyled';




const HeroSecondPart = ()=> {
    const data = useSelector((state) => state.mainPage)
    const array = data.acf?.second_block_list
    let propertyNames;
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
        <ul>
                {
                    propertyNames.map(item=>(
                        <li className='' key={item.icon.ID}>
                        <img className='' src={item.icon.url} alt={item.icon.title}/>
                        <h6 className=''>{item.text}</h6>
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