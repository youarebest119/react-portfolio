import React, { useRef } from 'react';
import styles from "./RevealTextonViewText.module.scss";
import { motion, useInView } from 'framer-motion';

const RevealTextonViewText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <ul
            className={styles.dummy_text}
            ref={ref}
        >
            {
                [1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <li
                            key={index}
                        >
                            <motion.span
                                animate={{
                                    transform: `translateY(${isInView ? "0%" : "100%"})`,
                                    transition: {
                                        type: "bounce",
                                        duration: 0.5,
                                        delay: index * 0.15,
                                    }
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, deleniti.
                            </motion.span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RevealTextonViewText
