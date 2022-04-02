import styled from 'styled-components';

export const PurposeSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0;
`;

export const PurposeContainer = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1300px;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        max-width: 800px;
        justify-content: center;
    }
`;

export const PurposeH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-size: 40px;

    @media screen and (max-width: 450px) {
        font-size: 30px
    }
`;

export const PurposeP = styled.p`
    padding-left: 80px;

    @media screen and (max-width: 1100px) {
        margin-bottom: 30px;
        padding: 0;
        text-align: center;
        max-width: 90%;
    }

    @media screen and (max-width: 450px) {
        font-size: 14px
    }
`;

export const VideoContent = styled.video`
    padding: 0 80px;

    @media screen and (max-width: 800px) {
        padding: 0;
    }

    @media screen and (max-width: 700px) {
        width: 70%;
    }
`;