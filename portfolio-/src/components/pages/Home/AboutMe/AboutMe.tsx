import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutMe.module.scss";
import HeadingTxt from "../../../common/HeadingTxt/HeadingTxt";
import MoveTxt from "../../../common/MoveTxt/MoveTxt";
import RevealTxt from "../../../common/RevealTxt/RevealTxt";
import { CONTENT, LIST_CONTENT } from "../../../../utils/constants";
import AboutCard from "./AboutCard/AboutCard";

const AboutMe = () => {
    return (
        <>
            <section id="about-me" className={styles.about}>
                <Container>
                    <HeadingTxt>
                        <MoveTxt>about</MoveTxt>
                    </HeadingTxt>
                    <div className={styles.about_txt}>
                        <RevealTxt>{CONTENT.ABOUT_HELLO[0]}</RevealTxt>
                        <RevealTxt delay={0.1}>{CONTENT.ABOUT_HELLO[1]}</RevealTxt>
                    </div>
                    <Row>
                        {
                            LIST_CONTENT.ABOUT.map((item, index) => {
                                return (
                                    <Col key={item.title} md={6}>
                                        <AboutCard
                                            isEven={index % 2 === 0}
                                            title={item.title}
                                            count={item.count}
                                        />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutMe
