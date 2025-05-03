import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { Flip } from 'gsap/Flip';
import React, { useRef } from 'react';
import "./FlipExample3.scss";

const FlipExample3 = () => {
    const scope = useRef();
    useGSAP(() => {
        ScrollSmoother.create({
            content: "#flip-example-three-content",
            wrapper: "#flip-example-three",
            smooth: 1.5,
            effects: true
        })
        const state1 = Flip.getState("#box-1", {});
        const state2 = Flip.getState("#box-2");
        state2.makeAbsolute();
        state2.update();
        const state3 = Flip.getState("#box-3");
        Flip.fit(
            state1,
            state2,
            {
                simple: true,
                duration: 1,
                absolute: true,
                scale: true,
                scrollTrigger: {
                    start: "top top",
                    trigger: "#wrapper-1",
                    markers: true,
                    scrub: true,
                    pinSpacing: false,
                    pin: true,
                    end: () => {
                        return window.innerHeight + 100;
                    },
                    onprogress: (r) => {
                        console.log({ r });

                    }
                },
            }
        )
        // Flip.fit(
        //     "#box-2",
        //     state3,
        //     {
        //         simple: true,
        //         duration: 1,
        //         absolute: true,
        //         onUpdate: () => state2.update(),
        //         scale: true,
        //         scrollTrigger: {
        //             start: "top top",
        //             trigger: "#wrapper-2",
        //             scrub: true,
        //             end: () => {
        //                 return window.innerHeight + 100;
        //             }
        //         },
        //     }
        // )
    })
    return (
        <div ref={scope}>
            <div id="flip-example-three">
                <div id="flip-example-three-content">
                    <div className='container'>
                        <div className="wrapper" id="wrapper-1">
                            <div className="row">
                                <div className="col-6"></div>
                                <div className="col-6">
                                    <div className="box ms-auto" id="box-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper" id="wrapper-2">
                            <div className="row">
                                <div className="col-6">
                                    <div className="box" id="box-2"></div>
                                </div>
                                <div className="col-6">
                                </div>
                            </div>
                        </div>
                        <div className="wrapper" id="wrapper-3">
                            <div className="row">
                                <div className="col-6">
                                </div>
                                <div className="col-6">
                                    <div className="box ms-auto" id="box-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipExample3
