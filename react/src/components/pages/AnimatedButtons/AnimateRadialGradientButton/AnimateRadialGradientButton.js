import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import styles from "./AnimateRadialGradientButton.module.scss";

const AnimateRadialGradientButton = () => {
    const [tap, setTap] = useState(false);
    const mousePos = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }
    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        let { left, top } = currentTarget.getBoundingClientRect();
        mousePos.x.set(clientX - left);
        mousePos.y.set(clientY - top);
    }
    return (
        <>
            <section className={styles.animate_box}>
                <Container>
                    <motion.button
                        onMouseMove={handleMouseMove}
                        className={styles.btn}
                        onMouseDown={() => setTap(true)}
                        onMouseUp={() => setTap(false)}
                    >
                        Just Hover Me
                        <motion.span
                            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                            style={{
                                background: useMotionTemplate`radial-gradient(
              ${tap ? "400px" : "165px"} circle at ${mousePos.x}px ${mousePos.y}px,
              rgba(255, 136, 0, 8),
              transparent 80%
            )`,
                            }}
                        >

                        </motion.span>
                    </motion.button>
                </Container>
            </section>
        </>
    )
}

export default AnimateRadialGradientButton
