import React from 'react';
import styled from 'styled-components';
import ListingCards from '../ListingCards';
import { recentPost1, recentPost2, recentPost3, recentPost4 } from '../ListingCards/data'

const AllPosts = () => {
    const AllPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

    const ListingContainer = styled.div`
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  `;

    const ListingH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    margin-bottom: 35px;
  `;

    return (
        <>
            <AllPostsContainer>
                <ListingH1>All Posts</ListingH1>
                <ListingContainer>
                    <ListingCards {...recentPost1} />
                    <ListingCards {...recentPost2} />
                    <ListingCards {...recentPost3} />
                    <ListingCards {...recentPost4} />
                    <ListingCards {...recentPost1} />
                    <ListingCards {...recentPost2} />
                    <ListingCards {...recentPost3} />
                    <ListingCards {...recentPost4} />
                    <ListingCards {...recentPost1} />
                </ListingContainer>
            </AllPostsContainer>
        </>
    )
}

export default AllPosts