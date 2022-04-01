import React from 'react';
import { GrGroup } from 'react-icons/gr';
import { FaGlobeAsia, FaMoneyBillWaveAlt } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';
import { EventStatsContainer, EventStatsContent, Stats, StatsIcon, StatsH1, StatsP } from './EventStatsElements';

const EventStats = () => {
    return (
        <>
            <EventStatsContainer>
                <EventStatsContent>
                    <Stats>
                        <StatsIcon>
                            <GrGroup />
                        </StatsIcon>
                        <StatsH1>40K</StatsH1>
                        <StatsP>Listeners</StatsP>
                    </Stats>
                    <Stats>
                        <StatsIcon>
                            <FaGlobeAsia />
                        </StatsIcon>
                        <StatsH1>40</StatsH1>
                        <StatsP>Coutries</StatsP>
                    </Stats>
                    <Stats>
                        <StatsIcon>
                            <FaMoneyBillWaveAlt />
                        </StatsIcon>
                        <StatsH1>14</StatsH1>
                        <StatsP>Millionaire Speakers</StatsP>
                    </Stats>
                    <Stats>
                        <StatsIcon>
                            <AiOutlinePercentage />
                        </StatsIcon>
                        <StatsH1>90%</StatsH1>
                        <StatsP>Success Rate</StatsP>
                    </Stats>
                </EventStatsContent>
            </EventStatsContainer>
        </>
    )
}

export default EventStats