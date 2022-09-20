import React, { useEffect } from 'react';
import { VideoStyled } from './VideoStyled';
import Aos from "aos";
import "aos/dist/aos.css";
import { useAppSelector } from '../../hooks';
import { IMainContent } from '../../redux/mainPage/mainPageTypes';

const Video = ()=> {
    const  {mainContent} : {mainContent:IMainContent} = useAppSelector((state) => state.mainPage)
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])
    return(
        <VideoStyled className='container'>
        <h2 data-aos="fade">{mainContent?.acf.title}</h2>
        <div className='video-wrapper'>
        <div className='video'
        dangerouslySetInnerHTML={{__html: mainContent?.acf.video}} />
        </div>
        </VideoStyled>
       
      
    )
}

export default Video;