import React from 'react'
import "./Electric.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const GetText = ({ text }) => {
    return text
        .split(" ")
        .map((word, index) => {
            return (
                <div key={word + index} className='word'>
                    {
                        word
                            .split("")
                            .map((letter, index) => {
                                return (
                                    <span key={letter + index} className='letter'>{letter}</span>
                                )
                            })
                    }
                    &nbsp;
                </div>
            )
        })
}

const Electric = () => {
    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".electric_design",
                    scrub: 1,
                    start: "top 50%",
                    end: "bottom 70%",
                    markers: false,
                }
            })
            .from(".electric_txt_one > div:last-child span", {
                opacity: 0,
                stagger: 0.05,
                // duration: 2,
            })
            .to(".electric_txt_one > div span", {
                opacity: 0,
                stagger: 0.05,
                // duration: 2,
            })
            .to(".electric_txt_two > div:last-child span", {
                opacity: 1,
                // duration: 2,
                stagger: 0.05,
            }, "-=1.1")
    })
    return (
        <section className='electric_design'>
            <div className="electric_design_in">
                <h3 className="electric_txt_one">
                    <div><GetText text={"It's Electric. It's Smart. And you control it with just a touch"} /></div>
                    <div><GetText text={"It's Electric. It's Smart. And you control it with just a touch"} /></div>
                </h3>
                <h3 className='electric_txt_two'>
                    <div><GetText text={"So you can feel at home, anywhere."} /></div>
                    <div><GetText text={"So you can feel at home, anywhere."} /></div>
                </h3>
            </div>
        </section>
    )
}

export default Electric
