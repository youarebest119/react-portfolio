import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import React, { useRef } from 'react'
import Div from './Div';
import gsap from 'gsap';

const Homepage = () => {
    const main = useRef();
    const intro = useRef();
    const smoother = useRef();
    const introTitle = useRef();
    useGSAP(
        () => {
            // create the smooth scroller FIRST!
            smoother.current = ScrollSmoother.create({
                smooth: 2, // seconds it takes to "catch up" to native scroll position
                effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
            });
        },
        { scope: main }
    );

    useGSAP(
        () => {
            gsap.from("#intro-title div", {
                y: 100,
                stagger: 0.1,
            })
        }
    )


    useGSAP(() => {
        ScrollTrigger.create({
            trigger: intro.current,
            // markers: true,
            start: "top top", // When to start pinning (element's top hits the top of the viewport)
            end: "bottom top", // When to end pinning (element's bottom hits the top of the viewport)
            pin: true, // Pin the element
            pinSpacing: false
        })

        ScrollTrigger.create({
            trigger: ".intro_in",
            start: "top top",
            end: "bottom",
            onUpdate: value => {
                gsap.to(intro.current, {
                    opacity: 1 - value.progress,
                })
                gsap.to("#intro-title > div:first-child", {
                    y: -value.progress * 200,
                    color: `rgb(${(1 - value.progress) * 255} ${(1 - value.progress) * 255} ${255})`,
                    scale: (1 - (value.progress / 10))
                })
                gsap.to("#intro-title > div:last-child", {
                    y: -value.progress * 100,
                    color: `rgb(${(1 - value.progress) * 255} ${(1 - value.progress) * 255} ${255})`,
                    scale: (1 - (value.progress / 10))
                })
            },
            onRefresh: value => {
                gsap.to("#intro-title > div:first-child", {
                    y: -value.progress * 200,
                    color: `rgb(${(1 - value.progress) * 255} ${(1 - value.progress) * 255} ${255})`,
                    scale: (1 - (value.progress / 10))
                })
                gsap.to("#intro-title > div:last-child", {
                    y: -value.progress * 100,
                    color: `rgb(${(1 - value.progress) * 255} ${(1 - value.progress) * 255} ${255})`,
                    scale: (1 - (value.progress / 10))
                })
            },
        })
    }, { scope: main })

    return (
        <>
            <div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">
                    <div className="intro" ref={intro}>
                        <div className="intro_in">
                            <h1 id="intro-title">
                                <div ref={introTitle}>Slightly different</div>
                                <div>digital agency</div>
                            </h1>
                        </div>
                    </div>
                    {/* <div style={{ paddingTop: "100vh" }}></div> */}
                    <Div
                        height="200vh"
                        border="2px solid black"
                        width="100%"
                    />
                </div>
            </div>
        </>
    )
}

export default Homepage
