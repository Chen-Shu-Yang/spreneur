import React from 'react';
import styled from 'styled-components';
import Img from '../../Img/banner-3.jpg';

const BlogIntro = () => {
    const BlogIntroContainer = styled.div`
        margin: 80px 0;
        height: 70vh;
        width: 100%;
        
    `;

    const BlogIntroContent = styled.div`
        max-width: 1100px;
    `;

    const BlogIntroBg = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
    
        :before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%,
                rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        }
    `;

    const BlogIntroBgImg = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `;

    const BlogIntroH1 = styled.h1`
        position: absolute;
        color: #fff;
        max-width: 1100px;
        text-align: center;
        width: 600px;
        top: 35%;
        right: 0;
        bottom: 35%;
        left: 0;
        margin: auto;
        font-family: 'Ubuntu', sans-serif;
    `;

    return (
        <>
            <BlogIntroContainer>
                <BlogIntroBg>
                    <BlogIntroBgImg src={Img}></BlogIntroBgImg>
                    <BlogIntroH1>Get the best and most useful advices from our articles to help improve your business every day!</BlogIntroH1>
                </BlogIntroBg>
            </BlogIntroContainer>
        </>
    )
}

export default BlogIntro