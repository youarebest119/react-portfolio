import React from 'react'
import video from "../../../../assets/videos/about-slider-video.mp4";
import "./AboutSlider.scss";
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AboutSlider = () => {
    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".about_slider",
                    pin: true,
                    end: "+=200%",
                    markers: false,
                    // toggleActions: "play reverse none none",
                    scrub: 1,
                }
            })
            .to(".about_slider", {
                clipPath: "circle(100% at 50% 50%)",
            })
    })
    return (
        <section className='about_slider'>
            <div className="about_slider_in">
                <video autoPlay loop muted>
                    <source src={video} />
                </video>
            </div>
        </section>
    )
}

export default AboutSlider
