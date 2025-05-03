import { motion, useInView } from "framer-motion";
import React, { useRef } from 'react';
import { Container } from "react-bootstrap";
import styles from "./BannerTextAnimation.module.scss";

const BannerTextAnimation = () => {
    const ref = useRef();
    const isInView = useInView(ref);
    return (
        <>
            <section className={styles.banner}>
                <Container>
                    <div className={styles.banner_text}>
                        <svg ref={ref} width="448" height="120" viewBox="0 0 448 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.01,

                            }} d="M20.16 76H37.68V88H4.48V31.6H20.16V76Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.02,

                            }} d="M71.52 88.56C66.24 88.56 61.3867 87.3333 56.96 84.88C52.5333 82.3733 49.0133 78.9333 46.4 74.56C43.84 70.1333 42.56 65.1467 42.56 59.6C42.56 54.0533 43.84 49.0933 46.4 44.72C49.0133 40.2933 52.5333 36.8533 56.96 34.4C61.3867 31.9467 66.24 30.72 71.52 30.72C76.8533 30.72 81.7067 31.9467 86.08 34.4C90.5067 36.8533 94 40.2933 96.56 44.72C99.12 49.0933 100.4 54.0533 100.4 59.6C100.4 65.1467 99.12 70.1333 96.56 74.56C94 78.9333 90.5067 82.3733 86.08 84.88C81.6533 87.3333 76.8 88.56 71.52 88.56ZM71.52 74C75.52 74 78.6667 72.6933 80.96 70.08C83.3067 67.4667 84.48 63.9733 84.48 59.6C84.48 55.12 83.3067 51.6 80.96 49.04C78.6667 46.4267 75.52 45.12 71.52 45.12C67.4667 45.12 64.2933 46.4267 62 49.04C59.7067 51.6 58.56 55.12 58.56 59.6C58.56 64.0267 59.7067 67.5467 62 70.16C64.2933 72.72 67.4667 74 71.52 74Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.03,

                            }} d="M162.36 31.6L142.92 88H122.84L103.32 31.6H120.12L132.92 72.32L145.64 31.6H162.36Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.04,

                            }} d="M183.16 44.16V53.36H201.16V65.28H183.16V75.44H203.56V88H167.48V31.6H203.56V44.16H183.16Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.05,

                            }} d="M256.04 50.4C256.04 53.8133 255.24 56.9333 253.64 59.76C252.093 62.5333 249.72 64.7733 246.52 66.48C243.373 68.1333 239.507 68.96 234.92 68.96H227.16V88H211.48V31.6H234.92C239.453 31.6 243.293 32.4 246.44 34C249.64 35.6 252.04 37.8133 253.64 40.64C255.24 43.4667 256.04 46.72 256.04 50.4ZM233.4 56.48C237.827 56.48 240.04 54.4533 240.04 50.4C240.04 46.2933 237.827 44.24 233.4 44.24H227.16V56.48H233.4Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.06,

                            }} d="M289.04 88L277.84 67.2H276.16V88H260.48V31.6H285.2C289.733 31.6 293.573 32.4 296.72 34C299.867 35.5467 302.24 37.7067 303.84 40.48C305.44 43.2 306.24 46.2667 306.24 49.68C306.24 53.52 305.173 56.9067 303.04 59.84C300.96 62.72 297.893 64.7733 293.84 66L306.56 88H289.04ZM276.16 56.48H283.92C286.053 56.48 287.653 55.9733 288.72 54.96C289.787 53.9467 290.32 52.48 290.32 50.56C290.32 48.7467 289.76 47.3333 288.64 46.32C287.573 45.2533 286 44.72 283.92 44.72H276.16V56.48Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.07,

                            }} d="M329.16 44.16V53.36H347.16V65.28H329.16V75.44H349.56V88H313.48V31.6H349.56V44.16H329.16Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.08,

                            }} d="M373.16 44.16V53.36H391.16V65.28H373.16V75.44H393.56V88H357.48V31.6H393.56V44.16H373.16Z" fill="black" />
                            <motion.path initial={{ y: "100%" }} animate={{ y: isInView ? "0" : "100%" }} transition={{
                                duration: 0.4,
                                type: "spring",
                                stiffness: 150,
                                delay: 0.09,

                            }} d="M445.96 31.6V44.08H430.92V88H415.24V44.08H400.36V31.6H445.96Z" fill="black" />
                        </svg>
                        <div className="d-flex align-items-center">
                            <motion.button
                                initial={{
                                    opacity: 0,
                                    y: "100%"
                                }}
                                animate={{
                                    opacity: 1,
                                    y: "0"
                                }}
                                transition={{
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 150,
                                    duration: 0.4
                                }}
                            >
                                Submit
                            </motion.button>
                            <motion.button
                                initial={{
                                    opacity: 0,
                                    y: "100%"
                                }}
                                animate={{
                                    opacity: 1,
                                    y: "0"
                                }}
                                transition={{
                                    delay: 0.25,
                                    stiffness: 150,
                                    type: "spring",
                                    duration: 0.4
                                }}
                            >
                                Submit
                            </motion.button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BannerTextAnimation
