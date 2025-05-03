import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Sample1.module.scss";
import img1 from "../../../../assets/images/parallax/parallax1.jpg";
import img2 from "../../../../assets/images/parallax/sample1.jpg";
import { Container } from "react-bootstrap"
import img3 from "../../../../assets/images/parallax/sample2.jpg";
import LoremText from '../../LoremText/LoremText';

const Sample1 = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    const y = useTransform(scrollYProgress, [0, 1], [150, -50]);
    const lgY = useTransform(scrollYProgress, [0, 1], [250, -50]);
    const textY = useTransform(scrollYProgress, [0, 0.6], [250, -50]);
    return (
        <>
            <LoremText />
            <LoremText />
            <section ref={ref} className={styles.sample}>
                <Container>
                    <motion.h2 style={{ y: textY }}>Parallax Effect</motion.h2>
                    <div className={styles.box}>
                        <motion.img style={{ y: lgY }} className={styles.box_left} src={img2} alt="" />
                        <img className={styles.box_main} src={img1} alt="" />
                        <motion.img style={{ y }} src={img3} className={styles.box_right} alt="" />
                    </div>
                </Container>
            </section>
            <LoremText />
            <LoremText />
        </>
    )
}

export default Sample1
