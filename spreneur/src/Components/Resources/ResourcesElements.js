import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const ResourcesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 60px;
    padding: 0 80px;

    @media screen and (max-width: 500px) {
        padding: 0 40px;
    }
`;

export const ResourcesContent = styled.div`
    max-width: 1100px;
`;

export const ResourcesCat = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 300px);
    gap: 30px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: 300px 300px 300px 300px;
    }
`;

export const ResourcesBox = styled(LinkR)`
    position: relative;
    transition: all 0.3s ease;

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
        z-index: 0;
        opacity: 0;
        transition: all 0.3s ease;
    }

    &:hover:before {
        opacity: 1;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export const ResourcesH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 40px;
    margin-bottom: 30px;
`;

export const ResourcesImg = styled.img`
    width: 100%;
    height: 300px;
    max-height: 300px;
    object-fit: cover;
`;

export const ResourcesH2 = styled.h2`
    position: absolute;
    top: 8rem;
    bottom: 0;
    left: 0;
    right: 0;
    color: #EF8A56;
    font-size: 2rem;
`;