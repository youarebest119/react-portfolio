import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';
import thumbnail from "../../../../assets/images/scroll-animations/nature-thumbnail.jpg";
import sampleVideo from "../../../../assets/images/scroll-animations/nature.mp4";
import styles from "./Animation.module.scss";
import { useSpring } from "framer-motion";

const Animation = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const springYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });
    const scale = useTransform(springYProgress, [0, 0.15, 0.4, 0.8, 1], [0.8, 0.8, 1, 1, 0.8])
    const scaleBox = useTransform(springYProgress, [0.4, 0.6], [1, 0])
    const y = useTransform(springYProgress, [0.4, 0.6], [1000, 0])
    const scaleVideo = useTransform(springYProgress, [0.4, 0.6], [0.6, 1])

    return (
        <>
            <motion.section ref={ref} className={styles.animation}>
                <motion.div
                    style={{ scale }}
                    className={styles.in}
                >
                    <div className={styles.city}>
                        <motion.div
                            style={{ scale: scaleBox, }}>
                            <h2>Hello Motion Framer</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae veritatis exercitationem molestias cumque cupiditate vitae perferendis at nulla expedita amet saepe et, sit veniam!</p>
                            <button>
                                Don't Click Me
                            </button>
                        </motion.div>
                        <motion.div style={{ y, scale: scaleVideo }} className={styles.animation_video}>
                            <video poster={thumbnail}>
                                <source src={sampleVideo} />
                            </video>
                            <button className="position-absolute top-50 start-50 translate-middle">
                                Play
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

        </>
    )
}

export default Animation
