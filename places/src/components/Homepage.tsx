import styles from "./Homepage.module.scss";
import desert from "../assets/images/sahara.jpg"
import dolomites from "../assets/images/dolomites.jpg"
import highlands from "../assets/images/highlands.jpg"
import maldives from "../assets/images/maldives.jpg"
import { useEffect, useState } from "react";
import { AnimatePresence, motion, animate, stagger } from "framer-motion";
import { RefreshIcon } from "../assets/icons/icons";

const Homepage = () => {
    const list = [
        {
            img: dolomites,
            title: "DOLOMITES",
        },
        {
            img: highlands,
            title: "HighLands",
        },
        {
            img: maldives,
            title: "MALDIVES",
        },
        {
            img: desert,
            title: "DESERT",
        }
    ];
    const [current, setCurrent] = useState(list[0]);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if (count === list.length - 1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }
    useEffect(() => {
        setCurrent(list[count]);
    }, [count])
    useEffect(() => {
        animate(
            "#gallery img",
            {
                rotate: [0, 360]
            },
            {
                duration: 1,
                delay: stagger(-0.2),
            }
        )
    }, [current])
    return (
        <>
            <section className={styles.homepage}>
                <div id="gallery" className={styles.gallery}>
                    <AnimatePresence >
                        <motion.img
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            key={count} src={current.img} alt="" />
                    </AnimatePresence>
                    <div>
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                key={count}
                                src={current.img}
                                alt=""
                            />
                        </AnimatePresence>
                        <div>
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}
                                    key={count} src={current.img} alt="" />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <div className={styles.heading}>
                    <AnimatePresence mode="popLayout">
                        <motion.h1
                            initial={{
                                y: 100,
                            }}
                            animate={{
                                y: 0,
                            }}
                            exit={{
                                y: -100
                            }}
                            transition={{
                                duration: 0.4,

                            }}
                            key={count}>{current.title}</motion.h1>
                    </AnimatePresence>
                </div>
                <button onClick={handleClick} className={styles.refresh_btn}><RefreshIcon /></button>
            </section>
        </>
    )
}

export default Homepage
