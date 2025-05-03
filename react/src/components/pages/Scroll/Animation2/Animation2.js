import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';
import styles from "./Animation2.module.scss";

const Animation2 = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0.2, 0.5], ["0vh", "-100vh"])
    const scaleX = useTransform(scrollYProgress, [0.3, 0.65], ["40%", "100%"])
    const boxPosition = useTransform(scrollYProgress, [0.65, 0.7], ["50vh", "0vh"])
    return (
        <>
            <motion.section ref={ref} className={styles.animation}>
                <div className={styles.row}>
                    <motion.div style={{ y }} className={styles.left_col}>
                        <h2>Powered by Something</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam enim magni obcaecati at, maxime, cumque pariatur asperiores non veritatis eum vero distinctio, commodi quod!</p>
                    </motion.div>
                    <motion.div style={{ width: scaleX, }} className={styles.right_col}>
                        <div className={styles.right_col_box}>
                            <motion.div style={{ y: boxPosition, }}>
                                <h3>Scroll Down For More</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default Animation2
