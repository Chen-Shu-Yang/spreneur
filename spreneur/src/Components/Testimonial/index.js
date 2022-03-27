import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialContainer, TestimonialH1, TestimonialContent, TestimonialBox, MobileIcon, TestimonialP, TestimonialName } from './TestimonialElements';

const Testimonial = () => {
    return (
        <>
            <TestimonialContainer>
                <TestimonialH1>Testimonials</TestimonialH1>
                <TestimonialContent>
                    <TestimonialBox>
                        <MobileIcon>
                            <FaQuoteLeft />
                        </MobileIcon>
                        <TestimonialP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </TestimonialP>
                        <TestimonialName>Rocquina V.</TestimonialName>
                    </TestimonialBox>

                    <TestimonialBox>
                        <MobileIcon>
                            <FaQuoteLeft />
                        </MobileIcon>
                        <TestimonialP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </TestimonialP>
                        <TestimonialName>Rocquina V.</TestimonialName>
                    </TestimonialBox>

                    <TestimonialBox>
                        <MobileIcon>
                            <FaQuoteLeft />
                        </MobileIcon>
                        <TestimonialP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </TestimonialP>
                        <TestimonialName>Rocquina V.</TestimonialName>
                    </TestimonialBox>

                    <TestimonialBox>
                        <MobileIcon>
                            <FaQuoteLeft />
                        </MobileIcon>
                        <TestimonialP>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </TestimonialP>
                        <TestimonialName>Rocquina V.</TestimonialName>
                    </TestimonialBox>
                </TestimonialContent>
            </TestimonialContainer>
        </>
    )
}

export default Testimonial