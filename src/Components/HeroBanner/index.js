import React from 'react';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from './HeroElements';
import { Button } from '../../ButtonElements';
import Banner from '../../Img/banner-1.png';

const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <ImgBg src={Banner} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Lorem Ipsum Learning Entrepreneur</HeroH1>
                    <HeroP>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="/" /*onMouseEnter={onHover} onMouseLeave={onHover} */>TRY IT FREE FOR 14 DAYS!</Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection