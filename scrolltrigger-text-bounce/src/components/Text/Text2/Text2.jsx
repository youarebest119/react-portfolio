import React, { useRef } from 'react'
import "./Text2.scss";
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap-trial/SplitText';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';

const Text2 = () => {
    const scope = useRef();
    useGSAP(() => {
        // banner one
        let splitted = new SplitText(".banner-box h3", { linesClass: "l" });
        gsap.from(splitted.words, {
            yPercent: 100,
            scrollTrigger: { trigger: ".banner-box h3", },
            stagger: 0.03,
            ease: "power2.inOut",
        })

        // banner two
        let bannerTwoTitle = new SplitText(".banner-two h3", { linesClass: "l" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".banner-two",
                pin: ".banner-two",
                markers: true,
            },
        });
        tl.fromTo(bannerTwoTitle.words, {
            y: 100,
            x: 200,
            stagger: 0.05,
        }, {
            y: 0,
            x: 200,
            duration: 1,
            ease: "power2.inOut",
        })
        tl.fromTo(bannerTwoTitle.words, {
            x: 200,
            y: 0,
        }, {
            x: 0,
            stagger: 0.05,
            ease: "power1.inOut",
            y: 0,
        })

        // rally_banner
        const rallyBannerh3 = new SplitText(".rally_banner_one h3");
        const rallyBannerp = new SplitText(".rally_banner_one p");
        const rtl = gsap.timeline({
            scrollTrigger: {
                trigger: ".rally_banner_one",
                start: "top 0%",
                pin: true,
                toggleActions: "play pause resume reverse",
                scrub: true,
                pinSpacing: false,
            },
        });
        rtl.from(rallyBannerh3.chars, {
            y: 100,
            opacity: 0,
            delay: 0.2,
            stagger: 0.05,
        }, 0);
        rtl.from(rallyBannerp.elements, {
            y: 40,
            opacity: 0,
            stagger: 0.01,
        }, "-=0.3");
        rtl.fromTo(".rally_banner_one", {
            background: "linear-gradient(309deg, rgba(117, 177, 223, 1) 0%, rgba(89, 198, 226, 1) 100%)",
        }, {
            background: "linear-gradient(309deg, rgba(59, 208, 171, 1) 0%, rgba(77, 190, 184, 1) 100%)",
            duration: 0.2,
        }, 0);
        rtl.to(rallyBannerh3.chars, {
            scale: 1.02,
            opacity: 0,
            stagger: 0.2,
            id: "my_label",
        })
        rtl.to(rallyBannerp.elements, {
            scale: 1.02,
            opacity: 0,
            stagger: 0.1,
        }, "+=0.5")
        // revive_banner
        const reviveBannerh3 = new SplitText(".revive_banner_one h3");
        const reviveBannerp = new SplitText(".revive_banner_one p");
        const rtl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".revive_banner_one",
                start: "top 0%",
                markers: true,
                pin: true,
                toggleActions: "play pause resume reverse",
                scrub: true,
            },
        });
        rtl2.from(reviveBannerh3.chars, {
            x: 100,
            opacity: 0,
            delay: 0.2,
            stagger: 0.05,
            fontWeight: 300,
            duration: 1,
        }, 0);
        rtl2.from(reviveBannerp.elements, {
            y: 40,
            opacity: 0,
            stagger: 0.01,
        }, "-=0.3");
        rtl2.fromTo(".revive_banner_one", {
            background: "transparent",
        }, {
            background: "linear-gradient(309deg, rgba(59, 208, 171, 1) 0%, rgba(77, 190, 184, 1) 100%)",
            duration: 0.004,
        }, 0);
        rtl2.to(reviveBannerh3.chars, {
            opacity: 0,
            y: -100,
            stagger: 0.2,
            id: "my_label",
        })
        rtl2.to(reviveBannerp.elements, {
            scale: 1.02,
            opacity: 0,
            stagger: 0.1,
        }, "+=0.5")
    }, { scope })
    return (
        <div ref={scope} id="text-2">
            <div className="box">
                <div style={{ minHeight: "100dvh" }} className="banner-box d-flex align-items-center">
                    <Container>
                        <h3>
                            <span className="light">WE ARE A</span> <br />
                            <span className="ms">LIVE SCRIBIING,</span> <br />
                            ANIMATION <span className="light">&</span> <br />
                            INFOGRAPHICS <br />
                            <span className="light">STUDIO.</span>
                        </h3>
                    </Container>
                </div>
                <div className="banner-two" style={{ minHeight: "100dvh", display: "flex", alignItems: "center", }}>
                    <>
                        <h3>
                            <div>
                                UNDERSTAND
                            </div>
                            <div>text data <span className="light">LIKE</span></div>
                            <div>never before</div>
                        </h3>
                    </>
                </div>
                <div className="banner-three" style={{ minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h3>
                        {
                            "BETTER".split("").map((item, i) => {
                                return (
                                    <span data-lag={i / 10} key={item + i}>
                                        {item}
                                    </span>
                                )
                            })
                        }
                    </h3>
                </div>
                <div
                    className="rally_banner"
                >
                    <div className="rally_banner_one">
                        <h3>Rally</h3>
                        <p>we rally to solve your marketing challenges</p>
                    </div>
                </div>
                <div
                    className="revive_banner"
                >
                    <div className="revive_banner_one">
                        <h3>REvive</h3>
                        <p>To revive your brand, website, marketing & more.</p>
                    </div>
                </div>
                <div style={{ height: "100dvh" }} />
            </div>
        </div>
    )
}

export default Text2
