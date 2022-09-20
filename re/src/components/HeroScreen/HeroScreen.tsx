import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMain } from '../../redux/mainPage/mainPageActions';
import Button from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroScreenStyled } from './HeroScreenStyled';
import Loading from '../loading/Loading';
import { AppDispatch, useAppDispatch, useAppSelector } from '../../hooks';
import { IMainContent } from '../../redux/mainPage/mainPageTypes';



const HeroScreen = ()=> {
    const dispatch = useAppDispatch();
  
    const {mainContent, loading, error}:{mainContent : IMainContent, loading: string, error: string | null}  = useAppSelector((state) => state.mainPage)
    useEffect(()=>{
        dispatch<any>(getMain())
    },[])
    const goToTop= () => {
        window.scrollTo({
            top: 3400,
            behavior: "smooth",
        });
    };
    console.log(mainContent?.acf.hero_image, 'mainContent');
    
    return(
        <>
        {loading && <Loading/>}
        <HeroScreenStyled className='container row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <h1>{mainContent?.acf.hero_title}</h1>
        <p>{mainContent?.acf.hero_text}</p>
        <div className='hero-btn'>
        <Button goToTop={goToTop} buttonStyle='btn-main' title="Get a demo" url={mainContent?.acf.demo_link}/>
        </div>
        </div>
        <img className='col-lg-6 col-md-12 col-sm-12' src={mainContent?.acf.hero_image.url} />  
        
        </HeroScreenStyled>
        </>
    )
}

export default HeroScreen;
/* <HeroScreenStyled className='container row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <h1>{data.acf?.hero_title}</h1>
        <p>{data.acf?.hero_text}</p>
        <div className='hero-btn'>
        <Button goToTop={goToTop} buttonStyle='btn-main' title="Get a demo" url={data.acf?.demo_link}/>
        </div>
        </div>
        <img className='col-lg-6 col-md-12 col-sm-12' src={data.acf?.hero_image?.url} />  
        <div 
        dangerouslySetInnerHTML={{__html: data?.data}} />
        </HeroScreenStyled>*/