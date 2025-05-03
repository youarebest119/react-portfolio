import { useGSAP } from '@gsap/react';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import React from 'react';

const AboutExperience = ({ scene }) => {

    return (
        <>
            <ambientLight intensity={2.5} />
            <primitive object={scene} />
        </>
    )
}

export default AboutExperience
