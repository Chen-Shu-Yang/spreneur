import styled from "styled-components";

export const EventStatsContainer = styled.div`
    background: #EF8A56;
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EventStatsContent = styled.div`
    max-width: 1300px;
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 820px) {
        margin-top: 0;
    }

    @media screen and (max-width: 395px) {
        display: block;
    }
`;

export const Stats = styled.div`
    margin: 0 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
        transform: scale(1.1);
    }
`;

export const StatsIcon = styled.div`
    font-size: 40px;
    margin-bottom: -10px;

    @media screen and (max-width: 820px) {
        margin-top: 50px;
    }
`;

export const StatsH1 = styled.h1``;

export const StatsP = styled.small``;
