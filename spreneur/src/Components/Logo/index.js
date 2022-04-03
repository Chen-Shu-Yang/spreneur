import React from 'react'
import styled from 'styled-components'

const Logo = ({ Img, alt }) => {

    const LogoImg = styled.img`
        width: 140px;
        height: 107px;
        margin: 0 10px;
        object-fit: contain;
        filter: grayscale(1);
        transition: all 0.3s ease;

        &:hover {
            filter: grayscale(0);
            transform: scale(1.1);
        }

        @media screen and (max-width: 960px) {
            width: 120px;
            height: 87px;
        }

        @media screen and (max-width: 840px) {
            margin-top: 30px;
        }
    `;

    return (
        <>
            <LogoImg src={Img} alt={alt} ></LogoImg>
        </>
    )
}

export default Logo