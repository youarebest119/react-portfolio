import React, { useRef } from 'react'
import img1 from "../../../assets/images/sample-image-1.png";
import img2 from "../../../assets/images/sample-image-2.jpeg"
import img3 from "../../../assets/images/sample-image-3.jpeg"
import img4 from "../../../assets/images/sample-image-4.jpeg"
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';

const Images = ({ smoother }) => {
    const container = useRef();
    useGSAP(() => {
        smoother.current && smoother.current.effects("img", {
            speed: "auto",
            lag: 0.4,
        })
    },
        {
            scope: container,
        }
    )
    return (
        <Container ref={container}>
            <div className="smooth_images">
                <div className="image_wrapper">
                    <img src={img1} alt="" />
                </div>
                <div className="d-flex justify-content-end">
                    <div className="image_wrapper">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="image_wrapper">
                    <img src={img3} alt="" />
                </div>
                <div className="d-flex justify-content-end">
                    <div className="image_wrapper">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Images
