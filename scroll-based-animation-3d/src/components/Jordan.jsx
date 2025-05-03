import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

const Jordan = () => {
    const { nodes, materials } = useGLTF("/air_jordan_1.glb");
    const { scene, camera } = useThree();
    const tl = gsap.timeline();
    useGSAP(() => {
        new ScrollTrigger({});
        tl.to(camera.position, {
            x: 5,
            y: 4.0,
            z: 2.8,
            scrollTrigger: {
                trigger: ".second-section",
                start: "top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
            },
        })
            .to(scene.position, {
                x: 3.01,
                y: 0.76,
                z: 3.7,
                scrollTrigger: {
                    trigger: ".second-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                },
            })

            .to(scene.rotation, {
                x: -0.53,
                y: -3.48,
                z: -0.21,
                scrollTrigger: {
                    trigger: ".second-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                },
            })

            // component - BuyNow.tsx
            .to(camera.position, {
                x: 5,
                y: 3.8,
                z: 2.8,
                scrollTrigger: {
                    trigger: ".third-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                },
            })
            .to(scene.position, {
                x: 2.31,
                y: 0.01,
                z: -0.7,
                scrollTrigger: {
                    trigger: ".third-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                },
            })
            .to(scene.rotation, {
                x: 0.67,
                y: -12.9,
                z: 0.79,
                scrollTrigger: {
                    trigger: ".third-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                    immediateRender: false,
                },
            });
    })

    return (
        <>
            <directionalLight position={[-2.38, 1.32, 0.74]} />
            <group scale={10} position={[2, 1, -1]} rotation-x={-Math.PI * 0.5}>
                <mesh geometry={nodes.shoe_shoe_0.geometry} material={materials.shoe} />
                <mesh geometry={nodes.shoelace_shoelace_0.geometry} material={materials.shoelace} />
            </group>
        </>
    )
}

export default Jordan
