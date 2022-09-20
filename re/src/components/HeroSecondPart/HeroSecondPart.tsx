
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroSecondPartStyled } from './HeroSecondPartStyled';
import Aos from "aos";
import "aos/dist/aos.css";
import { useAppSelector } from '../../hooks';
import { IMainContent } from '../../redux/mainPage/mainPageTypes';

interface IProperty {
    icon: IIcon,
    text: string
}
interface IIcon {
    ID: number | null,
    url: string,
    title: string
}

let propertyNames:IProperty[];

const HeroSecondPart = ()=> {
    const {mainContent, loading, error}:{mainContent : IMainContent, loading: string, error: string | null} = useAppSelector((state) => state.mainPage)
    const array = mainContent?.acf.second_block_list
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])
    if (array) {
        propertyNames=Object.values(array); 
    }
   
    
    return(
        <HeroSecondPartStyled className='container '>
        <h2>{mainContent?.acf.second_block_title}</h2>
        <div className='mb-4'>
        <p>{mainContent?.acf.second_block_text}</p>
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
            </ul>}
        </div>
        </HeroSecondPartStyled>
    )
}

export default HeroSecondPart;
/*
        } */