import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, } from "framer-motion";
import styles from "./TextScrollWithScroller.module.scss";

const TextScrollWithScroller = () => {
    const ref = useRef();
    const [width, setWidth] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, -width])
    const fontWeight = useTransform(scrollYProgress, [0, 1], [900, 100])

    useEffect(() => {
        setWidth(ref.current.scrollWidth);
    }, [])
    return (
        <>
            <motion.section
                className={styles.banner}
                ref={ref}
            >
                <motion.div
                    style={{ x }}
                >
                    <motion.h1 style={{ fontWeight }}>We Provide World's best services</motion.h1>
                </motion.div>
            </motion.section>
            <div style={{ height: '50vh', backgroundColor: "black" }} />
        </>
    )
}

export default TextScrollWithScroller
