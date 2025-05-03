import { motion, useScroll, useTransform, } from "framer-motion";
import React, { useRef } from 'react';
import styles from "./OnScrollRotate3dText.module.scss";

const OnScrollRotate3dTextElement = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const rotateX = useTransform(scrollYProgress, [0.5, 1], ["0deg", "-100deg"])
    return (
        <>
            <motion.div
                ref={ref}
                className={styles.rotate_el}>
                <motion.div style={{ rotateX }}
                    className={styles.rotate_el_txt}>
                    {children}
                </motion.div>
            </motion.div>
        </>
    )
}

export default OnScrollRotate3dTextElement
