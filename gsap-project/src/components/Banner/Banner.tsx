import { Container } from "react-bootstrap";
import "./Banner.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Banner = () => {
    const scope = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.to(
            "h1 div",
            {
                y: (i) => {
                    let f = -(i * (-40) + 120)
                    return f;
                },
                scale: 0.9,
                opacity: 0,
                color: 'blue',
                scrollTrigger: {
                    trigger: ".banner",
                    start: "top top",
                    pin: ".banner",
                    scrub: true,
                    end: "80%",
                    pinSpacing: false,
                },
            },
        )
    }, { scope, });
    return (
        <>
            <section ref={scope}>
                <div className="banner">
                    <Container>
                        <div className="banner_in">
                            <h1>
                                <div>Slightly different</div>
                                <div>digital agency</div>
                            </h1>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Banner
