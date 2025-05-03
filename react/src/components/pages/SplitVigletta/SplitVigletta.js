import React from 'react'
import styles from "./SplitVigletta.module.scss";
import Gallery from './Gallery/Gallery';
import wallpaper1 from "../../../assets/images/split-vigletta/wallpaper-1.jpg";
import wallpaper11 from "../../../assets/images/split-vigletta/wallpaper-11.jpg";
import wallpaper2 from "../../../assets/images/split-vigletta/wallpaper-2.jpg";
import wallpaper22 from "../../../assets/images/split-vigletta/wallpaper22.jpg";
import wallpaper3 from "../../../assets/images/split-vigletta/wallpaper-3.jpg";
import wallpaper33 from "../../../assets/images/split-vigletta/wallpaper33.jpg";
import { useSpring } from 'framer-motion';

const projects = [
    {
        bg: wallpaper1,
        fg: wallpaper11,
        title: "Halloween Celebrations",
        subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, omnis.",
    },
    {
        bg: wallpaper2,
        fg: wallpaper22,
        title: "Summer Party",
        subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, omnis.",
    },
    {
        bg: wallpaper3,
        fg: wallpaper33,
        title: "Cars Exhibition",
        subtext: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, omnis.",
    },
]

const SplitVigletta = () => {
    const mousePosition = {
        x: useSpring(0, {
            stiffness: 150,
            damping: 15,
            mass: 0.1
        }),
        y: useSpring(0, {
            stiffness: 150,
            damping: 15,
            mass: 0.1
        }),
    }

    const handleMove = e => {
        const { clientX, clientY } = e;
        mousePosition.x.set((clientX) - (300 / 2));
        mousePosition.y.set((clientY) - (400 / 2));
    }

    return (
        <section
            className={styles.page}
            onMouseMove={handleMove}
        >
            {
                projects.map(item => (
                    <Gallery
                        mousePosition={mousePosition}
                        bg={item.bg}
                        title={item.title}
                        subtext={item.subtext}
                        fg={item.fg}
                    />
                ))
            }
        </section>
    )
}

export default SplitVigletta
