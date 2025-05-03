import React from 'react'
import "./Me.scss";
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import video from "../../../../assets/videos/about-slider-video.mp4";
import SplitText from 'gsap-trial/SplitText';

const Me = () => {
    useGSAP(() => {
        const paragraph = new SplitText(".me_design p", {
            linesClass: "l",
            wordsClass: "w",
            charsClass: "c",
        })
        const title = new SplitText(".me_design h3", {
            linesClass: "l",
            wordsClass: "w",
            charsClass: "c",
        })
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".me_design",
                    start: "top top",
                    scrub: 1,
                    pin: true,
                    end: "+=200%",
                }
            })
            .from(gsap.utils.shuffle([...paragraph.words, ...title.words]), {
                duration: 0.1,
                stagger: 0.05,
                // opacity: 0,
                color: "rgba(255, 255, 255, 0.2)",
            })
            .to(".about_slider_in", {
                duration: 2,
                clipPath: "circle(100% at 50% 50%)",
            }, "+=0.2")


        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".me_in p",
                    start: "top 50%",
                    toggleActions: "play none none reverse",
                }
            })
            .from(paragraph.words, {
                yPercent: 100,
                // stagger: 0.05,
                // opacity: 0,
            })
    })

    return (
        <section className="me_design">
            <Container fluid>
                <div className="me_in">
                    <h3>About Me</h3>
                    <p>I’m a developer and designer who believes that great design is not only strong, but also unique and accessible in its own right</p>
                </div>
            </Container>
            <div className="about_slider_in">
                <video autoPlay loop muted>
                    <source src={video} />
                </video>
            </div>
        </section>
    )
}

export default Me
