import React from 'react';
import { PromotionSection, PromotionBg, ImageBg, PromotionContent, PromotionH1, PromotionP, PromoBtnWrapper } from './PromotionElements';
import { Button } from '../../ButtonElements';
import Banner from '../../Img/banner-2.jpg';

const Promotion = () => {
    return (
        <>
            <PromotionSection>
                <PromotionBg>
                    <ImageBg src={Banner}></ImageBg>
                </PromotionBg>
                <PromotionContent>
                    <PromotionH1>Start with only $75!</PromotionH1>
                    <PromotionP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus. 
                        Sed felis eget velit aliquet sagittis.</PromotionP>
                    <PromoBtnWrapper>
                        <Button to="/" /*onMouseEnter={onHover} onMouseLeave={onHover} */>TRY IT FREE FOR 14 DAYS!</Button>
                    </PromoBtnWrapper>
                </PromotionContent>
                
            </PromotionSection>
        </>
    )
}

export default Promotion