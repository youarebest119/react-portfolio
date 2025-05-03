import React, { useRef } from 'react'
import sound from "../../../../assets/sounds/dot.mp3";
import car from "../../../../assets/images/car.png"
import "./Responsibility.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Observer from 'gsap-trial/Observer';

gsap.registerPlugin(Observer);

const Responsibility = () => {
    const isAnimating = useRef(false);
    const soundEffect = useRef();
    const scrollTrigger = useRef();

    const { contextSafe } = useGSAP(() => {
        gsap.set(".custom_card", {
            yPercent: 100,
            opacity: 0,
            filter: "blur(1rem)",
        })


        // scrollTrigger.current = ScrollTrigger.create({
        //     trigger: ".responsibility_design",
        //     pin: true,
        //     end: () => "+=500%",
        // })

        Observer.create({
            target: ".responsibility_design",
            onUp: () => {
                console.log("going up");
                !isAnimating.current && handleExit();
            },
            onDown: () => {
                console.log("going downwards");
                !isAnimating.current && handleAnimate();
            },
        })
    })
    const handleAnimate = contextSafe(() => {
        isAnimating.current = true;
        
        // gsap.timeline()
        //     .to(".img_card", {
        //         yPercent: 0,
        //         opacity: 1,
        //         filter: "blur(0rem)",
        //         duration: 1.6,
        //         ease: "back.inOut",
        //         onComplete: () => {
        //             isAnimating.current = false;
        //         }
        //     })
        //     .to(".img_card", {
        //         onStart: () => {
        //             soundEffect.current?.play();
        //             scrollTrigger.current?.disable();
        //         }
        //     }, "-=0.3")
    })
    const handleExit = contextSafe(() => {
        isAnimating.current = true;

        // gsap.to(".img_card", {
        //     yPercent: 100,
        //     opacity: 0,
        //     filter: "blur(1rem)",
        //     duration: 1.6,
        //     ease: "back.inOut",
        //     onComplete: () => {
        //         scrollTrigger.current?.enable();
        //         isAnimating.current = false;
        //     }
        // })
    })
    return (
        <section className="responsibility_design">
            <audio ref={soundEffect} controls={false}>
                <source src={sound} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <div className="design_in">
                <div className="small_badge">Acen Cards</div>
                <h2>Services with Responsibility</h2>
                <p>Develop Socially responsible card products, collaborate with social enterprises and non-profits, and measure impact programs.</p>
                <div className="design_cards">
                    <div className="card_out">
                        <div className="custom_card">
                            <h3>Earn Up To</h3>
                            <p>100 <span>+</span></p>
                        </div>
                    </div>
                    <div className="card_out img_card_out">
                        <div className="custom_card img_card">
                            <img src={car} alt="" />
                        </div>
                    </div>
                    <div className="card_out">
                        <div className="custom_card">
                            <h3>Award & Recoginsation</h3>
                            <p>50 <span>+</span></p>
                        </div>
                    </div>
                    <div className="card_out up_card">
                        <div className="custom_card">
                            <h3>Release Date</h3>
                            <p>200 <span>+</span></p>
                        </div>
                    </div>
                    <div className="card_out">
                        <div className="custom_card">
                            <h3>Investments</h3>
                            <p>900 <span>+</span></p>
                        </div>
                    </div>
                    <div className="card_out up_card">
                        <div className="custom_card">
                            <h3>Investments For</h3>
                            <p>02 <span>+</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Responsibility
