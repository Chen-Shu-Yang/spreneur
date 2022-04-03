import React from 'react';
import styled from 'styled-components';
import { Partner1, Partner2, Partner3, Partner4, Partner5, Partner6 } from './data';
import Logo from '../Logo';

const Partners = () => {
    const PartnersContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
    `;

    const PartnerH1 = styled.h1`
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        margin-bottom: 35px;

        @media screen and (max-width: 840px) {
            margin-bottom: 0;
        }
    `;

    const PartnersImgs = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    `;
    return (
        <>
            <PartnersContainer>
                <PartnerH1>Our Partners</PartnerH1>
                <PartnersImgs>
                    <Logo {...Partner1} />
                    <Logo {...Partner2} />
                    <Logo {...Partner3} />
                    <Logo {...Partner4} />
                    <Logo {...Partner5} />
                    <Logo {...Partner6} />
                </PartnersImgs>
            </PartnersContainer>
        </>
    )
}

export default Partners