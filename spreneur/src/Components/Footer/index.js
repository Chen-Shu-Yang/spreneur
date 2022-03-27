import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from 'react-icons/fa';
import { FooterContainer, FooterContent, SocialIcons, SocialIcon, Copyright } from './FooterElements';

const Testimonial = () => {
    return (
        <>
            <FooterContainer>
                <FooterContent>
                    <SocialIcons>
                        <SocialIcon>
                            <FaFacebook />
                        </SocialIcon>
                        <SocialIcon>
                            <FaInstagram />
                        </SocialIcon>
                        <SocialIcon>
                            <FaYoutube />
                        </SocialIcon>
                        <SocialIcon>
                            <FaTwitter />
                        </SocialIcon>
                        <SocialIcon>
                            <FaPinterest />
                        </SocialIcon>
                    </SocialIcons>
                        <Copyright>Copyright 2022 SPRENEUR - All Rights Reserved</Copyright>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

export default Testimonial