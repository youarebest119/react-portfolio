import React, { useEffect, useRef } from 'react'
import plant1 from "../../../../assets/images/scroll-animations/plant (1).jpg";
import plant2 from "../../../../assets/images/scroll-animations/plant (2).jpg";
import plant3 from "../../../../assets/images/scroll-animations/plant (4).jpg";
import styles from "./Animation4.module.scss"
import { motion, useInView, animate, useAnimate } from "framer-motion";
import { Container } from 'react-bootstrap';
import LoremText from '../../LoremText/LoremText';

const Animation4 = () => {
    const ref = useRef([]);
    const container = useRef(null);
    const isInView = useInView(container);
    useEffect(() => {
        // console.log('isInView :>> ', isInView);
        const sequence = [
            [ref.current[0], { y: ["100%", "0%"], opacity: [0, 1], scale: [0, 1] }, { type: "tween", ease: "easeInOut", duration: 0.5 }],
            [ref.current[0], { x: ["100%", "0%"], }, { type: "tween", ease: "easeInOut", duration: 0.3 }],
            [ref.current[1], { y: ["100%", "0%"], opacity: [0, 1], scale: [0.8, 1] }, { type: "tween", ease: "easeInOut", duration: 0.3, at: "-0.25" }],
            [ref.current[2], { y: ["100%", "0%"], opacity: [0, 1], scale: [0.8, 1] }, { type: "tween", ease: "easeInOut", duration: 0.3, at: "-0.2" }],
        ]
        if (isInView) {
            animate(sequence)
        }
    }, [isInView])
    return (
        <>
            <LoremText />
            <LoremText />
            <section className={styles.animation}>
                <Container>
                    <ul ref={container}>
                        <li ref={ele => ref.current[0] = ele}>
                            <div className={styles.box}>
                                <img src={plant1} alt="plant" />
                            </div>
                        </li>
                        <li ref={ele => ref.current[1] = ele}>
                            <div className={styles.box}>
                                <img src={plant2} alt="plant" />
                            </div>
                        </li>
                        <li ref={ele => ref.current[2] = ele}>
                            <div className={styles.box}>
                                <img src={plant3} alt="plant" />
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
            <LoremText />
            <LoremText />
        </>
    )
}

export default Animation4
