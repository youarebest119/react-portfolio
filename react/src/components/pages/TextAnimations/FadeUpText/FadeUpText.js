import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
import styles from "./FadeUpText.module.scss";

const FadeUpText = (props) => {
    const variants = {
        hide: {
            x: "10px",
            opacity: 0,
        },
        open: (custom) => ({
            x: "0",
            opacity: 1,
            transition: {
                delay: custom * 0.08,
                duration: 0.4,
                type: "spring",
                stiffness: 140
            }
        })
    }
    const ref = useRef();
    const isInView = useInView(ref, {
        once: true,
    });
    return (
        <>
            <div ref={ref} className={styles.text_animate}>
                {
                    props.children?.split(" ").map((item, index) => <motion.div key={`${item}_${index}`}>
                        {
                            item.split("").map((letter, inddex) =>
                                <motion.span
                                    key={`${letter}_${inddex}`}
                                    custom={inddex}
                                    variants={variants}
                                    initial={"hide"}
                                    animate={isInView ? "open" : ""}
                                >{letter}</motion.span>
                            )
                        }&nbsp;
                    </motion.div>
                    )
                }
            </div>
        </>
    )
}

export default FadeUpText
