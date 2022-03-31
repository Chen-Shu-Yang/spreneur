import React from 'react'
import styled from 'styled-components'
import OneBook from '../Components/Book';
import Pagination from '../Components/Pagination';
import { Book1, Book2, Book3, Book4 } from '../Components/Book/data';

const Book = () => {

    const BookSection = styled.div`
        margin: 120px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    const BookList = styled.ul``;

    const BookItem = styled.li``;

    return (
        <>
            <BookSection>
                <BookList>
                    <BookItem><OneBook {...Book1} /></BookItem>
                    <BookItem><OneBook {...Book2} /></BookItem>
                    <BookItem><OneBook {...Book3} /></BookItem>
                    <BookItem><OneBook {...Book4} /></BookItem>
                </BookList>
                <Pagination />
            </BookSection>
        </>

    )
}

export default Book