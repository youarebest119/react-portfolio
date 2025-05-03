import { motion, scroll } from "framer-motion";
import React, { useRef, useState } from 'react';
import img1 from "../../../assets/images/scroll-text-with-scrolling/scroll-text-with-scrolling-img1.jpg";
import img2 from "../../../assets/images/scroll-text-with-scrolling/scroll-text-with-scrolling-img2.jpg";
import img3 from "../../../assets/images/scroll-text-with-scrolling/scroll-text-with-scrolling-img3.jpg";
import LoremText from '../LoremText/LoremText';
import styles from "./ScrollTextWithScrolling.module.scss";

const ScrollTextWithScrolling = () => {
    const [value, setValue] = useState(0);
    const ref = useRef();
    scroll(progress => setValue(progress));

    const images = [
        img1, img2, img3
    ];
    return (
        <>
            <section
                className={styles.scroll_text_sec}
                id="somethnin"
                ref={ref}
            >
                {
                    images.map(item => (
                        <img key={item} src={item} alt="" />
                    ))
                }
                <motion.div
                    className={styles.scrollable_text}
                    style={{
                        x: `-${value * 500}%`,
                    }}
                >
                    <h1>Welcome to the city of bridges, where connections flow freely.</h1>
                    {/* <h1 className={styles.copy_text}>Welcome to the city of bridges, where connections flow freely.</h1> */}
                </motion.div>
            </section>
            <LoremText />
            <LoremText />
            <LoremText />
            <LoremText />
        </>
    )
}

export default ScrollTextWithScrolling;
