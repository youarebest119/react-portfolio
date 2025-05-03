import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import abstraction3d from "../../../assets/icons/asset_tokenization/abstract-modern-3d.png";
import icon1 from "../../../assets/icons/asset_tokenization/icon1.png";
import icon2 from "../../../assets/icons/asset_tokenization/icon2.png";
import icon3 from "../../../assets/icons/asset_tokenization/icon3.png";
import icon4 from "../../../assets/icons/asset_tokenization/icon4.png";
import icon5 from "../../../assets/icons/asset_tokenization/icon5.png";
import icon6 from "../../../assets/icons/asset_tokenization/icon6.png";
import icon7 from "../../../assets/icons/asset_tokenization/icon7.png";
import icon8 from "../../../assets/icons/asset_tokenization/icon8.png";
import "./AssetToken.scss";
import { animateLines, animateModel } from "./AssetToken.utils";

const assetsIcons = [
    { icon: icon1, className: "icon-1" },
    { icon: icon2, className: "icon-2" },
    { icon: icon3, className: "icon-3" },
    { icon: icon4, className: "icon-4" },
    { icon: icon5, className: "icon-5" },
    { icon: icon6, className: "icon-6" },
    { icon: icon7, className: "icon-7" },
    { icon: icon8, className: "icon-8" },
]
const content = [
    "The asset tokenization market is anticipated to expand into a USD 16.1 trillion business opportunity by 2030. Businesses that act now are poised to thrive among shifting demands.",
    "Our white label asset tokenization platform expedites your entry into the market, helping you to meet the rapid demand of digital disruption and drive business results. We understand that today’s leaders are defined by how well they apply innovation to mature their solutions. Our blockchain and product engineering capabilities help you innovate and optimize asset tokenization experiences for your clients.",
    "No matter your business vertical, our ready-to-deploy asset tokenization platform – underpinned by market-leading features – perfectly aligns with your goals.",
    "Lead, innovate, and succeed with our white label asset tokenization platform.",
];
const AssetToken = () => {
    const assets = useRef([]);
    const section = useRef();
    const h2 = useRef();
    const para = useRef([]);
    const model = useRef();
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section.current,
                markers: true,
                start: "top top",
                toggleActions: "play reverse none reverse",
                pin: true,
                scrub: 1,
                pinSpacing: false,
                end: "+=3000",
            }
        });

        tl.add(animateModel(model));
        tl.add(animateLines(h2), "-=2");
        para.current.forEach(item => {
            tl.add(animateLines(item, false, true));
        })
        tl.add(animateLines(h2, true));
        tl.add(animateModel(model, true));
        para.current.forEach(item => {
            tl.add(animateLines(item, true, true));
        })
    })
    return (
        <section ref={section} className="asset_token">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="asset_token_content">
                            <h2 ref={h2}>
                                <div className="light">Accelerate your Time-to-</div>
                                <div className="light">Market with our White Label</div>
                                Asset Tokenization Platform
                            </h2>
                            <div>
                                {
                                    content.map((item, index) => {
                                        return (
                                            <p ref={el => para.current[index] = el} key={item}>
                                                <div>
                                                    {item}
                                                </div>
                                            </p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="asset_token_img">
                            <div ref={model} className="asset_token_img_in">
                                {
                                    assetsIcons.map((item, index) => {
                                        return (
                                            <img className={item.className} ref={el => assets.current[index] = el} key={index} src={item.icon} alt="" />
                                        )
                                    })
                                }
                                <img src={abstraction3d} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AssetToken
