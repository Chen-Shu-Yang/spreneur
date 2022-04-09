import React from 'react'
import styled from 'styled-components'
import Partners from '../Components/Partners';
import Pagination from '../Components/Pagination'
import AllCourses from '../Components/AllCourses';
import Sponsors from '../Components/Sponsors';
import AcademyConclusion from '../Components/AcademyConclusion';

const Academy = () => {
    const AcademyContainer = styled.div`
        margin: 120px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    return (
        <>
            <AcademyContainer>
                <Partners />
                <AllCourses />
                <Pagination />
                <Sponsors />
                <AcademyConclusion />
            </AcademyContainer>
        </>
    )
}

export default Academy