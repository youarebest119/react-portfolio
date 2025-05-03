import React from 'react'
import bts1 from "../../../../assets/images/recent-work-1.webp";
import bts2 from "../../../../assets/images/recent-work-2.webp";
import bts3 from "../../../../assets/images/recent-work-3.webp";
import bts4 from "../../../../assets/images/gallery1.jpg";
import bts5 from "../../../../assets/images/gallery2.jpg";
import bts6 from "../../../../assets/images/gallery3.jpg";
import bts7 from "../../../../assets/images/gallery4.jpg";
import "./Bts.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Bts = () => {
    useGSAP(() => {
        const panels = gsap.utils.toArray(".design_box_gallery img");
        gsap.timeline({
            scrollTrigger: {
                trigger: ".bts_design",
                scrub: 2,
                start: "top top",
                pin: true,
                end: () => `+=${panels.length * 100}%`,
            }
        })
            .from(".bts_design_box", {
                height: 0,
                duration: 0.4,
            })
            .to(".bts_design_in h3", {
                scale: 0.5,
                duration: 0.4,
            }, "0")
            .to(".design_box_gallery", {
                yPercent: () => `-${(panels.length - 1) * 100}`,
                ease: "power.in",
                duration: panels.length,
            })
    })
    return (
        <section className="bts_design">
            <div className="container">
                <div className="bts_design_in">
                    <h3>Behind <span>the scenes</span></h3>
                    <div className="bts_design_box">
                        <div className="design_box_gallery">
                            <img src={bts1} alt="" />
                            <img src={bts2} alt="" />
                            <img src={bts3} alt="" />
                            <img src={bts4} alt="" />
                            <img src={bts5} alt="" />
                            <img src={bts6} alt="" />
                            <img src={bts7} alt="" />
                        </div>
                    </div>
                    <h3><span>Behind</span> the scenes</h3>
                </div>
            </div>
        </section>
    )
}

export default Bts
