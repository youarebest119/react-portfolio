import React from 'react'
import "./Jungle.scss";
import { Canvas } from '@react-three/fiber';
import JungleExperience from './JungleExperience/JungleExperience';

const Jungle = () => {

    return (
        <section className="jungle_design">
            <Canvas
                camera={{
                    fov: 75,
                    position: [0, 1.6, 60],
                }}
            >
                <JungleExperience />
            </Canvas>
        </section>
    )
}

export default Jungle
