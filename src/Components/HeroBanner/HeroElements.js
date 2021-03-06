import styled from 'styled-components';

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
max-height: 800px;
position: relative;
z-index: 1;

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
    z-index: 2;
}
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1300px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const HeroH1 = styled.h1`
    font-size: 55px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 50px;

    @media screen and (max-width: 500px) {
        font-size: 50px;
    }
`;

export const HeroP = styled.p`
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 50px;
    max-width: 800px;

    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
`;

export const HeroBtnWrapper = styled.div`
    text-align: center;
`;