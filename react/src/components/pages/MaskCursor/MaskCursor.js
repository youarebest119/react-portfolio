import { motion } from "framer-motion";
import React, { useState } from 'react';
import styles from "./MaskCursor.module.scss";
import useMousePosition from './useMousePosition';
import LoremText from "../LoremText/LoremText";

const MaskCursor = () => {
    const mousePosition = useMousePosition();
    const [hovered, setMouseHovered] = useState(false);
    const size = hovered ? 400 : 40;
    return (
        <>
            <section className={styles.mask_cursor}>
                <h1>
                    Witness <br /> the <br /> VISION <br /> Mercedes <br />Maybach 6
                </h1>
                <motion.div
                    className={styles.mask}
                    animate={{
                        WebkitMaskPosition: `${mousePosition.x - (size / 2)}px ${mousePosition.y - (size / 2)}px`,
                        WebkitMaskSize: `${size}px`
                    }}
                    transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                >
                    <h2
                        onMouseEnter={() => setMouseHovered(true)} onMouseLeave={() => setMouseHovered(false)}
                    >
                        the <br /> joy <br /> of <br /> electric <br /> drivingwitness
                    </h2>
                </motion.div>
            </section>
            <LoremText />
        </>
    )
}

export default MaskCursor;