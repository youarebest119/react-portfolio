import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import styles from "./FramerMotionLearn.module.scss";
import GetQuotesWithAnimations from './GetQuotesWithAnimations/GetQuotesWithAnimations';
import MoveBorder from "./MoveBorder/MoveBorder";
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};
const FramerMotionLearn = () => {
    const [position, setPosition] = useState("0 auto");
    const [checked, setChecked] = useState(false);

    return (
        <section className={styles.framer_motion}>
            <Container>
                <button onClick={() => setPosition("0 auto")}>Flex start</button>
                <button onClick={() => setPosition("auto")}>Center</button>
                <button onClick={() => setPosition("auto 0")}>Flex end</button>
                <div
                    className={`d-flex align-items-center`}
                >
                    <motion.p
                        layout
                        style={{
                            marginInline: position,
                        }}
                        transition={spring}
                    >
                        Im here
                    </motion.p>
                </div>

                <button
                    className={styles.checkbox}
                    onClick={() => setChecked(!checked)}
                >
                    <motion.span
                        layout
                        style={{
                            marginLeft: checked ? "auto" : "0"
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 8,
                        }}
                    ></motion.span>
                </button>
            </Container>
            <Container>
                {checked && <GetQuotesWithAnimations />}
            </Container>
            <Container>
                <MoveBorder />
            </Container>
        </section>
    )
}

export default FramerMotionLearn
