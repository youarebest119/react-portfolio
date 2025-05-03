import { OrbitControls, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three";
import { useHelper } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import useMousePosition from './useMousePosition';

gsap.registerPlugin(SplitText);

const BannerExperience = ({ banner }) => {
    const [active, setActive] = useState(false);
    const { camera } = useThree()
    const cone = useGLTF("/cone.glb");
    const box = useGLTF("/box.glb");
    const torus = useGLTF("/torus.glb");
    const lightRef = useRef();
    const { x, y } = useMousePosition(banner);

    useEffect(() => {
        document.body.style.overflow = active ? "" : "hidden";
    }, [active])

    // Attach the helper to the light
    // useHelper(lightRef, THREE.DirectionalLightHelper, 2, "red");

    useGSAP(() => {
        gsap.to(camera.position, {
            x: gsap.utils.normalize(0, 1920, x) * 2,
            y: 0.5 - gsap.utils.normalize(0, window.innerHeight, y) * 2,
            duration: 1,
        })
    }, { dependencies: [x, y] })

    useGSAP(() => {
        const text = new SplitText(".about_banner h1", {
            linesClass: "line",
            wordsClass: "w",
            charsClass: "c",
        })
        const subtitle = new SplitText(".about_banner h2", {
            linesClass: "line",
            wordsClass: "w",
            charsClass: "c",
        })
        function sortFromCenter(arr) {
            const result = [];
            const centerIndex = Math.floor((arr.length - 1) / 2);

            for (let i = 0; i <= centerIndex; i++) {
                if (centerIndex - i >= 0) result.push(arr[centerIndex - i]); // Add item to the left of center
                if (centerIndex + i < arr.length && i !== 0) result.push(arr[centerIndex + i]); // Add item to the right of center
            }

            return result;
        }

        gsap
            .timeline(
                {
                    delay: 1,
                    onComplete: () => setActive(true),
                }
            )
            .from(sortFromCenter(subtitle.chars), {
                scale: 0,
                opacity: 0,
                stagger: 0.01,
                duration: 1,
            })
            .to(text.lines, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
            })
            .to(text.lines[0].querySelectorAll(".c"), {
                x: -200,
                stagger: 0.02,
                ease: "back.inOut",
                duration: 1,
            }, "-=0.1")
            .to(text.lines[1].querySelectorAll(".c"), {
                x: 200,
                stagger: 0.02,
                ease: "back.inOut",
                duration: 1,
            }, "<")

            // gsap
            //     .timeline({
            //         defaults: {
            //             duration: 1.8,
            //             ease: "back.out",
            //         }
            //     })
            .to(cone.scene.position, {
                x: 4,
                y: 3,
                duration: 1.8,
                ease: "back.out",
            })
            .to(box.scene.position, {
                x: -4,
                y: -3,
                duration: 1.8,
                ease: "back.out",
            }, "<")
            .to(torus.scene.position, {
                x: -4,
                y: 3,
                duration: 1.8,
                ease: "back.out",
            }, "<")
            .from(cone.scene.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1.8,
                ease: "back.out",
            }, "<")
            .from(box.scene.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1.8,
                ease: "back.out",
            }, "<")
            .from(torus.scene.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1.8,
                ease: "back.out",
            }, "<")
            .to(".about_banner h1 .word span", {
                scaleX: 1,
                duration: 1,
                ease: "back.inOut",
            })

        gsap.timeline()
            .to(cone.scene.rotation, {
                // y: 360,
                x: Math.PI,
                z: Math.PI,
                duration: 40,
                repeat: -1,
            })
            .to(box.scene.rotation, {
                // y: 360,
                x: -Math.PI,
                z: Math.PI,
                duration: 40,
                repeat: -1,
            }, "<")
            .to(torus.scene.rotation, {
                // y: 360,
                x: Math.PI,
                z: -Math.PI,
                duration: 40,
                repeat: -1,
            }, "<")
    })

    useEffect(() => {
        if (cone && box) {
            cone.materials["Material.002"].color = new THREE.Color("#0262d7")
            // cone.scene.scale.setScalar(0);

            // console.log(box);
            box.materials["Material.002"].color = new THREE.Color("#f84c18")
            // box.scene.scale.setScalar(0);

            // console.log(box);
            torus.materials["Material.002"].color = new THREE.Color("#ff24d3")
            // torus.scene.scale.setScalar(0.4);
        }
    }, [])

    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 4, 0]} ref={lightRef} intensity={5} />
            {/* <OrbitControls /> */}
            {/* <directionalLightHelper /> */}
            <primitive object={cone.scene} />
            <primitive object={box.scene} />
            <primitive object={torus.scene} />
            {/* <mesh>
                <boxGeometry />
                <meshBasicMaterial color="grey" />
            </mesh> */}
        </>
    )
}

export default BannerExperience
