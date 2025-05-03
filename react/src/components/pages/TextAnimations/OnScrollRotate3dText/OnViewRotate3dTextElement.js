import { motion, useInView, } from "framer-motion";
import React, { useRef } from 'react';
import styles from "./OnScrollRotate3dText.module.scss";

const OnViewRotate3dTextElement = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const variants = {
        "initial": {
            rotateX: "-100deg",
        },
        "animate": {
            rotateX: "0deg",
        },
    };

    return (
        <>
            <motion.div
                ref={ref}
                className={styles.view_rotate}
            >
                <motion.div
                    animate={isInView ? "animate" : ""}
                    initial="initial"
                    variants={variants}
                    className={styles.rotate_el_txt}
                    transition={{
                        type: "spring",
                        bounce: 30,
                        stiffness: 200,
                        delay: 0.2,
                    }}
                >
                    {children}
                </motion.div>
            </motion.div>

        </>
    )
}

export default OnViewRotate3dTextElement
