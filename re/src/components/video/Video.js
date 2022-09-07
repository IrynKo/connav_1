import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { VideoStyled } from './VideoStyled';
import Aos from "aos";
import "aos/dist/aos.css";

const Video = ()=> {
    const data = useSelector((state) => state.mainPage.video)
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])
    return(
        <VideoStyled className='container'>
        <h2 data-aos="fade">{data?.title}</h2>
        <div className='video-wrapper'>
        <div className='video'
        dangerouslySetInnerHTML={{__html: data?.video}} />
        </div>
        </VideoStyled>
       
      
    )
}

export default Video;