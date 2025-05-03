import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

const BasicTrigger = () => {
    const boxes = useRef([]);
    const tl = useRef();
    useGSAP(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: boxes.current[2],
                toggleActions: "restart pause reverse pause",//play pause resume reverse restart reset complete none
                // markers: true,
                start: "20px 80%",
                // end: "bottom 100px"// bottom top default
                end: "+=300",
                scrub: 1,
            }
        });
        tl.current.to(boxes.current[2],
            {
                x: 600,
                rotate: 360,
                duration: 5,
            }
        )
        tl.current.to(boxes.current[2],
            {
                borderColor: "blue",
            }
        )
        tl.current.to(boxes.current[2],
            {
                x: 0,
            }
        )
    })
    return (
        <div>
            {
                Array.from({
                    length: 3
                }).map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                width: "100px",
                                height: "100px",
                                border: "2px solid orange",
                                marginBottom: "50vh",
                                borderRadius: "10px",
                            }}
                            ref={ele => boxes.current[index] = ele}
                            className="center s_txt"
                        >
                        </div>
                    )
                })
            }
            <div style={{ height: "100dvh" }} />
        </div>
    )
}

export default BasicTrigger
