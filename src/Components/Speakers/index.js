import React from 'react';
import styled from 'styled-components';
import ListingCards from '../ListingCards';
import { Speaker1 } from '../ListingCards/data';

const Speakers = () => {
    const SpeakersContainer = styled.div`
        margin-top: 30px;
    `;

    const SpeakersContent = styled.div`
        max-width: 1100px;

        @media screen and (max-width: 1000px) {
            padding: 0 80px;
        }

        @media screen and (max-width: 659px) {
            padding: 0 30px;
        }

        @media screen and (max-width: 560px) {
            padding: 0;
        }
    `;

    const SpeakersListing = styled.div`
        margin-top: 40px ;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    `;

    const SpeakersH1 = styled.h1`
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    `;

    return (
        <>
            <SpeakersContainer>
                <SpeakersContent>
                    <SpeakersH1>Our Speakers</SpeakersH1>
                    <SpeakersListing>
                        <ListingCards {...Speaker1} />
                        <ListingCards {...Speaker1} />
                        <ListingCards {...Speaker1} />
                        <ListingCards {...Speaker1} />
                        <ListingCards {...Speaker1} />
                        <ListingCards {...Speaker1} />
                        <ListingCards {...Speaker1} />
                        <ListingCards {...Speaker1} />
                    </SpeakersListing>
                </SpeakersContent>

            </SpeakersContainer>
        </>
    )
}

export default Speakers