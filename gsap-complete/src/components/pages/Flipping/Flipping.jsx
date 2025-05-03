import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import "./Flipping.scss";
import { Flip } from 'gsap/Flip';
const Flipping = () => {
    const { contextSafe } = useGSAP();
    const box = useRef();
    const flexBox = useRef();
    const click = contextSafe(() => {
        const state = Flip.getState(box.current);
        box.current.classList.toggle("active")
        Flip.from(state, {
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.1,
            scale: true,
        })
    })
    const state = useRef();
    const fit = contextSafe(() => {
        if (state.current) {
            Flip.fit(".box-a", state.current, {
                duration: 1,
            })
            state.current = undefined;
        } else {
            state.current = Flip.getState(".box-a");
            Flip.fit(".box-a", ".small_box", { // target can be previous state as in click function
                scale: true,
                duration: 1,
                fitChild: ".inner-box",
            })
        }
    })

    const reorder = contextSafe(() => {
        const state = Flip.getState(`#flex-box , #flex-box .box`);
        flexBox.current.classList.toggle("flex-column")
        Flip.from(state, {
            duration: 0.4,
            absolute: true,
            ease: "power1.inOut",
        })
    })

    useGSAP(() => {
        Flip.fit(".box-f", ".box-f-target", {
            scale: true,
            duration: 1,
            scrollTrigger: {
                trigger: "#scroll-trigger-container",
                scrub: true,
                markers: true,
                start: "center center",
                pin: true,
                end: "top 100px",
            }
        })
    })

    return (
        <div className="flipping_page">
            <div className="container">
                <button onClick={click} className='my-4'>
                    Flip
                </button>
                <div className="box" ref={box}>
                    Im box
                </div>
            </div>
            <div className="container">
                <button onClick={fit} className='my-4'>
                    {state.current ? "UnFit" : "Fit"}
                </button>
                <div className="d-flex justify-content-between">
                    <div className="box box-a">
                        <div className="inner-box"></div>
                    </div>
                    <div className="small_box"></div>
                </div>
            </div>
            <div className="container">
                <button className="my-4" onClick={reorder}>Reorder</button>
                <div className="d-flex gap-2" id="flex-box" style={{ height: 800 }} ref={flexBox}>
                    <div className="box border box-b">
                        box b
                    </div>
                    <div className="box border box-c">
                        box c
                    </div>
                    <div className="box border box-d">
                        box d
                    </div>
                </div>
            </div>
            <div className="container" id="scroll-trigger-container">
                <div className="d-flex justify-content-between">
                    <div className="box box-f">
                        <div className="inner-box"></div>
                    </div>
                    <div className="small_box box-f-target"></div>
                </div>
            </div>
            <div style={{ height: "100vh" }} />
        </div>
    );
}

export default Flipping
