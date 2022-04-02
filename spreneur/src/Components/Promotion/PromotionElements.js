import styled from 'styled-components';

export const PromotionSection = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 500px;
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

export const PromotionBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const PromotionContent = styled.div`
    z-index: 3;
    background: #fff;
    padding: 70px 30px;
    margin: 0 10rem;
    text-align: center;
    max-width: 970px;

    @media screen and (max-width: 960px) {
        padding: 50px 0;
        margin: 0 8rem;
    }

    @media screen and (max-width: 800px) {
        margin: 0 4rem;
    }

    @media screen and (max-width: 600px) {
        margin: 0 1rem;
    }
`;

export const PromotionH1 = styled.h1`
    padding-bottom: 30px;

    @media screen and (max-width: 500px) {
        font-size: 25px;
        padding-bottom: 20px;
    }
`;

export const PromotionP = styled.p`
    padding: 0 80px 30px 80px;

    @media screen and (max-width: 600px) {
        padding: 0 40px 30px 40px;
    }

    @media screen and (max-width: 500px) {
        font-size: 12px;
        padding: 0 30px 10px 30px;
    }
`;

export const PromoBtnWrapper = styled.div`
    margin-top: 30px;
`;