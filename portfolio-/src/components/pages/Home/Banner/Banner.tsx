import { Container } from "react-bootstrap"
import styles from "./Banner.module.scss";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CONTENT } from "../../../../utils/constants";
import RevealTxt from "../../../common/RevealTxt/RevealTxt";

const Banner = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end center"],
    })
    const variants = {
        initial: {
            filter: "blur(1rem)",
            rotateX: -40,
            y: 100,
        },
        animate: {
            filter: "blur(0rem)",
            rotateX: 0,
            y: 0,
        }
    }
    const clipPath = useTransform(scrollYProgress, [0, 1], ["polygon(0 0, 100% 0, 100% 100%, 0% 100%)", "polygon(0 0, 100% 0, 100% 0%, 0 0%)"]);
    return (
        <>
            <m.section
                id="banner"
                className={styles.banner}
                style={{ clipPath, }}
            >
                <Container>
                    <h2>
                        {CONTENT.BANNER_HELLO}
                    </h2>
                    <h1>
                        <m.div
                            variants={variants}
                            initial={"initial"}
                            animate={"animate"}
                            transition={{
                                duration: 0.6,
                            }}
                        >
                            <span>{CONTENT.BANNER_NAME[0][0]}</span>{CONTENT.BANNER_NAME[0].slice(1)}
                        </m.div>
                        <m.div
                            variants={variants}
                            initial={"initial"}
                            animate={"animate"}
                            transition={{
                                delay: 0.05,
                                duration: 0.6,
                            }}
                        ><span>{CONTENT.BANNER_NAME[1][0]}</span>{CONTENT.BANNER_NAME[1].slice(1)}</m.div>
                    </h1>
                    <div className={styles.txt}>
                        <RevealTxt>
                            {CONTENT.BANNER_TEXT[0]}
                        </RevealTxt>
                        <RevealTxt delay={0.1}>
                            {CONTENT.BANNER_TEXT[1]}
                        </RevealTxt>
                    </div>
                </Container>
            </m.section>
        </>
    )
}

export default Banner
