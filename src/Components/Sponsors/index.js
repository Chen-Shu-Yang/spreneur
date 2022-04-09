import React from 'react';
import styled from 'styled-components';
import { Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6 } from './data';
import Logo from '../Logo';

const Sponsors = () => {
    const SponsorSection = styled.div`
        background: #EF8A56;
        width: 100%;
        padding: 30px 0;
        margin-top: 120px;
    `;

    const SponsorsContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;

    const SponsorH1 = styled.h1`
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        margin-bottom: 35px;

        @media screen and (max-width: 840px) {
            margin-bottom: 0;
        }
    `;

    const SponsorsImgs = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    `;
    return (
        <>
        <SponsorSection>
            <SponsorsContainer>
                <SponsorH1>Our Sponsors</SponsorH1>
                <SponsorsImgs>
                    <Logo {...Sponsor1} />
                    <Logo {...Sponsor2} />
                    <Logo {...Sponsor3} />
                    <Logo {...Sponsor4} />
                    <Logo {...Sponsor5} />
                    <Logo {...Sponsor6} />
                </SponsorsImgs>
            </SponsorsContainer>
        </SponsorSection>
            
        </>
    )
}

export default Sponsors