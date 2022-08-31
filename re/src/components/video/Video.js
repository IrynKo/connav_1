import React from 'react';
import { useSelector } from 'react-redux';
import { VideoStyled } from './VideoStyled';


const Video = ()=> {
    
    const data = useSelector((state) => state.mainPage.video)
    return(
        <VideoStyled className='container'>
        <h2>{data?.title}</h2>
        <div>
        <div className='video'
        dangerouslySetInnerHTML={{__html: data?.video}} />
        </div>
        </VideoStyled>
       
      
    )
}

export default Video;