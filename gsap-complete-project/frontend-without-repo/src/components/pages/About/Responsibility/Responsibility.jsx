import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import car from "../../../../assets/images/car.png";
import sound from "../../../../assets/sounds/dot.mp3";
import "./Responsibility.scss";
import SplitText from 'gsap-trial/SplitText';

const Responsibility = () => {
    const soundEffect = useRef();
    const tl = useRef();
    const ref = useRef();
    const { contextSafe } = useGSAP(() => {
        gsap.set(".custom_card", {
            yPercent: 100,
            opacity: 0,
            filter: "blur(1rem)",
        })

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: ".responsibility_design",
                pin: true,
                start: "top top",
                end: () => "+=300%",
                markers: false,
                scrub: true,
            }
        });
        tl.current.to(".img_card", {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0rem)",
            duration: 1.6,
            ease: "power4.out",
        })
        tl.current.to([".first_card", ".third_card"], {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0rem)",
            duration: 1.6,
            ease: "power4.out",
            stagger: 0.05,
            onStart: () => {
                soundEffect.current?.play();
            }
        }, "-=0.8")
        tl.current.to([".forth_card", ".five_card", ".six_card"], {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0rem)",
            duration: 1.6,
            ease: "power4.out",
            stagger: 0.05,
            onStart: () => {
                soundEffect.current?.play();
            },
        }, "-=0.5")


        gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                markers: false,
                toggleActions: "play none none reverse",
                end: "top 20%",
            }
        })
            .from([".small_badge", ".responsibility_design h2", ".responsibility_design p"], {
                y: 100,
                filter: "blur(2rem)",
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            })

        new SplitText(".custom_card p", {
            linesClass: "l",
            wordsClass: "w",
            charsClass: "c",
        })

    })
    const handleEnter = ((event) => {
        // console.log(event.currentTarget.querySelectorAll(".l:first-child .c"));
        gsap
            .timeline()
            .to(event.currentTarget.querySelectorAll(".l:first-child .c"), {
                yPercent: -100,
                stagger: 0.1,
            })
            .fromTo(event.currentTarget.querySelectorAll(".l:last-child .c"), {
                yPercent: 100,
            }, {
                yPercent: 0,
                stagger: 0.1,
            }, "<")
        // console.log(event.currentTarget);
    })
    const handleOut = contextSafe((event) => {
        gsap
            .timeline()
            .to(event.currentTarget.querySelectorAll(".l:first-child .c"), {
                yPercent: 0,
                stagger: 0.1,
            })
            .to(event.currentTarget.querySelectorAll(".l:last-child .c"), {
                yPercent: 100,
                stagger: 0.1,
            }, "<")
    })
    return (
        <section className="responsibility_design">
            <audio ref={soundEffect} controls={false}>
                <source src={sound} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <div className="design_in">
                <div ref={ref}>
                    <div className="small_badge">Acen Cards</div>
                    <h2>Services with Responsibility</h2>
                    <p>Develop Socially responsible card products, collaborate with social enterprises and non-profits, and measure impact programs.</p>
                </div>
                <div className="design_cards">
                    <div className="card_out">
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} className="custom_card first_card">
                            <h3>Earn Up To</h3>
                            <p>
                                <span className="word">100+</span>
                                <span className="copy_word">100+</span>
                            </p>
                        </div>
                    </div>
                    <div className="card_out img_card_out">
                        <div className="custom_card img_card">
                            <img src={car} alt="" />
                        </div>
                    </div>
                    <div className="card_out">
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} className="custom_card third_card">
                            <h3>Award & Recoginsation</h3>
                            <p>
                                <span className="word">50+</span>
                                <span className="copy_word">50+</span>
                            </p>
                        </div>
                    </div>
                    <div className="card_out up_card">
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} className="custom_card forth_card">
                            <h3>Release Date</h3>
                            <p>
                                <span className="word">200+</span>
                                <span className="copy_word">200+</span>
                            </p>
                        </div>
                    </div>
                    <div className="card_out">
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} className="custom_card five_card">
                            <h3>Investments</h3>
                            <p>
                                <span className="word">900+</span>
                                <span className="copy_word">900+</span>
                            </p>
                        </div>
                    </div>
                    <div className="card_out up_card">
                        <div onMouseEnter={handleEnter} onMouseLeave={handleOut} className="custom_card six_card">
                            <h3>Investments For</h3>
                            <p>
                                <span className="word">02+</span>
                                <span className="copy_word">02+</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Responsibility
