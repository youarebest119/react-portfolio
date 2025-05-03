import { Container } from "react-bootstrap";
import heroVideo from "../../../assets/videos/hero.mp4";
import "./Hero.scss";
import React, { useRef } from 'react'
import Button from "../../common/Button/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";

const Hero = () => {
    const section = useRef();
    const h2 = useRef();
    const h1 = useRef();
    const para = useRef();
    const action = useRef([]);
    const video = useRef();
    useGSAP(() => {
        gsap.to(section.current, {
            yPercent: -50,
            scrollTrigger: {
                trigger: section.current,
                scrub: true,
                pin: true,
                pinSpacing: false,
            }
        });
        const subTitle = new SplitText(h2.current);
        const title = new SplitText(h1.current);
        const paragraph = new SplitText(para.current);

        const tl = gsap.timeline();
        tl.fromTo(title.chars[0], {
            y: () => {
                return window.innerHeight;
            },
            x: 440,
            opacity: 0,
        }, {
            x: 440,
            ease: "expo.inOut",
            duration: 1,
            y: 0,
            opacity: 1,
        })
        tl.fromTo(title.chars[0], {
            x: 440,
        }, {
            x: 0,
            ease: "expo.inOut",
            duration: 2,
        })
        tl.from(title.chars.slice(1), {
            x: 600,
            ease: "expo.inOut",
            opacity: 0,
            stagger: 0.05,
        }, 1.8);

        tl.fromTo(subTitle.chars, {
            opacity: 0,
            x: 100,
        }, {
            color: "#7D909B",
            opacity: 1,
            stagger: 0.02,
            x: 0,
        }, "-=1.8")
        tl.fromTo(subTitle.chars, {
            color: "#7D909B",
        }, {
            ease: "expo.inOut",
            stagger: 0.02,
            color: "#001D6B"
        })

        tl.fromTo(paragraph.chars, {
            opacity: 0,
            x: 100,
        }, {
            color: "#7D909B",
            opacity: 1,
            stagger: 0.02,
            x: 0,
        }, "-=1.8")
        tl.fromTo(paragraph.chars, {
            color: "#7D909B",
        }, {
            ease: "expo.inOut",
            stagger: 0.02,
            color: "#001D6B"
        })

        tl.from([action.current[0], action.current[2]], {
            y: () => {
                return window.innerHeight;
            },
            ease: "expo.inOut",
            duration: 2,
            stagger: 0.05,
        }, "-=4")
        tl.from([action.current[1], action.current[3]], {
            yPercent: 100,
            ease: "expo.inOut",
            duration: 2,
            stagger: 0.05,
        }, "-=3.5")
        tl.from(video.current, {
            yPercent: 100,
            opacity: 0,
            ease: "expo.inOut",
            duration: 2,
        }, "-=3")
    }, { scope: section })
    return (
        <section className="hero" ref={section}>
            <Container>
                <div className="hero_in">
                    <h2 ref={h2}>Ride the next wave of</h2>
                    <h1 ref={h1}>Asset Tokenization</h1>
                    <p ref={para}>Bring a new dimension of security, liquidity, efficiency, and transparency to a wide variety of assets.</p>
                    <div className="hero_action">
                        <div ref={el => action.current[0] = el}>
                            <Button>
                                <span ref={e => action.current[1] = e}>Get Started</span>
                            </Button>
                        </div>
                        <div ref={el => action.current[2] = el}>
                            <Button className="border_base">
                                <span ref={e => action.current[3] = e}>Free Demo</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
            <video
                ref={video}
                autoPlay
                loop
                playsInline
                controls={false}
                muted
            >
                <source src={heroVideo} />
            </video>
        </section>
    )
}

export default Hero
