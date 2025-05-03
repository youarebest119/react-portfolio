import React, { useRef } from 'react'
import "./FlipExample.scss";
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import intro from "../../../assets/images/intro.png";
import ScrollSmoother from 'gsap-trial/ScrollSmoother';

const FlipExample = () => {
    const scope = useRef();
    const finalBox = useRef();
    const state = useRef();

    useGSAP(() => {
        ScrollSmoother.create({
            content: "#flip-example-one-content",
            wrapper: "#flip-example-one",
            smooth: 1.5,
            effects: true,
        })
        state.current = Flip.getState(finalBox.current);
        Flip.fit(".original-box", state.current, {
            duration: 1,
            scale: true,
            rotate: 360,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".original-box",
                start: "bottom 80%",
                end: () => {
                    return `${window.innerHeight} center`
                },
                scrub: 0.4,
            }
        })
    }, { scope })
    return (
        <div ref={scope}>
            <div id={"flip-example-one"}>
                <div id="flip-example-one-content">
                    <div className="flip_example_page">
                        <div className="container">
                            <div className="d-flex justify-content-center">
                                <div className="box original-box">
                                    <img src={intro} alt="" />
                                </div>
                            </div>
                            <div className="page_content">
                                <div className="row align-items-center">
                                    <div className="col-6">
                                        <div ref={finalBox} className="box ghost-box"></div>
                                    </div>
                                    <div className="col-6">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, nesciunt neque magni molestias ad in voluptas nulla nobis fuga nihil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "100dvh" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipExample