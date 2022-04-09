import styled from 'styled-components';

export const BookContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 30px;

    @media screen and (max-width: 580px) {
        margin-bottom: 50px;
    }
`;

export const BookContent = styled.div`
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 580px) {
        display: block;
    }

    @media screen and (max-width: 450px) {
        text-align: center;
    }
`;

export const BookImgSection = styled.div`
    margin: 30px 0;
`;

export const BookImg = styled.img`
    width: 230px;
    height: 320px;
    object-fit: contain;

    @media screen and (max-width: 580px) {
        display: block;
        margin: auto;
    }
`;

export const BookDes = styled.div`
    margin: 0 20px;
`;

export const BookH1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
`;

export const BookP = styled.p`
    margin: 35px 0;
`;