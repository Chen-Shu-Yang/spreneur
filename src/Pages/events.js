import React from 'react'
import styled from 'styled-components'
import EventApplication from '../Components/EventApplication'
import EventStats from '../Components/EventStats'
import RecentEvents from '../Components/RecentEvents'
import Speakers from '../Components/Speakers'

const Events = () => {
    const RecentEventsSection = styled.div`
        margin: 120px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    return (
        <>
            <RecentEventsSection>
                <RecentEvents />
                <Speakers />
                <EventStats />
                <EventApplication />
            </RecentEventsSection>
        </>
    )
}

export default Events