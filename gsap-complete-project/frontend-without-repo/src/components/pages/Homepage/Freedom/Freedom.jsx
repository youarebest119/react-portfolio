import React from 'react'
import "./Freedom.scss";
import { Container } from 'react-bootstrap';
import { GetText } from '../Electric/Electric';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Freedom = () => {

    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".freedom_design",
                    scrub: 1,
                    start: "top 50%",
                    end: "bottom 70%",
                    markers: false,
                }
            })
            .from(".freedom_in h3 > div:last-child span", {
                opacity: 0,
                stagger: 0.05,
                // duration: 2,
            })
            .to(".freedom_in h3 > div:last-child span", {
                opacity: 0,
                stagger: 0.05,
                // duration: 2,
            })
    });
    return (
        <section className="freedom_design">
            <Container>
                <div className="freedom_in">
                    <h3>
                        <div>
                            <GetText text="True freedom is just around the corner." />
                        </div>
                        <div>
                            <GetText text="True freedom is just around the corner." />
                        </div>
                    </h3>
                </div>
            </Container>
        </section>
    )
}

export default Freedom
