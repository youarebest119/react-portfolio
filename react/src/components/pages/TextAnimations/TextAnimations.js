import React from 'react';
import OnScrollRotate3dText from './OnScrollRotate3dText/OnScrollRotate3dText';
import FadeUpText from './FadeUpText/FadeUpText';
import TextScrollWithScroller from "./TextScrollWithScroller/TextScrollWithScroller"
import AnimatedNumbers from './AnimatedNumbers/AnimatedNumbers';
import ZoomOut from './ZoomOut/ZoomOut';
import WriteAnimation from './WriteAnimation/WriteAnimation';

const TextAnimations = () => {
    return (
        <>
            <section>
                <h3>
                    <FadeUpText>
                        This Text have fading up animation
                    </FadeUpText>
                </h3>
            </section>
            <TextScrollWithScroller />
            <div style={{ height: '50vh', }} />
            <OnScrollRotate3dText />
            <AnimatedNumbers />
            <ZoomOut />
            <WriteAnimation />
            <div style={{ height: '50vh', }} />
        </>
    )
}

export default TextAnimations
