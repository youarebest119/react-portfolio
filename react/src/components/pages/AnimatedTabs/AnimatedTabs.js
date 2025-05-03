import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import styles from "./AnimatedTabs.module.scss";

const AnimatedTabs = () => {
    const data = [
        {
            emoji: "🍎",
            title: "Apple",
            key: "apple",
        },
        {
            emoji: "🍏",
            title: "Green Apple",
            key: "green-apple"
        },
        {
            emoji: "🥭",
            title: "Mango",
            key: "mango"
        },
        {
            emoji: "🍊",
            title: "Orange",
            key: "orange"
        },
    ];

    const [active, setActive] = useState(data[0]);
    return (
        <>
            <section className={styles.page}>
                <div className={styles.box}>
                    <ul className={styles.tabs}>
                        {
                            data.map(item => {
                                console.log(item, active);
                                return (
                                    <li key={item.key}>
                                        <button
                                            onClick={() => setActive(item)}
                                            className={`${JSON.stringify(item) === JSON.stringify(active) ? styles.active : ""}`}
                                        >
                                            {item.title} <span>{item.emoji}</span>
                                            {
                                                JSON.stringify(item) === JSON.stringify(active) ?
                                                    <motion.span transition={{ layout: { duration: 10, } }} layoutId='tabs' className={styles.border}></motion.span>
                                                    :
                                                    null
                                            }
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={styles.tab_content}>
                        <AnimatePresence mode='wait'>
                            <motion.h3
                                key={active.key}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.2, type: "spring", }}
                            >{active.emoji}</motion.h3>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AnimatedTabs
