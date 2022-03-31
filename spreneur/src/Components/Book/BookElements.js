import styled from 'styled-components';

export const BookContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BookContent = styled.div`
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const BookImgSection = styled.div`
    margin: 30px 40px;
`;

export const BookImg = styled.img`
    width: 250px;
    height: 400px;
    object-fit: cover;
`;

export const BookDes = styled.div``;

export const BookH1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
`;

export const BookP = styled.p`
    margin: 35px 0;
    font-size: 20px;
`;