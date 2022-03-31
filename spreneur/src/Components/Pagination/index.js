import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

const Pagination = () => {
    const PaginationContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: -80px;
`;

    const Pages = styled.ul`
        display: flex;
        align-items: center;
        justify-content: space-around;
`;

    const PageNumber = styled(LinkR)`
        margin: 10px;
        padding: 8px 16px;
        border: 2px solid #000;
        cursor: pointer;
        transition: all 0.3s ease;
        color: #000;

        &:hover {
            background: #000;
            color: #fff;
        } 
`;
    return (
        <>
            <PaginationContainer>
                <Pages>
                    <PageNumber to='/'>1</PageNumber>
                    <PageNumber to='/'>2</PageNumber>
                    <PageNumber to='/'>3</PageNumber>
                    <PageNumber to='/'>4</PageNumber>
                    <PageNumber to='/'>5</PageNumber>
                    <PageNumber to='/'>{'>>'}</PageNumber>
                </Pages>
            </PaginationContainer>
        </>
    )
}

export default Pagination