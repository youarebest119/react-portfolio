import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const SmoothScrollWithGsapAndScrollTrigger = () => {
    useGSAP(() => {
        gsap.to(
            ".box-d",
            {
                rotate: 360,
                scrollTrigger: {
                    markers: true,
                    trigger: ".box-d",
                    // start: "center center",
                    start: "center center",
                    // end: "max", // permanley pinned
                    end: "+=200", // 200 more when starts
                    // pin: true, // pin until it ends
                    scrub: true,
                }
            }
        )
    })
    return (
        <>
            <div className="boxes">
                <div className="box box-d">
                    d
                </div>
            </div>
            <div style={{ height: "100dvh", minHeight: 400, }} />
        </>
    )
}

export default SmoothScrollWithGsapAndScrollTrigger
