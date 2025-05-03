import React, { useCallback, useRef } from 'react'
import "./TextAnimation1.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';

const TextAnimation1 = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ea! Perspiciatis aut excepturi rem commodi perferendis tempora inventore hic iure quod debitis eius repellendus delectus architecto voluptatem, sequi aperiam illo?"
    const words = useRef([]);
    const title = useRef([]);
    const smoother = useRef();
    const shuffle = useCallback((array) => {
        return array.sort(() => Math.random() - 0.5);
    }, [])
    useGSAP(() => {
        smoother.current = ScrollSmoother.create({
            content: "#custom_content",
            wrapper: "#custom_smooth",
            smooth: 1.5,
            effects: true
        })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".text_animation_one #my_txt",
                    scrub: true,
                    start: "top top",
                    pin: true,
                    markers: true,
                    // end: '+=800'
                }
            })
            .from(
                [...shuffle(words.current), ...title.current],
                {
                    y: -25,
                    scale: 2,
                    opacity: 0,
                    stagger: 0.02,
                    duration: 0.1,
                }
            )
            .to(
                [...shuffle(words.current), ...title.current],
                {
                    y: -25,
                    scale: 1.4,
                    opacity: 0,
                    duration: 0.1,
                    stagger: 0.008
                },
                ">1"
            )
    })


    return (
        <div id="custom_smooth">
            <div id="custom_content">
                <div className='text_animation_one'>
                    <div style={{ height: "100vh", }} />
                    <div className="my_text" id="my_txt">
                        <h3>
                            {
                                "My Title".split(" ").map((item, index) => {
                                    return (
                                        <span
                                            key={item + index}
                                            ref={el => words.current[text.length + index] = el}
                                        >
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </h3>
                        <h2>
                            <span ref={el => title.current[1] = el}>Designed to exceed</span>
                            <span ref={el => title.current[0] = el}>Your limitations</span>
                        </h2>
                        <p>
                            {
                                text.split(" ").map((item, index) => {
                                    return (
                                        <span
                                            key={item + index}
                                            ref={el => words.current[index] = el}
                                        >
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </p>
                    </div>
                    <div style={{ height: "100vh", }} />
                    <div style={{ height: "100vh", }} />
                </div>
            </div>
        </div>
    )
}

export default TextAnimation1
