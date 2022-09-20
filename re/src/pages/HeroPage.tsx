import React from 'react';
import BusinessSystem from '../components/businessSystem/BusinessSystem';
import ContactBlock from '../components/contact/ContactBlock';
import FormBlock from '../components/formBlock/FormBlock';
import HeroScreen from '../components/HeroScreen/HeroScreen';
import HeroSecondPart from '../components/HeroSecondPart/HeroSecondPart';
import NextLevel from '../components/nextLevel/NextLevel';
import Video from '../components/video/Video';

const HeroPage = ()=> {
    return(
        <>
        <main>
        <HeroScreen/>
        <HeroSecondPart/>
        <Video/>
        <BusinessSystem/>
        <NextLevel/>
        <FormBlock/>
        <ContactBlock/>
        </main>
        </>
    )
}

export default HeroPage