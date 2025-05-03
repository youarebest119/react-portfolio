import React from 'react'
import { motion } from 'framer-motion';
import styles from "./Gallery.module.scss";

const Gallery = ({ title, bg, fg, subtext, mousePosition }) => {
    const { x, y } = mousePosition;

    return (
        <div
            className={styles.gallery}
        >
            <div className={styles.gallery_in}>
                <img src={bg} alt="" />
                <div className={styles.gallery_details}>
                    <h2>{title}</h2>
                    <p>{subtext}</p>
                </div>
            </div>
            <motion.div
                style={{ x, y }}
                className={styles.gallery_hover}
            >
                <motion.img
                    src={fg}
                    alt=""
                />
            </motion.div>
        </div>
    )
}

export default Gallery
