import React from 'react'
import "./AboutGallery.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AboutGallery = () => {
    useGSAP(() => {
        let words = gsap.utils.toArray(".about_gallery .words")
        let panels = gsap.utils.toArray(".about_bg > div")
        let completeLine = gsap.quickTo(".custom_scroll .completed", "yPercent", { duration: 0.3, ease: "linear" })
        let tl = gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".about_gallery",
                    pin: true,
                    scrub: 1,
                    end: "+=500%",
                    onUpdate: ({ progress }) => {
                        completeLine(100 - (-progress * 100));
                    }
                }
            })
            .to(".about_gallery .words", {
                duration: 2,
            })
            .to(".about_gallery .words", {
                yPercent: -25,
                duration: 1,
            })
            .from(".bg_2", {
                yPercent: 100,
                duration: 1,
            }, "<")
            .to(".about_gallery .words", {
                duration: 2,
            })
            .to(".about_gallery .words", {
                yPercent: -50,

                duration: 1,
            })
            .from(".bg_3", {
                yPercent: 100,

                duration: 1,
            }, "<")
            .to(".about_gallery .words", {
                duration: 2,
            })
            .to(".about_gallery .words", {
                yPercent: -75,
                duration: 1,
            })
            .from(".bg_4", {
                yPercent: 100,
                duration: 1,
            }, "<")
            .to(".about_gallery .words", {
                duration: 2,
            })
        // words.forEach((word, index) => {
        //     tl.to(word, {
        //         // yPercent: -100,
        //         yPercent: index * -25,
        //     })
        // })
    })
    return (
        <section className="about_gallery">
            <div className="custom_scroll"><span className="completed" /></div>
            <h2>
                The <br />
                Better
                <div>
                    <div className='words'>
                        <span>{" "}Smiling</span>
                        <span>{" "}inspiring</span>
                        <span className="ing">ing</span>
                        <span>{" "}exciting</span>
                    </div>
                </div>
                <br />
                company
            </h2>
            <div className="about_bg">
                <div className="bg_1"></div>
                <div className="bg_2"></div>
                <div className="bg_3"></div>
                <div className="bg_4"></div>
            </div>
        </section>
    )
}

export default AboutGallery
