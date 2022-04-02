import styled from "styled-components";

export const TestimonialContainer = styled.div`
    padding: 60px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 600px) {
        padding: 60px 40px;
    }
`;

export const TestimonialH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 40px;
    text-align: center;
    margin-bottom: 30px;
`;

export const TestimonialContent = styled.div`
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const TestimonialBox = styled.div`
    border: 2px solid #000;
    padding: 30px 30px;
`;

export const MobileIcon = styled.div`
    font-size: 35px;
`;

export const TestimonialP = styled.p`
    margin-bottom: 30px;
`;

export const TestimonialName = styled.p`
    font-weight: bold;
`;