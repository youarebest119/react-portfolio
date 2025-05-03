import React from 'react'
import "./Features.scss";
import featuresBg from "../../../../assets/images/feature-img.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Feature = () => {
    const { contextSafe } = useGSAP(() => {
        gsap.set(".feature_right_card", {
            xPercent: 50,
        })
        gsap.set(".feature_right_card img", {
            xPercent: -50,
        })
        gsap.set([".features_txt_card_left", ".features_txt_card_right"], {
            width: "50%",
        })
        gsap.
            timeline({
                scrollTrigger: {
                    trigger: ".features_design",
                    scrub: true,
                    start: "top 00%",
                    markers: false,
                    pin: ".features_design",
                    end: "+=400%",
                    onUpdate: () => {

                    }
                }
            })
            .to(".features_design", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power1.inOut",
                duration: 1,
                overwrite: true,
            })
            .from(".features_txt_card h3", {
                y: 100,
                opacity: 0,
            }, "-=0.4")
            .addLabel("hiding")
            // .to(".feature_left_card", {
            //     xPercent: -100,
            //     duration: 0.5,
            // }, "hiding")
            // .to(".feature_left_card img ", {
            //     xPercent: 100,
            //     duration: 0.5,
            // }, "hiding")
            .to(".features_txt_card_left ", {
                x: -200,
                opacity: 0,
                duration: 0.1,
            }, "hiding")

            // .to(".feature_right_card", {
            //     xPercent: 100,
            //     duration: 0.5,
            // }, "hiding")
            // .to(".feature_right_card img ", {
            //     xPercent: -100,
            //     duration: 0.5,
            // }, "hiding")
            .to(".features_txt_card_right ", {
                x: 200,
                opacity: 0,
                duration: 0.1,
            }, "hiding")
    })

    const handleEnterRightCard = contextSafe(() => {
        gsap
            .timeline({
                defaults: {
                    ease: "expo.inOut",
                    duration: 1,
                }
            })
            .to(".feature_right_card", {
                xPercent: 40,
            }, "0")
            .to(".feature_right_card img", {
                xPercent: -40,
            }, "0")
            .to(".features_txt_card_right", {
                width: "60%",
            }, "0")
            .to(".features_txt_card_left", {
                width: "40%",
            }, "0")
    })
    const handleEnterLeftCard = contextSafe(() => {
        gsap
            .timeline({
                defaults: {
                    ease: "expo.inOut",
                    duration: 1,
                }
            })
            .to(".feature_right_card", {
                xPercent: 60,
            }, "0")
            .to(".feature_right_card img", {
                xPercent: -60,
            }, "0")
            .to(".features_txt_card_right", {
                width: "40%",
            }, "0")
            .to(".features_txt_card_left", {
                width: "60%",
            }, "0")
    })
    return (
        <div className="features_design">
            <div className="features_in">
                <img src={featuresBg} alt="" />
                <div className="features_cards">
                    <div
                        className="feature_card feature_left_card"
                        onMouseOver={handleEnterLeftCard}
                    >
                        <img src={featuresBg} alt="" />
                    </div>
                    <div
                        className="feature_card feature_right_card"
                        onMouseOver={handleEnterRightCard}
                    >
                        <img src={featuresBg} alt="" />
                    </div>
                </div>
                <div className="features_cards_text">
                    <div className="features_txt_card features_txt_card_left">
                        <h3>Feature 1</h3>
                    </div>
                    <div className="features_txt_card features_txt_card_right">
                        <h3>Feature 2</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
