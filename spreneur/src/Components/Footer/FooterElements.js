import styled from "styled-components";

export const FooterContainer = styled.div`
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`;

export const FooterContent = styled.div`
    max-width: 600px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const SocialIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    font-size: 35px;
    padding: 12px;
    border-radius: 50%;

    @media screen and (max-width: 450px) {
        font-size: 25px;
        justify-content: space-around;
    }
`;

export const Copyright = styled.p`
    color: #fff;

    @media screen and (max-width: 450px) {
        font-size: 12px;
    }
`;