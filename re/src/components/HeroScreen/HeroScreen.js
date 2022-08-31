import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMain } from '../../redux/mainPage/mainPageActions';
import Button from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroScreenStyled } from './HeroScreenStyled';



const HeroScreen = ()=> {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.mainPage)
    useEffect(()=>{
        dispatch(getMain())
    },[])
    const goToTop = () => {
        window.scrollTo({
            top: 3400,
            behavior: "smooth",
        });
    };
    return(
        <>
         {data?.loading && <p>Loading...</p>}
        <HeroScreenStyled className='container row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
        <h1>{data.acf?.hero_title}</h1>
        <p>{data.acf?.hero_text}</p>
        <div className='hero-btn'>
        <Button goToTop={goToTop} buttonStyle='btn-main' title="Get a demo" url={data.acf?.demo_link}/>
        </div>
        </div>
        <img className='col-lg-6 col-md-6 col-sm-12' src={data.acf?.hero_image?.url} />  
        <div 
        dangerouslySetInnerHTML={{__html: data?.data}} />
        </HeroScreenStyled>
        </>
    )
}

export default HeroScreen;