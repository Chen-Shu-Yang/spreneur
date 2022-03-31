import React from 'react'
import styled from 'styled-components'

const Logo = ({ Img, alt }) => {

    const LogoImg = styled.img`
        width: 140px;
        height: 107px;
        margin: 0 10px;
        object-fit: contain;
    `;

    return (
        <>
            <LogoImg src={Img} alt={alt} ></LogoImg>
        </>
    )
}

export default Logo