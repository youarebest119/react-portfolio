import React, { useRef } from 'react'
import img1 from "../../../assets/images/sample-image-1.png";
import img2 from "../../../assets/images/sample-image-2.jpeg";
import img3 from "../../../assets/images/sample-image-3.jpeg";
import img4 from "../../../assets/images/sample-image-4.jpeg";
import "./Timeline.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Timeline = () => {
    const scope = useRef();
    const imageOne = useRef();
    const tl = useRef();
    const { contextSafe } = useGSAP(() => {
        tl.current = gsap.timeline();
        tl.current.from("h2", {
            y: -100,
        })
        tl.current.from("h1 span", {
            y: -100,
            opacity: 0,
            stagger: 0.1,
        },)
        tl.current.from(".images img", {
            y: -100,
            opacity: 0,
            ease: "back.out",
            stagger: 0.1,
        })
        tl.current.from("h3 span", {
            y: -100,
            opacity: 0,
            stagger: 0.1,
        })
        tl.current.fromTo(".images img", {
            rotate: -15,
        }, {
            rotate: 15,
            repeat: -1,
            yoyo: true,
            ease: "power4.inOut",
            duration: 2,
            stagger: 0.1,
        })
    }, {
        scope,
    });
    return (
        <>
            <div ref={scope} className="timeline_page">
                <h2>Emely Smith</h2>
                <h1>
                    <span>Capturing The Beauty</span> <br />
                    <span>Of your Journey.</span>
                </h1>
                <div className="images">
                    <h3>
                        {
                            "Extra Text".split("").map((item, index) => {
                                return (
                                    <span key={index + item}>
                                        {item === "" ? <>&nbsp;</> : item}
                                    </span>
                                )
                            })
                        }
                    </h3>
                    <img ref={imageOne} src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
                <button onClick={
                    contextSafe((() => {
                        tl.current.pause();
                    }))
                }>Pause</button>
                <button onClick={
                    contextSafe((() => {
                        tl.current.play();
                    }))
                }>Play</button>
            </div>
        </>
    )
}

export default Timeline
