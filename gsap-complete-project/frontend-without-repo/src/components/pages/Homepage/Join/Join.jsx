import React from 'react'
import joinbg from "../../../../assets/images/join.jpg";
import joincar from "../../../../assets/images/join-car.png";
import "./Join.scss";
import { GetText } from '../Electric/Electric';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Join = () => {
    useGSAP(() => {
        gsap.
            timeline({
                scrollTrigger: {
                    trigger: ".join_design",
                    start: "top 100%",
                    markers: false,
                    scrub: 1,
                    end: "bottom 80%",
                }
            })
            .to(".join_in", {
                clipPath: "polygon(0px 0%, 100% 0%, 100% 100%, 0% 100%)",
            })
            .from(".join_in h2 .word", {
                y: 200,
                stagger: 0.05,
            }, "<")

    })
    return (
        <section className="join_design">
            <div className='join_in'>
                <img src={joinbg} className="join_bg" alt="" />
                <img src={joincar} className="join_car" alt="" />
                <h2><GetText text="JOIN THE MOVE" /></h2>
            </div>
        </section>
    )
}

export default Join
