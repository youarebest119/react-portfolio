import React, { useState } from 'react'
import styles from "./OpenListAnimation.module.scss"
import img1 from "../../../assets/images/open_list_animation/open_list_animation1.jpg";
import img2 from "../../../assets/images/open_list_animation/open_list_animation2.jpg";
import img3 from "../../../assets/images/open_list_animation/open_list_animation3.jpg";
import img4 from "../../../assets/images/open_list_animation/open_list_animation4.jpg";
import { motion } from "framer-motion";
import LoremText from '../LoremText/LoremText';

const OpenListAnimation = () => {
    const data = [
        {
            image: img1,
            title: "Porshe",
            description: "Porsche is a renowned German automobile manufacturer with an emphasis in high-performance luxury sports cars, SUVs and sedans.",
        },
        {
            image: img2,
            title: "Mercedes",
            description: "we are one of the leading global suppliers of high-end passenger cars and premium vans"
        },
        {
            image: img3,
            title: "Ferrari",
            description: "Italian luxury sports car manufacturer based in Maranello, Italy"
        },
        {
            image: img4,
            title: "Cheverolet",
            description: "Its current lineup include the Chevrolet Spark"
        }
    ];
    const [active, setActive] = useState({
        id: null,
        bg: "",
    });
    return (
        <section className={styles.open_list_}>
            <LoremText />
            <motion.ul
                layout
                animate={{
                    backgroundImage: `url(${active.bg})`,
                }}
            >
                {
                    data.map((item, index) => (
                        <motion.li
                            className={`${active.id === index ? styles.show : ""}`}
                            onHoverStart={() => {
                                setActive({
                                    bg: item.image,
                                    id: index,
                                });
                            }}
                            onHoverEnd={() => {
                                setActive({
                                    id: null,
                                    bg: "",
                                });
                            }}
                        >
                            <motion.img
                                src={item.image}
                                alt=""
                                style={{
                                    opacity: active.bg ? "0" : "1"
                                }}
                            />
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.li>
                    ))
                }
            </motion.ul>
            <LoremText />
        </section>
    )
}

export default OpenListAnimation
