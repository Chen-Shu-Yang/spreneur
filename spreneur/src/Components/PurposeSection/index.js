import React from 'react';
import { PurposeSection, PurposeContainer, PurposeH1, PurposeP, VideoContent } from './PurposeElements';
import Video from '../../Videos/video.mp4'

const Purpose = () => {
    return (
        <>
            <PurposeSection>
                <PurposeH1>What You Will Learn?</PurposeH1>
                <PurposeContainer>
                    <PurposeP>
                        Imagine having hundreds of lessons and activities for 5th-8th grade science at your fingertips.<br /><br />
                        The membership gives you access to all of the Kesler Science classroom materials plus hours of live and recorded professional development with Steve Spangler.
                    </PurposeP>
                    <VideoContent autoPlay loop muted src={Video} type='video/mp4' />
                </PurposeContainer>
            </PurposeSection>
        </>
    )
}

export default Purpose