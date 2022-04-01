import React from 'react';
import { EventApplicationContainer, EventApplicationContent, EventApplicationP, Form, NameInput, EmailInput, JointBtn } from './EventApplicationElements';

const EventApplication = () => {
    return (
        <EventApplicationContainer>
            <EventApplicationContent>
                <EventApplicationP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo.</EventApplicationP>
                <Form action="#">
                    <NameInput type='text' placeholder='Your First Name' required />
                    <EmailInput type='email' placeholder='Your Email Address' required />
                    <JointBtn type='submit'>Join Us Now!</JointBtn>
                </Form>
            </EventApplicationContent>
        </EventApplicationContainer>
    )
}

export default EventApplication