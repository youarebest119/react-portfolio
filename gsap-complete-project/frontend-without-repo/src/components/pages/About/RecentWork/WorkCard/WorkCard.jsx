import React, { useRef } from 'react'
import "./WorkCard.scss";
import { useGSAP } from '@gsap/react';
import { Container } from 'react-bootstrap';
import gsap from 'gsap';

const WorkCard = ({ title, image, description, direction = "left" }) => {
    const cardRef = useRef();
    useGSAP(() => {
        const card = cardRef.current;
        const p = cardRef.current.querySelector("p");
        const imageBox = cardRef.current.querySelector(".card_img");
        const image = cardRef.current.querySelector(".card_img img");
        const h3 = cardRef.current.querySelector("h3");
        const button = cardRef.current.querySelector("button");

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            })
            .from([h3, p, button], {
                opacity: 0,
                y: 150,
                stagger: 0.05,
            })
            .from(imageBox, {
                yPercent: 10,
                opacity: 0,
            }, "<")
            .from(image, {
                scale: 1.6,
            }, "<")
    })
    return (
        <>
            <div ref={cardRef} className={`work_card_design ${direction}`}>
                <Container>
                    <div className="work_card_design_in">
                        <div className="card_left">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <button type="button">View Project</button>
                        </div>
                        <div className="card_img">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default WorkCard
