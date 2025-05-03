import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'

const ToggleActions = () => {
    const scope = useRef();
    useGSAP(() => {
        gsap.from("#very_custom_box", {
            x: 200,
            scrollTrigger: {
                trigger: "#very_custom_box",
                scrub: true,
                start: "top center",
                pin: true,
                markers: true,
                id: "#very_custom_box",
                end: "top: 20%",
                // toggleActions: "restart reverse resume reverse",
            }
        })

    }, { scope })
    return (
        <div ref={scope}>
            <div style={{ height: "100vh", borderBottom: "2px solid rgba(255, 255 ,255 ,0.3)" }} />
            <div
                id="very_custom_box"
                style={{
                    height: '200px',
                    width: '200px',
                    border: "2px solid white",
                }}
            >

            </div>
            <div style={{ height: "100vh", borderBottom: "2px solid rgba(255, 255 ,255 ,0.3)" }} />
            <div style={{ height: "100vh", borderBottom: "2px solid rgba(255, 255 ,255 ,0.3)" }} />

        </div>
    )
}

export default ToggleActions
