import { Canvas } from "@react-three/fiber";
import "./About.scss";
import AboutExperience from "./AboutExperience";
import { Button, Container } from "react-bootstrap";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

const About = () => {
    const [rotated, setRotated] = useState(false);
    const { scene } = useGLTF("/models/gaming-headsets-2.glb");

    const meshes = scene.children[0].children;

    const { contextSafe } = useGSAP(() => {
        scene.position.set(0, -1, 0);
        scene.rotation.set(0, - Math.PI / 2, 0);

        gsap.from(scene.position, {
            y: -4,
            ease: "back.inOut",
            duration: 1,
            scrollTrigger: {
                trigger: ".about_in",
                // markers: true,
                start: "top top",
                // end: () => `${window.innerHeight * 4}`,
                // toggleActions: "play reverse play reverse",
                immediateRender: false,
            }
        })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".about_design",
                    pin: true,
                    scrub: true,
                    end: () => `+=${(window.innerHeight * 4)}`,
                }
            })
            .to(scene.rotation, {
                y: Math.PI * 0.2,
            })
            .to(".about_one", {
                opacity: 1,
            })
            .from(".about_one span", {
                width: 0,
            })
            .to(".about_one", {
                opacity: 0,
            }, "+=0.5")

            .to(scene.rotation, {
                y: -Math.PI * 0.5,
            })
            .to(".about_two", {
                opacity: 1,
            })
            .from(".about_two span", {
                width: 0,
            })
            .to(".about_two", {
                opacity: 0,
            }, "+=0.5")

            .to(scene.rotation, {
                y: -Math.PI * 0.2,
            })
            .to(".about_three", {
                opacity: 1,
            })
            .from(".about_three span", {
                width: 0,
            })
            .to(".about_three", {
                opacity: 0,
            }, "+=0.5")
    });

    const handleClick = contextSafe(() => {
        setRotated(prev => !prev);
        gsap.to(meshes[0].rotation, {
            y: !rotated ? 2 : 0,
        })
    })

    return (
        <>
            <section className="about_design">
                <Container>
                    <div className="about_in">
                        <Canvas
                            shadows
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 200,
                                position: [- 3, 0, 0]
                            }}
                        >
                            <AboutExperience scene={scene} />
                        </Canvas>
                        <div className="about_one about_box">
                            <span className='about_box_line'></span>
                            <h2>HeadSets</h2>
                        </div>
                        <div className="about_two about_box">
                            <span className='about_box_line'></span>
                            <h2>Mic</h2>
                            <Button onClick={handleClick}>Rotate It</Button>
                        </div>
                        <div className="about_three about_box">
                            <span className='about_box_line'></span>
                            <h2>HeadPhones</h2>
                        </div>
                    </div>
                </Container>
            </section>
            <div className="about_next_section" style={{ border: "2px solid white" }}></div>
        </>
    )
}

export default About
