import React, { useRef } from 'react'
import "./FlipExample2.scss";
import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';

const FlipExample2 = () => {
    const scope = useRef();
    useGSAP(() => {
        ScrollSmoother.create({
            content: "#flip-example-two-content",
            wrapper: "#flip-example-two",
            smooth: 1.5,
            effects: true
        })
        const state = Flip.getState(".ghost-one");
        Flip.fit(
            "#box",
            state,
            {
                simple: true,
                duration: 1,
                absolute: true,
                scale: true,
                scrollTrigger: {
                    start: "top center",
                    trigger: ".ghost-one",
                    id: "ghost-one",
                    scrub: true,
                    end: () => {
                        return `${window.innerHeight / 2} 70%`
                    }
                },
                onComplete: () => {
                    const stateTwo = Flip.getState(".ghost-two");
                    Flip.fit(
                        "#box",
                        stateTwo,
                        {
                            duration: 10,
                            scale: true,
                            absolute: true,
                            ease: 'power1.inOut',
                            scrollTrigger: {
                                start: "80% center",
                                trigger: ".ghost-one",
                                endTrigger: ".ghost-two",
                                scrub: true,
                                id: "ghost-two",
                                markers: true,
                                end: () => {
                                    return `${window.innerHeight / 2} 100%`
                                },
                            },
                            onComplete: () => {
                                const stateThree = Flip.getState(".ghost-three");
                                Flip.fit(
                                    "#box",
                                    stateThree,
                                    {
                                        duration: 1,
                                        scale: true,
                                        absolute: true,
                                        ease: 'power1.inOut',
                                        borderRadius: "3rem 4rem 6rem 3rem",
                                        scrollTrigger: {
                                            start: "80% center",
                                            trigger: ".ghost-two",
                                            endTrigger: ".ghost-three",
                                            scrub: true,
                                            id: "ghost-three",
                                            // markers: true,
                                            end: () => {
                                                return `${window.innerHeight / 2} 70%`
                                            }
                                        },
                                    }
                                )
                            }
                        }
                    )
                }
            }
        )
    }, { scope })
    return (
        <div ref={scope}>
            <div id="flip-example-two">
                <div id="flip-example-two-content">
                    <div>
                        <div className="container">
                            <div style={{ height: "100vh" }} />
                            <div className="box" id="box"></div>
                            <div className="ghost ghost-one"></div>
                            <div style={{ height: "100dvh" }} />
                            <div className="my-content-one">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="ghost ghost-two"></div>
                                    </div>
                                    <div className="col-md-6">
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas expedita provident voluptatem quibusdam ratione tempore officia veniam laudantium. Tempore accusantium laboriosam nulla neque consectetur similique repudiandae rerum nihil voluptates ipsa!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: "100dvh" }} />
                            <div className="my-content-two">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas expedita provident voluptatem quibusdam ratione tempore officia veniam laudantium. Tempore accusantium laboriosam nulla neque consectetur similique repudiandae rerum nihil voluptates ipsa!
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="ghost ghost-three"></div>
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

export default FlipExample2
