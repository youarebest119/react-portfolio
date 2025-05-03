import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import styles from "./ZoomOut.module.scss";

const Element = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        // once: true,
    })
    const variant = {
        initial: {
            filter: "blur(6px)",
            scale: 5,
            opacity: 0,
        },
        animate: {
            scale: 1,
            filter: "blur(0px)",
            opacity: 1
        },
    }
    return (
        <>
            <motion.div
                ref={ref}
                className={styles.element}
                initial={"initial"}
                animate={isInView ? "animate" : ""}
                variants={variant}
                transition={{
                    duration: 0.8,
                    // delay: 0.05,
                    type: "spring",
                }}
            >
                {
                    children
                }
            </motion.div>
        </>
    )
}

export default Element
