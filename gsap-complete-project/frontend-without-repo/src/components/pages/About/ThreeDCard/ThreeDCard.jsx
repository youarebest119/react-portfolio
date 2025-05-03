import React, { useRef, useState } from 'react'
import "./ThreeDCard.scss";
import { Container } from 'react-bootstrap';
import main from "../../../../assets/images/three-d-card-main.jpg"
import img1 from "../../../../assets/images/three-d-card-1.jpg"
import img2 from "../../../../assets/images/three-d-card-2.jpg"
import img3 from "../../../../assets/images/three-d-card-3.jpg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ThreeDCard = () => {
    const card = useRef();
    const [coords, setCoords] = useState({ x: 0, y: 0, });
    
    useGSAP(() => {
        gsap
            .timeline()
            .to(card.current, {
                rotateY: coords.x * 10,
                rotateX: -coords.y * 10,
                duration: 0.5,
            })
            .to(gsap.utils.selector(card.current)("img"), {
                xPercent: - coords.x * 4.8,
                yPercent: - coords.y * 4.8,
                duration: 0.5,
            }, "<")
    }, { dependencies: [coords] })
    const handleMouseMove = (e) => {
        const { offsetWidth: width, offsetHeight: height } = card.current;
        const { clientX, clientY } = e;

        const x = ((clientX - width / 2) / width) - 0.5;
        const y = ((clientY - height / 2) / height) - 0.5;
        setCoords({ x, y });
    };
    const handleMouseOut = () => {
        setCoords({ x: 0, y: 0, })
    }
    return (
        <section className="three_d_design">
            <Container>
                <div onMouseLeave={handleMouseOut} onMouseMove={handleMouseMove} ref={card} className="design_in">
                    <div className="img_1">
                        <img src={img1} alt="" />
                    </div>
                    <div className="img_2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="img_3">
                        <img src={img3} alt="" />
                    </div>
                    <div className="main_img">
                        <img src={main} alt="" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ThreeDCard
