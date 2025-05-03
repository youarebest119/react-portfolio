import React from 'react'
import "./Clamp.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Clamp = () => {
    const { contextSafe } = useGSAP(() => { })
    const handleMove = contextSafe((event) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = (clientX - left) - (width / 2);
        const y = (clientY - top) - (height / 2);
        let xClamp = gsap.utils.clamp(-100, 100, x);
        let yClamp = gsap.utils.clamp(-100, 100, y);

        gsap.to(".clamp_btn", {
            x: xClamp,
            y: yClamp,
        });
    })
    const handleOut = contextSafe(() => {
        gsap.to(".clamp_btn", {
            x: 0,
            y: 0,
        });
    })
    return (
        <section className="clamp">
            <h2>Clamp</h2>
            <div className="clamp_box" onMouseMove={handleMove} onMouseOut={handleOut}>
                <div className="outline_box">
                    <button className="clamp_btn">Hover Me</button>
                </div>
            </div>
        </section>
    )
}

export default Clamp
