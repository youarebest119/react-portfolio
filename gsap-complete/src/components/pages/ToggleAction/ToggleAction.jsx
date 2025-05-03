import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const ToggleAction = () => {
    const box = useRef();
    const scroller = useRef();
    useGSAP(() => {
        gsap.to(
            box.current,
            {
                x: 100,
                scrollTrigger: {
                    trigger: scroller.current,
                    toggleActions: "play pause reverse reset",
                    markers: true,
                    start: "top 80%",
                    end: "end 50%",
                    scrub: 1,
                }
            }
        )
    })
    return (
        <>
            <div style={{ height: "100dvh" }} />
            <div ref={scroller} style={{ border: '2px solid white' }}>
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        border: "2px solid orange",
                        borderRadius: "10px",
                    }}
                    ref={box}
                    className="center s_txt"
                ></div>
            </div>
            <div style={{ height: "100dvh" }} />
        </>
    )
}

export default ToggleAction
