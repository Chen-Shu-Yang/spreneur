import React from 'react';
import ListingCards from '../ListingCards';
import styled from 'styled-components';
import { RecentEvent1, RecentEvent2, RecentEvent3, RecentEvent4 } from '../ListingCards/data';

const RecentEvents = () => {
    const RecentEventsContainer = styled.div`
        margin: 15px 0;
    `;

    const RecentEventContent = styled.div`
        max-width: 1300px;
        padding: 0 80px;

        @media screen and (max-width: 659px) {
            padding: 0 30px;
        }

        @media screen and (max-width: 560px) {
            padding: 0;
        }
    `;

    const RecentEventsH1 = styled.h1`
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
        font-weight: 700;
    `;

    const RecentEventsList = styled.ul`
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 30px;
    `;

    const RecentEvent = styled.li``;
    return (
        <>
            <RecentEventsContainer>
                <RecentEventContent>
                    <RecentEventsH1>Recent Events</RecentEventsH1>
                    <RecentEventsList>
                        <RecentEvent><ListingCards {...RecentEvent1} /></RecentEvent>
                        <RecentEvent><ListingCards {...RecentEvent2} /></RecentEvent>
                        <RecentEvent><ListingCards {...RecentEvent3} /></RecentEvent>
                        <RecentEvent><ListingCards {...RecentEvent4} /></RecentEvent>
                    </RecentEventsList>
                </RecentEventContent>

            </RecentEventsContainer>
        </>
    )
}

export default RecentEvents