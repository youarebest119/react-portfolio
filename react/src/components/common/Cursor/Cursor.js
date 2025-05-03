import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from 'react';
import styles from "./Cursor.module.scss";
// import useMousePosition from './useMousePosition';

const Cursor = () => {
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }
    useEffect(() => {
        window.onmousemove = e => {
            mousePosition.x.set(e.clientX - 5);
            mousePosition.y.set(e.clientY - 5);
        };
        return () => {
            window.onmousemove = null;
        };
    }, [mousePosition.x, mousePosition.y]);
    const spring = {
        stiffness: 250,
        damping: 25,
    }
    const springX = useSpring(mousePosition.x, spring);
    const springY = useSpring(mousePosition.y, spring);
    return (
        <>

            <motion.div
                className={styles.cursor}
                style={{
                    x: springX,
                    y: springY,
                }}
            />
        </>
    )
}

export default Cursor
