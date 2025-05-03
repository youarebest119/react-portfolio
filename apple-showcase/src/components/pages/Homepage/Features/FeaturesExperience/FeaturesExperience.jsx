import { Canvas } from '@react-three/fiber'
import React from 'react'
import FeaturesHeadphone from './FeaturesHeadphone'
import { Leva } from 'leva'

const FeaturesExperience = () => {
    return (
        <>
            <div className="features_experience">
                <Canvas
                    // className="features_experience"
                    shadows
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 200,
                        position: [- 3, 0, 0]
                    }}
                >
                    <FeaturesHeadphone />
                </Canvas>
            </div>
            <Leva />
        </>
    )
}

export default FeaturesExperience
