import React from 'react';
import { Button } from '../../ButtonElements';
import { BookContainer, BookContent, BookImgSection, BookImg, BookDes, BookH1, BookP } from '../Book/BookElements';

const OneBook = ({ Img, alt, bookTitle, bookDescription }) => {
    return (
        <>
            <BookContainer>
                <BookContent>
                    <BookImgSection>
                        <BookImg src={Img} alt={alt}></BookImg>
                    </BookImgSection>
                    <BookDes>
                        <BookH1>{bookTitle}</BookH1>
                        <BookP>{bookDescription}</BookP>
                        <Button to='/'>Order Now!</Button>
                    </BookDes>
                </BookContent>
            </BookContainer>
        </>
    )
}

export default OneBook