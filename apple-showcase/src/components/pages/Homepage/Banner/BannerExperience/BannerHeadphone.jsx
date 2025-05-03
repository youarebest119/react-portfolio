import { useGSAP } from '@gsap/react';
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useControls } from 'leva';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

const BannerHeadphone = () => {
    const model = useGLTF("/models/colorfull-headphones.glb");
    const { camera } = useThree();

    useGSAP(() => {
        model.scene.scale.setScalar(0.6)

        gsap
            .timeline({})
            .from(model.scene.position, {
                y: 1,
                ease: "back",
                duration: 1,
            })
            .from(model.scene.rotation, {
                y: Math.PI / 2,
                ease: "back",
                duration: 1,
            }, "0")
            .to(".banner_content h1", {
                opacity: 1,
                duration: 0.6,
                scale: 1,
            }, "=-1")

        gsap
            .timeline().
            to(camera.position, {
                x: 0.5,
                scrollTrigger: {
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    // pinSpacing: "-50dv",
                    // pinSpacer: ".page_video",
                    trigger: ".banner_design",
                },
            })
        gsap.timeline({
            scrollTrigger: {
                scrub: true,
                start: "50% 50%",
                end: "+=800",
                trigger: ".banner_content",
            }
        })
            .to(".banner_content .h1", {
                opacity: 0,
                scale: 2,
                duration: 1,
            })
            .to(".banner_content h2", {
                opacity: 1,
                scale: 1,
            }, "=-0.1")
            .to(".banner_content h2", {
                opacity: 0,
                scale: 1.2,
            }, "=-0.05")

        gsap
            .timeline()
            .to(".page_video", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".page_video",
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                }
            })
            .to(".page_video video", {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".page_video video",
                    start: "top top",
                    end: "+=200",
                    scrub: true,
                }
            })
            .to(".page_video",{
                opacity: 0,
                scrollTrigger: {
                    trigger: ".text_section",
                    start: "center center",
                    scrub: true,
                }
            })
    })
    return (
        <>
            {/* <OrbitControls /> */}
            <primitive object={model.scene} />
            <ambientLight intensity={2.5} />
            <directionalLight shadow-normalBias={0.04} castShadow position={[1, 2, 3]} intensity={4.5} />
            {/* <mesh>
                <meshBasicMaterial />
                <boxGeometry />
            </mesh> */}
        </>
    )
}

export default BannerHeadphone
