import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Svg = () => {
    const arrow = useRef()
    const final = useRef();
    useGSAP(() => {
        // let l = final.current.getTotalLength();
        // gsap.set(final.current, {
        //   strokeDasharray: l,
        // })
        // gsap.fromTo(
        //   final.current,
        //   {
        //     drawSVG: "0%",
        //     // strokeDashoffset: l
        //   },
        //   {
        //     duration: 2,
        //     drawSVG: "100%",
        //     // strokeDashoffset: 0,
        //     ease: "expo.inOut",
        //   }
        // );

        gsap.fromTo(
            final.current,
            {
                drawSVG: "0%",
            },
            {
                drawSVG: "100%",
                duration: 2,
                ease: "expo.inOut",
                scrollTrigger: "#arrow_"
            },
        )


        gsap.to(arrow.current, {
            duration: 2,
            ease: "expo.inOut",
            motionPath: {
                path: final.current,
                align: final.current,
                autoRotate: true,
                alignOrigin: [0, 0.5],
            },
            scrollTrigger: "#arrow_"
        });
    })
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="369" height="106" id="arrow_" viewBox="0 0 375 110" fill="none">
                <path strokeDasharray="8 , 8" mask='url(#mask)' d="M1 59.4994C180.5 187 267 1.00028 153 1.00006C77 1.00006 95.5 168 368 34.4998" stroke="#49FE9F" strokeWidth="2" />
                <mask id="mask">
                    <path ref={final} strokeDasharray="8 , 8" d="M1 59.4994C180.5 187 267 1.00028 153 1.00006C77 1.00006 95.5 168 368 34.4998" stroke="#49FE9F" strokeWidth="2" />
                </mask>
                <path ref={arrow} xmlns="http://www.w3.org/2000/svg" d="M1.20159 0.219249L10.8492 6.49798L0.467458 11.7392L1.20159 0.219249Z" fill="#49FE9F" />
            </svg>
        </>
    )
}

export default Svg
