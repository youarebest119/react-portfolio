import { Col, Container, Row } from "react-bootstrap";
import "./About.scss";
import AnimateText from "../AnimateText/AnimateText";
import AnimateAsset from "../AnimateAsset/AnimateAsset";
import laurent from "../../assets/videos/Laurent.mp4";

const About = () => {
    return (
        <section className="about_sec">
            <Container>
                <div className="about_in">
                    <h2>
                        <AnimateText id="about-1">
                            {
                                [
                                    "The hook up between creativity,",
                                    "technical expertise and strategy.",
                                    "We build inspiring and performant",
                                    "digital solutions.",
                                ]
                            }
                        </AnimateText>
                    </h2>
                    <Row>
                        <Col md={6}>
                            <AnimateAsset
                                video={laurent}
                            />
                        </Col>
                        <Col md={6}>
                            <h3>
                                <AnimateText id="about-2">
                                    {
                                        [
                                            "User experience is the core of our thinking,",
                                            "web culture is in our DNA.",
                                        ]
                                    }
                                </AnimateText>
                            </h3>
                            <h3>
                                <AnimateText id="about-3">
                                    {
                                        [
                                            "With agility, boldness and a pinch of",
                                            "impertinence, we design impactful solutions.",
                                        ]
                                    }
                                </AnimateText>
                            </h3>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div style={{ height: "100dvh" }} />
        </section>
    )
}

export default About
