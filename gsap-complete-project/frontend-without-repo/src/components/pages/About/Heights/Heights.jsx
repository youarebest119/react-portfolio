import React from 'react'
import heights from "../../../../assets/images/home0.jpeg.webp";
import "./Heights.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Heights = () => {
    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".heights_design",
                    pin: true,
                    start: "top top",
                    // end: "bottom bottom",
                    end: "+=500%",
                    scrub: 1.5,
                    markers: false,
                }
            })
            .to(".heights_design > div:first-child", {
                scaleY: 0,
                duration: 1,
            })
            .to(".heights_design > div:nth-child(2)", {
                scaleY: 0,
                duration: 1.1,
            }, "<+=0.05")
            .to(".heights_design > div:nth-child(3)", {
                scaleY: 0,
                duration: 1,
            }, "<+=0.07")
            .to(".heights_design > div:nth-child(4)", {
                scaleY: 0,
                duration: 1.1,
            }, "<+=0.03")
            .to(".heights_design > div:nth-child(5)", {
                scaleY: 0,
                duration: 1,
            }, "<+=0.04")
            .to(".heights_design > div:nth-child(6)", {
                scaleY: 0,
                duration: 1.2,
            }, "<+=0.04")
            .to(".heights_design > div:nth-child(7)", {
                scaleY: 0,
                duration: 1,
            }, "<+=0.05")
    })
    return (
        <section className="heights_design">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    )
}

export default Heights;
