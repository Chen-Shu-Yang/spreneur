import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const AcademyConclusionSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0;

    @media screen and (max-width: 905px) {
        padding: 0;
        margin-bottom: -50px;
    }
`;

export const AcademyConclusionContainer = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1300px;

    @media screen and (max-width: 905px) {
        display: block;
    }
`;

export const AcademyConclusionContent = styled.div`
    margin: 0 80px;
`;

export const AcademyConclusionH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 40px;

    @media screen and (max-width: 400px) {
        font-size: 30px;
    }
`;

export const AcademyConclusionP = styled.p`
    padding: 30px 0;
`;

export const AcademyConclusionImg = styled.img`
    width: 500px;
    height: 321px;
    object-fit: cover;

    @media screen and (max-width: 905px) {
        display: block;
        margin: auto;
        margin-top: 50px;
        width: 100%;
        height: auto;
    }
`;

export const Button = styled(LinkR)`
    color: #fff;
    font-size: 1rem;
    background: #EF8A56;
    padding: 10px 30px;
    border-radius: 20px;
    border: 2px solid #EF8A56;
    transition: all 0.3s ease;

    &:hover {
        background: none;
        color: #EF8A56;
    }

    @media screen and (max-width: 500px) {
        font-size: 14px;
        padding: 7px 15px;
    }
`;