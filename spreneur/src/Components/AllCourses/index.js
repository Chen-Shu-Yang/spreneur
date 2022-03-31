import React from 'react';
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
    `;

    const Filter = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25px 0;
    `;

    const FilterBtn = styled.p`
        margin: 0 25px;
        border: 1px solid #d3d3d3;
        padding: 3px 25px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            color: #fff;
            background: #000
        }

        &.active {
            border: 1px solid #EF8A56;
            color: #EF8A56;
        }
    `;

    const Courses = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    `;

  return (
    <>
    <AllCoursesContainer>
        <AllCoursesContent>
            <CoursesH1>Explore Our Courses</CoursesH1>
            <Filter>
                <FilterBtn className='active'>Ecommerce</FilterBtn>
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