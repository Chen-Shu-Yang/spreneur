import React, { useState } from 'react';
import styled from 'styled-components';
import CourseCards from '../CourseCards';
import { Course1, Course2, Course3, Course4, Course5, Course6, Course7, Course8 } from '../CourseCards/data';

const AllCourses = () => {

    const AllCoursesContainer = styled.div`
        margin: 50px 0;
    `;

    const AllCoursesContent = styled.div`
        max-width: 1300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;

    const CoursesH1 = styled.h1`
        font-size: 35px;

        @media screen and (max-width: 400px) {
            font-size: 30px;
        }
    `;

    const Filter = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 25px 0;

        @media screen and (max-width: 840px) {
            margin-top: 0;
        }
    `;

    const FilterBtn = styled.p`
        margin: 0 25px;
        border: ${({activeCat}) => (activeCat ? '1px solid #EF8A56' : '1px solid #d3d3d3')};
        color: ${({activeCat}) => (activeCat ? '#EF8A56' : '#000;')};
        padding: 3px 25px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: #fff;
            background: #000
        }

        @media screen and (max-width: 900px) {
            font-size: 13px;
        }

        @media screen and (max-width: 840px) {
            margin-top: 30px;
        }
    `;

    const Courses = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    `;

    const [activeCat, setactiveCat] = useState(true);

    const changeCategory = () => {
        setactiveCat(!activeCat);
    }

    return (
        <>
            <AllCoursesContainer>
                <AllCoursesContent>
                    <CoursesH1>Explore Our Courses</CoursesH1>
                    <Filter>
                        <FilterBtn activeCat={activeCat}>Ecommerce</FilterBtn>
                        <FilterBtn>Investing</FilterBtn>
                        <FilterBtn>Self-Media</FilterBtn>
                        <FilterBtn>Marketing</FilterBtn>
                        <FilterBtn>Freelancing</FilterBtn>
                    </Filter>
                    <Courses>
                        <CourseCards {...Course1} />
                        <CourseCards {...Course2} />
                        <CourseCards {...Course3} />
                        <CourseCards {...Course4} />
                        <CourseCards {...Course5} />
                        <CourseCards {...Course6} />
                        <CourseCards {...Course7} />
                        <CourseCards {...Course8} />
                    </Courses>
                </AllCoursesContent>
            </AllCoursesContainer>

        </>
    )
}

export default AllCourses