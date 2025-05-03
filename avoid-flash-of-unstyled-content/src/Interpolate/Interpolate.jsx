import React, { useRef } from 'react'
import "./Interpolate.scss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Interpolate = () => {
    const ref = useRef();
    useGSAP(() => {
        let progressing = gsap.quickTo(".progress_dot", "x");

        gsap.timeline({
            scrollTrigger: {
                trigger: ".interpolate",
                start: "top top",
                pin: true,
                onUpdate: ({ progress }) => {
                    let value = gsap.utils.interpolate(0, ref.current.clientWidth, progress);
                    progressing(value);
                }
            }
        })
    })
    return (
        <section className="interpolate">
            <h2>Interpolate</h2>
            <div className="my_progress" ref={ref}>
                <div className="progress_dot"></div>
            </div>
        </section>
    )
}

export default Interpolate
