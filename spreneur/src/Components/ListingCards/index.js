import React from 'react';
import styled from 'styled-components';

const ListingCards = ({ Img, alt, recentPostH1 }) => {
    const ListingCard = styled.div`
        width: 220px;
        height: 300px;
        margin: 0 15px;
        margin-bottom: 30px;
        background: #EF8A56;
        box-shadow: 0 0 15px 0 rgba(0,0,0,0.4);
    `;

    const ListingCardImg = styled.img`
        width: 100%;
        height: 60%;
        object-fit: cover;
    `;

    const ListingCardH1 = styled.h2`
        text-align: center;
        margin-top: 25px;
        margin: 25px 15px 0 15px;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
        color: #000;
    `;

    return (
        <>
            <ListingCard>
                <ListingCardImg src={Img} alt={alt}></ListingCardImg>
                <ListingCardH1>{recentPostH1}</ListingCardH1>
            </ListingCard>
        </>
    )
}

export default ListingCards