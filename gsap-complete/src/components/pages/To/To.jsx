import React, { useEffect, useRef } from 'react'
import "./To.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMouse } from 'primereact/hooks';

const To = () => {
    const RefreshBox = useRef();
    const RefreshBox2 = useRef();
    const clickBox = useRef();
    const boxes = useRef([]);
    const mouseMoveBox = useRef();
    useGSAP(
        () => {
            gsap.to(
                RefreshBox.current,
                {
                    x: 100,
                }
            );
            gsap.to(
                RefreshBox2.current,
                {
                    x: 200,
                }
            )
        }
    )

    const { contextSafe } = useGSAP();
    const handleClickMe = contextSafe(() => {
        gsap.to(
            clickBox.current,
            {
                x: 200,
                rotate: 360,
            },
        )
    })
    const stagger = contextSafe(() => {
        gsap.fromTo(
            boxes.current,
            {
                x: 0,
            },
            {
                x: 100,
                stagger: 0.05,
            }
        )
    })

    let { ref: scope, x, y } = useMouse();
    const xTo = useRef();
    const yTo = useRef();

    useGSAP(() => {
        xTo.current = gsap.quickTo(
            mouseMoveBox.current,
            "x",
            {
                duration: 0.6, ease: "power3"
            }
        );
        yTo.current = gsap.quickTo(
            mouseMoveBox.current,
            "y",
            {
                duration: 0.6, ease: "power3"
            }
        );
    })
    useEffect(() => {
        xTo.current(x - 25 - 12.5);
        yTo.current(y - 25 - 12.5);
    }, [x, y])
    return (
        <>
            <h1 className="title">
                Gsap.To()
            </h1>
            <div className="output_box mb-3 d-flex g-3">
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        border: "2px solid orange",
                        borderRadius: "10px",
                    }}
                    ref={RefreshBox}
                    className="center s_txt"
                    data-hover="It will move on Refresh"
                >
                    Refresh Box
                </div>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        border: "2px solid orange",
                        borderRadius: "10px",
                    }}
                    ref={RefreshBox2}
                    className="center s_txt"
                    data-hover="It will move on Refresh"
                >
                    Refresh Box 2
                </div>
            </div>
            <div className="output_box">
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        border: "2px solid orange",
                        borderRadius: "10px",
                    }}
                    ref={clickBox}
                    onClick={handleClickMe}
                    className="center s_txt"
                    data-hover="Animate On Click"
                >
                    Click Me
                </div>
            </div>
            <h2 className='title mt-4'>
                Gsap.fromTo()
            </h2>
            <div className="output_box">
                <button onClick={stagger} className='mb-2'>Stagger</button>
                {
                    Array.from({ length: 10 }).map((_item, index) => {
                        return (
                            <div
                                key={index}
                                ref={elem => boxes.current[index] = elem}
                                style={{
                                    height: "30px",
                                    width: "30px",
                                    border: "2px solid orange",
                                    borderRadius: "1rem",
                                    background: "orange",
                                    marginBottom: "1rem",
                                }}
                            />
                        )
                    })
                }
            </div>
            <h2 className="title mt-4">
                Gsap.quickTo()
            </h2>
            <div className="output_box" ref={scope} style={{ minHeight: 200 }}>
                <div
                    ref={mouseMoveBox}
                    style={{
                        width: 25,
                        height: 25,
                        border: "2px solid orange",
                        borderRadius: "50%",
                        cursor: "pointer",
                    }}
                />
            </div>
        </>
    )
}

export default To
