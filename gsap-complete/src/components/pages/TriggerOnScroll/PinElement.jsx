import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import React, { useRef } from 'react'

const PinElement = () => {
    const box = useRef();
    const tl = useRef();
    useGSAP(() => {
        gsap.to(box.current, {
            rotate: 360,
            x: 400,
            scrollTrigger: {
                trigger: box.current,
                pin: true, // can be element to be pinned
                start: "center center",
                end: "top top",
                // markers: true,
                scrub: true,
            }
        })
        tl.current = gsap.timeline();
        tl.current.from(
            ".box-b",
            {
                xPercent: -100
            }
        )
        tl.current.from(
            ".box-c",
            {
                xPercent: 100
            }
        )
        tl.current.from(
            ".box-d",
            {
                yPercent: -100
            }
        )
        ScrollTrigger.create({
            animation: tl.current,
            trigger: "#pinned_sections",
            pin: true,
            scrub: 2,
            start: "top top",
        })

        ScrollTrigger.create({
            trigger: ".no_space_pin",
            pin: true,
            // end: "+=100%",
            markers: true,
            pinSpacing: false,

        })
    })
    return (
        <div>
            <h2 className="title">Pin Element</h2>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    border: "2px solid orange",
                    marginBottom: "50vh",
                    borderRadius: "10px",
                }}
                ref={box}
                className="center s_txt"
            >
            </div>
            <div style={{ height: "100dvh" }} />
            <div id="pinned_sections" className="pinned_sections" style={{ overflow: "hidden" }}>
                <div className="position-relative">
                    <div className="box  box-a d-flex justify-content-center align-items-center" style={{ height: "100dvh", background: "#621c6f" }} >Box A </div>
                    <div className="box  box-b d-flex justify-content-center align-items-center" style={{ height: "100dvh", width: "100%", background: "#404024", position: "absolute", top: "0", left: 0, }}>Box B</div>
                    <div className="box  box-c d-flex justify-content-center align-items-center" style={{ height: "100dvh", width: "100%", background: "#272719", position: "absolute", top: "0", left: 0, }}>Box C</div>
                    <div className="box  box-d d-flex justify-content-center align-items-center" style={{ height: "100dvh", width: "100%", background: "#6f461c", position: "absolute", top: "0", left: 0, }}>Box D</div>
                </div>
            </div>
            <div style={{ height: "100dvh" }} />
            <div className="no_space_pin d-flex align-items-center justify-content-center" style={{ background: "white", height: "400px" }}>
                <h2 className="title text-center text-dark">
                    Bottom Padding For Pinning is False
                </h2>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ position: "relative", zIndex: 10, height: "100dvh", background: "#621c6f" }} >Box A </div>
            <div style={{ height: "100dvh" }} />
        </div>
    )
}

export default PinElement
