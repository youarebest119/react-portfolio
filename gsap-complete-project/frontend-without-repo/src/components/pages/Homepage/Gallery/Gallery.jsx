import React from 'react'
import gallery1 from "../../../../assets/images/gallery1.jpg";
import gallery2 from "../../../../assets/images/gallery2.jpg";
import gallery3 from "../../../../assets/images/gallery3.jpg";
import gallery4 from "../../../../assets/images/gallery4.jpg";
import gallery5 from "../../../../assets/images/gallery5.jpg";
import "./Gallery.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Gallery = () => {
    useGSAP(() => {
        const views = gsap.utils.toArray(".gallery_view img");
        const content = gsap.utils.toArray(".gallery_content h4")
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery_design",
                pin: true,
                scrub: true,
                markers: false,
                start: "top top",
                end: () => "+=" + views.length * 100 + "%",
            }
        })
        views.forEach((view, index) => {
            tl.from(view, {
                yPercent: index === 0 ? 0 : 100,
                ease: "none",
            })
            tl.from(content[index], {
                opacity: 0,
                y: 10,
                ease: "none",
            }, "<")
            tl.to(content[index], {
                opacity: 0,
                y: -10,
                ease: "none",
            }, "+=0.1")
        })
    })
    return (
        <section className="gallery_design">
            <div className="gallery_in">
                <div className="gallery_content">
                    <h4>100% Electric</h4>
                    <h4>Magic Hitch</h4>
                    <h4>Easy Tow</h4>
                    <h4>Remote Control</h4>
                    <h4>InstaCamp</h4>
                </div>
                <div className="gallery_view">
                    <img src={gallery1} alt="" />
                    <img src={gallery2} alt="" />
                    <img src={gallery3} alt="" />
                    <img src={gallery4} alt="" />
                    <img src={gallery5} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Gallery
