import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import RevealTxt from "../../../common/RevealTxt/RevealTxt";
import styles from "./Portfolio.module.scss";
import HeadingTxt from "../../../common/HeadingTxt/HeadingTxt";

const Portfolio = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const spring = {
        stiffness: 500,
        restDelta: 0.001,
        damping: 100,
    }
    const springYProgress = useSpring(scrollYProgress, spring);

    const width = useTransform(springYProgress, [0, 1], ["0%", "100%"])
    return (
        <>
            <section ref={ref} id="portfolio" className={styles.portfolio}>
                <div className={styles.in}>
                    <Container>
                        <div className={styles.box}>
                            <h2>
                                <HeadingTxt>
                                    <RevealTxt delay={0.2}>
                                        PORTFOLIO
                                    </RevealTxt>
                                </HeadingTxt>
                            </h2>
                            <div className={styles.line}>
                                <m.div style={{ width }} />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Portfolio
