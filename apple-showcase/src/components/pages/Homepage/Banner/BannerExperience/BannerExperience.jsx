import { Canvas } from '@react-three/fiber'
import React from 'react'
import BannerHeadphone from './BannerHeadphone'
import { Leva } from 'leva'

const BannerExperience = () => {
    return (
        <>
            <Canvas
                className="banner_experience"
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [- 4, 0, 0]
                }}
            >
                <BannerHeadphone />
            </Canvas>
            <Leva />
        </>
    )
}

export default BannerExperience
