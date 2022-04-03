import React from 'react';
import { ResourcesContainer, ResourcesCat, ResourcesH1, ResourcesContent, ResourcesBox, ResourcesH2, ResourcesImg } from './ResourcesElements';
import img1 from '../../Img/category-1.jpg';
import img2 from '../../Img/category-2.jpg';
import img3 from '../../Img/category-3.jpg';
import img4 from '../../Img/category-4.png';

const Resources = () => {
  return (
    <>
        <ResourcesContainer>
            <ResourcesContent>
            <ResourcesH1>Resources</ResourcesH1>
            <ResourcesCat>
                <ResourcesBox to='/book'>
                    <ResourcesImg src={img1}></ResourcesImg>
                    <ResourcesH2>Books</ResourcesH2>
                </ResourcesBox>
                <ResourcesBox to='/events'>
                    <ResourcesImg src={img2}></ResourcesImg>
                    <ResourcesH2>Events</ResourcesH2>
                </ResourcesBox>
                <ResourcesBox to='/academy'>
                    <ResourcesImg src={img3}></ResourcesImg>
                    <ResourcesH2>Academy</ResourcesH2>
                </ResourcesBox>
                <ResourcesBox to='/blog'>
                    <ResourcesImg src={img4}></ResourcesImg>
                    <ResourcesH2>Blog</ResourcesH2>
                </ResourcesBox>
            </ResourcesCat>
                
            </ResourcesContent>
        </ResourcesContainer>
    </>
  )
}

export default Resources