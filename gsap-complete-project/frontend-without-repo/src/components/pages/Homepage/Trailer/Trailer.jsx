import React from 'react'
import "./Trailer.scss";
import { Container } from 'react-bootstrap';
import { GetText } from '../Electric/Electric';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Trailer = () => {

    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".trailer_design",
                    scrub: 1,
                    start: "top 50%",
                    end: "bottom 70%",
                    markers: false,
                }
            })
            .from(".trailer_in h3 > div:last-child span", {
                opacity: 0,
                stagger: 0.05,
                // duration: 2,
            })
            .to(".trailer_in h3 > div:last-child span", {
                opacity: 0,
                stagger: 0.05,
                // duration: 2,
            })
    });
    return (
        <section className="trailer_design">
            <Container>
                <div className="trailer_in">
                    <h3>
                        <div>
                            <GetText text="Pebble is the all-electric trailer designed for get-up-and-go freedom." />
                        </div>
                        <div>
                            <GetText text="Pebble is the all-electric trailer designed for get-up-and-go freedom." />
                        </div>
                    </h3>
                </div>
            </Container>
        </section>
    )
}

export default Trailer
