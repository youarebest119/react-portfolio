import { useRef } from "react";
import styles from "./AboutCard.module.scss";
import SpinNumbers from "react-animated-numbers";
import { m, useScroll, useSpring, useTransform } from "framer-motion";

interface propTypes {
    title?: string,
    count: number,
    isEven: boolean,
}

const AboutCard = (props: propTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });
    const spring = {
        stiffness: 400,
        restDelta: 0.001,
        damping: 200,
    }
    const springYProgress = useSpring(scrollYProgress, spring);
    const x = useTransform(springYProgress, [0, 1], [props.isEven ? -100 : 100, 0]);
    const y = useTransform(springYProgress, [0, 1], [100, 0]);
    return (
        <>
            <m.div style={{ x, y }} ref={ref} className={styles.about_card}>
                <h2>
                    {props.count < 10 && "0"}
                    <SpinNumbers
                        includeComma={false}
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.2,
                        })}
                        animateToNumber={props.count}
                    />
                </h2>
                <p>{props.title}</p>
            </m.div>
        </>
    )
}

export default AboutCard;
