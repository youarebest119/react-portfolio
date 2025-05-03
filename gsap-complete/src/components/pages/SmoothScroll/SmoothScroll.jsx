import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import React, { useRef } from 'react';
import "./SmoothScroll.scss";
import SmoothScrollWithGsapAndScrollTrigger from './SmoothScrollWithGsapAndScrollTrigger';
import Images from './Images';
import OpenModal from './OpenModal';
import img1 from "../../../assets/images/sample-image-1.png";
import img2 from "../../../assets/images/sample-image-2.jpeg"
import img3 from "../../../assets/images/sample-image-3.jpeg"
import img4 from "../../../assets/images/sample-image-4.jpeg"
import gsap from 'gsap';
import { Container } from 'react-bootstrap';
import HorizontalScrolling from './HorizontalScrolling';

const SmoothScroll = () => {
    const smoother = useRef();
    const skewSetter = useRef();
    const clamp = useRef();
    const { contextSafe } = useGSAP(() => {
        skewSetter.current = gsap.quickTo(".skew_animate_imgs img", "skewY")
        clamp.current = gsap.utils.clamp(-20, 20);
        smoother.current = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            // smoothTouch: 0.1,    
            effects: true,
            onUpdate: (self) => {
                skewSetter.current(clamp.current(self.getVelocity() / -50));
            },
            onStop: () => skewSetter.current(0),
        })
        smoother.current.effects("#smooth_boxes .box", {
            speed: 0.5,
            lag: i => i * 1,
        })
    })

    const goToSectionC = contextSafe(() => {
        smoother.current.scrollTo("#section-c", true, "center center") //target, smoothness, position - target viewport
        // gsap.to(
        //     smoother.current,
        //     {
        //         scrollTop: smoother.current.offset("#section-c", "center center"),
        //         duration: 2,
        //         ease: "back.out",
        //     }
        // )
    })
    const scrollToTop = contextSafe(() => {
        smoother.current.scrollTop(0);
    })
    return (
        <div className='smooth_scroll_page'>
            <div id="smooth-wrapper">
                <button className='scroll_top_top' onClick={scrollToTop}>Scroll To Top</button>
                <div id="smooth-content">
                    <div className="my_content">
                        <h1 className="title">Scroll Smoother</h1>
                        <div className="boxes" id="smooth_boxes">
                            <div
                                // data-speed="0.4"
                                // data-lag="0.4"
                                className="box box-a">
                                a
                            </div>
                            <div
                                // data-speed="0.6"
                                // data-lag="0.6"
                                className="box box-b">
                                b
                            </div>
                            <div
                                // data-speed="0.8"
                                // data-lag="0.8"
                                className="box box-c">
                                c
                            </div>
                            <div className="extra_line"
                                data-speed="3">
                                I'm Faster
                            </div>
                        </div>
                        <button
                            onClick={goToSectionC} className='d-flex mx-auto'>
                            Scroll To "section-c"
                        </button>
                        <div style={{ height: "100dvh", minHeight: 400, }} />
                        <section id="section-c" className='border-2 border border-warning py-5'>
                            <h2 className="title mb-0">Section C</h2>
                        </section>
                        <div style={{ height: "100dvh", minHeight: 400, }} />
                        <SmoothScrollWithGsapAndScrollTrigger />
                        <Images smoother={smoother} />
                        <div style={{ height: "100dvh", minHeight: 400, }} />
                        <OpenModal />
                        <Container>
                            <div className="skew_animate_imgs">
                                <div><img src={img1} alt="" /></div>
                                <div className="d-flex justify-content-end"><img src={img2} alt="" /></div>
                                <div><img src={img3} alt="" /></div>
                                <div className="d-flex justify-content-end"><img src={img4} alt="" /></div>
                            </div>
                        </Container>
                        <div style={{ height: "100dvh", minHeight: 400, }} />
                        <HorizontalScrolling />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmoothScroll
