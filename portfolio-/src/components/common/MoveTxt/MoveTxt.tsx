import { m, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./MoveTxt.module.scss";
import { useRef } from "react";

interface propTypes {
    children?: string,
    className?: string,
    initial?: number,
}

const MoveTxt = (props: propTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"],
    });
    const spring = {
        stiffness: 400,
        restDelta: 0.001,
        damping: 200,
    }
    const springYProgress = useSpring(scrollYProgress, spring);
    const x = useTransform(springYProgress, [0, 1], [props.initial || 100, 0]);
    const filter = useTransform(springYProgress, [0, 0.5], ["blur(1rem)", "blur(0rem)"]);
    return (
        <>
            <m.div
                ref={ref}
                className={`${styles.move_txt} ${props.className || ""}`}
                style={{ x, filter }}
            >
                {props.children}
            </m.div>
        </>
    )
}

export default MoveTxt
