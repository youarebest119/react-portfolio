import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { Container } from 'react-bootstrap';
import "./Services.scss";

const Services = () => {
    useGSAP(() => {
        const panels = gsap.utils.toArray(".service_card:not(:first-child)");
        const tl = gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".services",
                    pin: true,
                    scrub: 1,
                    end: `+=${panels.length * 100}%`,
                }
            })

        panels.forEach((panel) => {
            tl.from(panel, {
                yPercent: 100,
            })
        })
    })
    return (
        <section className="services">
            <div className="services_sec">
                <Container>
                    <div className="services_in">
                        <div className="service_card">
                            <div className="service_card_box" style={{ backgroundColor: "#0262d7", }}>
                                <h2>1</h2>
                                <div>
                                    <h3>Branding</h3>
                                    <p>I create strong, memorable brand identities that resonate with your values and connect with your target audience. From logo design to brand guidelines, I ensure your brand stands out and leaves a lasting impression.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="service_card_box" style={{ backgroundColor: "#ff5252", }}>
                                <h2>2</h2>
                                <div>
                                    <h3>Web design</h3>
                                    <p>Beautiful and user-friendly web design that not only looks great but also delivers an engaging experience. I focus on crafting designs that capture the essence of your brand and turn visitors into loyal customers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="service_card_box" style={{ backgroundColor: "#44ac50", }}>
                                <h2>3</h2>
                                <div>
                                    <h3>Web Development</h3>
                                    <p>I bring web designs to life with clean, efficient code, prioritizing the performance and accessibility of the website. This ensures your site is fast, responsive, and usable for everyone</p>
                                </div>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="service_card_box" style={{ backgroundColor: "#ff7dfd", }}>
                                <h2>4</h2>
                                <div>
                                    <h3>Graphic Design</h3>
                                    <p>Visual content that stands out. Whether it's marketing materials, social media graphics, or print design, I create eye-catching visuals that communicate your message effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Services
