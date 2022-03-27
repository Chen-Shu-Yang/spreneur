import styled from 'styled-components';

export const ResourcesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 60px;
`;

export const ResourcesContent = styled.div`
    max-width: 1100px;
`;

export const ResourcesCat = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`;

export const ResourcesBox = styled.div`
    position: relative;
`;

export const ResourcesH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 40px;
    margin-bottom: 30px;
`;

export const ResourcesImg = styled.img`
    position: relative;
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