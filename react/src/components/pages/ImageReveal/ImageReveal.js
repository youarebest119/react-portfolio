import { motion, useSpring } from 'framer-motion';
import React, { useState } from 'react';
import cat from "../../../assets/images/image-reveals/cat.jpg";
import dog from "../../../assets/images/image-reveals/dog.jpg";
import ziraffe from "../../../assets/images/image-reveals/giraffe.jpg";
import lion from "../../../assets/images/image-reveals/lion.jpg";
import styles from "./ImageReveal.module.scss";

const ImageReveal = () => {
    const [revealImage, setRevealImage] = useState({
        src: "",
        alt: "",
        opacity: 0,
    });
    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    }
    const imagePos = {
        x: useSpring(0, spring),
        y: useSpring(0, spring),
    }
    const handleMove = e => {
        const { clientX, clientY } = e;
        imagePos.x.set(clientX);
        imagePos.y.set(clientY);
    }

    const animals = [
        {
            name: "Dog",
            title: 'dog',
            img: dog,
        },
        {
            name: "Cat",
            title: 'cat',
            img: cat,
        },
        {
            name: "Lion",
            title: 'lion',
            img: lion,
        },
        {
            name: "Ziraffe",
            title: 'ziraffe',
            img: ziraffe,
        },
    ]

    return (
        <section className={styles.image_reveal} onMouseMove={handleMove}>
            <ul>
                {
                    animals.map(item => (
                        <li
                            key={item.name}
                        >
                            <div
                                onMouseEnter={() => {
                                    setRevealImage({
                                        src: item.img,
                                        alt: item.title,
                                        opacity: 1,
                                    });
                                }}
                                onMouseLeave={() => {
                                    setRevealImage({
                                        src: item.img,
                                        alt: item.title,
                                        opacity: 0,
                                    })
                                }}
                            >
                                {item.name}
                            </div>
                        </li>
                    ))
                }
            </ul>
            <motion.img
                src={revealImage.src}
                className={`${styles.img} ${revealImage.src ? styles.active : ""}`}
                alt={revealImage.alt}
                style={{
                    x: imagePos.x,
                    y: imagePos.y,
                    opacity: revealImage.opacity,
                }}
            />
        </section>
    )
}

export default ImageReveal;