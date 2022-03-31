import React from 'react';
import styled from 'styled-components';
import AllPosts from '../Components/AllPosts';
import BlogIntro from '../Components/BlogIntro';
import ListingCards from '../Components/ListingCards';
import { recentPost1, recentPost2, recentPost3, recentPost4 } from '../Components/ListingCards/data'
import Pagination from '../Components/Pagination';


const Blog = () => {

  const BlogContainer = styled.div`
    margin: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const ListingContainer = styled.div`
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: -30px;
  `;

  const ListingH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    margin-bottom: 35px;
  `;

  return (
    <>
      <BlogContainer>
        <ListingH1>Recent Posts</ListingH1>
        <ListingContainer>
          <ListingCards {...recentPost1} />
          <ListingCards {...recentPost2} />
          <ListingCards {...recentPost3} />
          <ListingCards {...recentPost4} />
        </ListingContainer>
        <BlogIntro />
        <AllPosts />
        <Pagination />
      </BlogContainer>

    </>
  )
}

export default Blog