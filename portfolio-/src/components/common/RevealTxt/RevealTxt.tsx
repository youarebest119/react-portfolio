import { ReactNode, useRef } from "react";
import { m, useInView } from "framer-motion";
import styles from "./RevealTxt.module.scss";

interface propTypes {
    children?: ReactNode,
    className?: string,
    delay?: number,
}

const RevealTxt = (props: propTypes) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        // once: true,
    });
    return (
        <>
            <div ref={ref} className={`${styles.txt} ${props.className || ""}`}>
                <m.div
                    initial={{
                        y: "100%",
                    }}
                    animate={isInView ? {
                        y: "0%",
                    } : {}}
                    transition={{
                        delay: props.delay,
                        duration: 0.6,
                        ease: "easeInOut",
                        type: "tween",
                    }}
                >{props.children}</m.div>
            </div>
        </>
    )
}

export default RevealTxt
