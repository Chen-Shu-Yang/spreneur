import React from 'react'
import styled from 'styled-components'

const CourseCards = ({ Img, alt, recentPostH1, hostName, categories }) => {
    const CourseCardsContainer = styled.div`
        width: 280px;
        height: 360px;
        margin: 0 15px;
        margin-bottom: 30px;
        background: #fff;
        box-shadow: 0 0 15px 0 rgba(0,0,0,0.4);
    `;

    const CourseCardImg = styled.img`
        width: 100%;
        height: 50%;
        object-fit: cover;
    `;

    const CourseCardContent = styled.div`
        margin: 15px 15px;
        display: flex;
        flex-direction: column;
    `;

    const CourseCardH1 = styled.h3`
        font-family: 'Ubuntu', sans-serif;
        font-size: 25px;
        font-weight: 700px;
        font-family: 'Ubuntu', sans-serif;
        margin-bottom: 45px;
    `;

    const CourseHost = styled.small`
        font-size: 10px;
        margin-bottom: 10px;
    `

    const CourseCategory = styled.small`
        font-size: 10px;
    `;

    return (
        <>
            <CourseCardsContainer>
                <CourseCardImg src={Img} alt={alt}></CourseCardImg>
                <CourseCardContent>
                    <CourseCardH1>{recentPostH1}</CourseCardH1>
                    <CourseHost>{hostName}</CourseHost>
                    <CourseCategory>{categories[0]}, {categories[1]}, {categories[2]}</CourseCategory>
                </CourseCardContent>

            </CourseCardsContainer>
        </>
    )
}

export default CourseCards