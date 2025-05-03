import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from 'react';

const Element = ({ img }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const scale = useTransform(scrollYProgress, [0.9, 1], [0.9, 1])
    return (
        <>
            <motion.li style={{ scale }} ref={ref}>
                <img src={img} alt="" />
            </motion.li>
        </>
    )
}

export default Element
