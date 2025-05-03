import { useGSAP } from '@gsap/react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useControls } from 'leva';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const FeaturesHeadphone = () => {
    const model = useGLTF("/models/gaming-headsets.glb");
    // const { camera } = useThree();

    useGSAP(() => {
        model.scene.position.set(0, -1, -1)
        model.scene.rotation.y = -Math.PI / 2

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".features_experience",
                    pin: ".features_experience",
                    // end: "+=3000",
                    markers: true,
                    start: 'top top',
                    end: () => `+=${(window.innerHeight * 3) - window.innerHeight}`,
                }
            })
            .to(model.scene.position, {
                x: 0,
                y: -1,
                z: -1,
                ease: "back",
                duration: 1,
                // scrollTrigger: {
                //     trigger: ".features_design_in",
                //     markers: true,
                // }
            }).to(model.scene.rotation, {
                y: - Math.PI / 2,
                ease: "back",
                duration: 1,
            }, "0")
            .to(model.scene.position, {
                x: 0, y: - 1, z: 1,
                scrollTrigger: {
                    trigger: ".feature_box_1",
                    scrub: true,
                    immediateRender: false,
                    start: "top top",
                }
            })
            .to(model.scene.rotation, {
                y: Math.PI * 1 + 0.3,
                scrollTrigger: {
                    trigger: ".feature_box_1",
                    scrub: true,
                    immediateRender: false,
                    start: "top top",
                }
            })
            .to(model.scene.position, {
                x: 0, y: -1, z: -1,
                scrollTrigger: {
                    trigger: ".feature_box_2",
                    scrub: true,
                    immediateRender: false,
                    start: "top top",
                    end: "bottom top",
                }
            })
            .to(model.scene.rotation, {
                y: Math.PI * 0.5,
                scrollTrigger: {
                    trigger: ".feature_box_2",
                    scrub: true,
                    immediateRender: false,
                    start: "top top",
                    end: "bottom top",
                }
            })


    })
    return (
        <>
            {/* <OrbitControls onChange={() => {
                console.log(camera.position);
                // console.log(camera.rotation);
            }} /> */}
            <primitive object={model.scene} />
            <ambientLight intensity={2.5} />
            <directionalLight shadow-normalBias={0.04} castShadow position={[1, 2, 3]} intensity={4.5} />
        </>
    )
}

export default FeaturesHeadphone
