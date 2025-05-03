import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import "./Banner.scss";
import BannerExperience from './BannerExperience';

const Banner = () => {
    const ref = useRef();
    return (
        <section className="about_banner" ref={ref}>
            <Canvas
                className="canvas"
                camera={{
                    fov: 75,
                    position: [0, 0, 8],
                }}
            >
                <BannerExperience banner={ref} />
            </Canvas>
            <Container>
                <h2>Hi! I'm Rosa, great to have you here</h2>
                <h1>
                    I
                    turn your ideas <br /> into <div className='word'><span></span>creative</div> impact!
                </h1>
            </Container>
        </section>
    )
}

export default Banner
