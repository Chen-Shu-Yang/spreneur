import React from 'react';
import { AcademyConclusionSection, AcademyConclusionContainer, AcademyConclusionContent, AcademyConclusionH1, AcademyConclusionP, AcademyConclusionImg, Button } from './AcademyConclusionElements';
import Img from '../../Img/undraw_Professor.png';

const AcademyConclusion = () => {
    return (
        <>
            <AcademyConclusionSection>
                <AcademyConclusionContainer>
                    <AcademyConclusionContent>
                        <AcademyConclusionH1>What You Will Learn?</AcademyConclusionH1>
                        <AcademyConclusionP>
                            The membership gives you access to all of the Kesler Science classroom materials plus hours of live and recorded professional development with Steve Spangler.
                        </AcademyConclusionP>
                        <Button to='/'>Find Your Course Now!</Button>
                    </AcademyConclusionContent>
                    <AcademyConclusionImg src={Img} type='video/mp4' />
                </AcademyConclusionContainer>
            </AcademyConclusionSection>
        </>
    )
}

export default AcademyConclusion