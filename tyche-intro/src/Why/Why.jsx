import React, { useRef } from 'react'
import "./Why.scss"
import { useGSAP } from '@gsap/react'
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import gsap from 'gsap';
import one from "../assets/images/top.svg";
import two from "../assets/images/second.svg";
import three from "../assets/images/third.svg";
import four from "../assets/images/end.svg";

const whyAnimCards = [
    { icon: one },
    { icon: two },
    { icon: three },
    { icon: four },
]
const Why = () => {
    const why = useRef();
    const cards = useRef([]);
    const q = useRef();
    useGSAP(() => {
        ScrollSmoother.create({
            content: "#smooth-content",
            wrapper: "#smooth-wrapper",
            smooth: 1,
            effects: true,
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: why.current,
                pin: true,
                end: "+=4000",
            }
        })
        gsap.from(q.current, {
            scaleY: 0.6,
            ease: "elastic.out",
            duration: 1,
            // rotate: 10,
            repeat: -1,
            yoyo: true,
            yoyoEase: "linear",
            scrollTrigger:
            {
                trigger: q.current,
                start: "top 10rem",
                markers: true,
                toggleActions: "restart none none reverse",
            }
        })
    })
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div>
                    <div style={{ height: "100dvh", borderBottom: '10px solid blue' }} />
                    <div style={{ height: "100dvh", }} />
                    <div className="why" ref={why}>
                        <div className="container">
                            <div className="why_txt">
                                <h1>Why Tyche?</h1>
                                <p>Tyche is a next-generation decentralized finance (DeFi) platform designed to empower users with unparalleled control over their financial activities. From AI-enhanced Web3 wallets and non-KYC debit card integration to collective NFT ownership and seamless marketplace transactions, Tyche provides a secure, private, and user-friendly experience for all.</p>
                            </div>
                            <div className="why_q">
                                <h2 ref={q}>?</h2>
                            </div>
                            <div className="why_anim">
                                {
                                    whyAnimCards.map((item, index) => {
                                        return (
                                            <img key={item.icon} ref={e => cards.current[index] = e} src={item.icon} alt="" />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "100dvh", borderTop: '10px solid blue' }} />
                </div>
            </div>
        </div>
    )
}

export default Why
