import { useGSAP } from '@gsap/react'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import gsap from 'gsap'
import React, { useRef } from 'react'
import * as THREE from "three";
const cone = new THREE.ConeGeometry(1, 1.5, 4)
const box = new THREE.BoxGeometry(1, 1, 1)
const colors = [
    "#ba8eed",
    "#96b2a8",
    "#8ea5dd",
    "#e5adfc",
    "#9b8e7f",
    "#8cdb96",
    "#aaa3ea",
    "#adcce5",
    "#adbaea",
    "#b5ba9b",
    "#eaf4af",
    "#b5af8c",
    "#d687f4",
    "#adf7b5",
    "#a0db9e",
    "#a389a3",
    "#a0bfcc",
    "#ff9be8",
    "#8796d1",
    "#efb7ea",
]
const JungleExperience = () => {
    const { camera } = useThree();
    const light = useRef();
    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".jungle_design",
                    start: "top top",
                    end: "+=1000%",
                    pin: true,
                    scrub: 1,
                }
            })
            .to(camera.position, {
                z: 0,
            })
            .to(camera.rotation, {
                z: Math.PI / 4
            }, "<")

            .to(camera.position, {
                x: -50,
                z: -50,
            })
            .to(camera.rotation, {
                z: 0
            }, "<")

            .from(light.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 0.1,
            })

    })
    const planeScale = {
        x: 200,
        z: 200,
    };
    return (
        <>
            {/* <OrbitControls /> */}
            {/* <axesHelper /> */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#3c3c3c" />
                <planeGeometry
                    args={[planeScale.x, planeScale.z]}
                />
            </mesh>
            <mesh
                position={[-50, 0, -56]}
                ref={light}
            >
                <meshBasicMaterial color="#f00" />
                <cylinderGeometry />
            </mesh>
            <group>
                {
                    Array.from({ length: 1000 }).map((_, index) => {
                        let random = Math.floor(gsap.utils.random(0, colors.length));

                        // Create a new material with a unique color for each mesh
                        const uniqueMaterial = new THREE.MeshBasicMaterial({
                            color: new THREE.Color(colors[random]),
                        });

                        let position = {
                            x: gsap.utils.random(-planeScale.x / 2, planeScale.x / 2),
                            z: gsap.utils.random(-planeScale.z / 2, planeScale.z / 2),
                        };
                        return (
                            <group
                                name={`tree-${index}`}
                                key={`tree-${index}`}
                            >
                                <mesh
                                    geometry={cone}
                                    position={[position.x, 1.5, position.z]}
                                    material={uniqueMaterial}
                                />
                                <mesh
                                    geometry={box}
                                    material={uniqueMaterial}
                                    position={[position.x, 0.5, position.z]}
                                />
                            </group>
                        );
                    })
                }
            </group>
        </>
    )
}

export default JungleExperience
