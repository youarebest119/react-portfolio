import React, { useState } from 'react'
import { motion } from "framer-motion";
import styles from "./MoveBorder.module.scss";
const MoveBorder = () => {
    const [active, setActive] = useState(1);
    const [activeSlide, setActiveSlide] = useState(1);
    return (
        <>
            <div className={styles.move_border}>
                <ul className={styles.border_tabs}>
                    {
                        [1, 2, 3].map(item => (
                            <li
                                key={item}
                            >
                                <button
                                    onClick={() => setActive(item)}
                                >
                                    Item Number - {item}
                                </button>
                                {
                                    active === item ?
                                        <motion.div
                                            className={styles.border}
                                            layoutId="arrow"
                                        >
                                        </motion.div>
                                        : null
                                }
                            </li>
                        ))
                    }
                </ul>

                <ul className={styles.slider}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                            <li>
                                {
                                    item === activeSlide &&
                                    <motion.div
                                        layoutId='slider'
                                        layout
                                        // initial={{
                                        //     opacity: 0,
                                        //     x: "100%",
                                        // }}
                                        animate={{
                                            opacity: 1,
                                            x: "0%",
                                        }}

                                        exit={{
                                            opacity: 0,
                                            x: "100%",
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="d-flex justify-content-center">
                    <button disabled={activeSlide === 1} onClick={() => setActiveSlide(activeSlide - 1)}>Prev</button>
                    <button disabled={activeSlide === 8} onClick={() => setActiveSlide(activeSlide + 1)}>Next</button>
                </div>
            </div>
        </>
    )
}

export default MoveBorder
