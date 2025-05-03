import React from 'react'
import styles from "./Svg.module.scss";
import { motion } from "framer-motion";

const Svg = () => {
    // "rgb(255, 136, 0)"
    // const icon = {
    //     "hidden": {
    //         // fill: "rgba(240, 185, 11, 0)",
    //         // pathLength: 0,
    //         opacity: 0,
    //     },
    //     "visible": {
    //         // fill: "rgb(240, 185, 11)",
    //         // pathLength: 1,
    //         opacity: 1,
    //     }
    // }

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)",
        },
    };

    return (
        <>
            <div className={styles.svg}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 10 11"
                    fill="none"
                    className="item"
                >
                    <motion.path
                        d="M0 10.75V0.75L10 6.08333L0 10.75Z"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                        }}
                    />
                </svg>
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    viewBox="0 0 37 36"
                    fill="none"
                >
                    <motion.path
                        d="M0 18.0021L13.4249 4.63614L17.4555 8.64902L8.09446 17.9689L13.4312 23.2822L22.7922 13.9623L26.854 18.0062L17.4929 27.3261L22.1412 31.954L18.0774 36L0 18.0021ZM13.4249 8.04854L3.42746 18.0021L18.0774 32.5876L18.7138 31.954L14.0655 27.3261L23.4265 18.0062L22.7922 17.3747L13.4312 26.6946L4.667 17.9689L14.028 8.64902L13.4249 8.04854Z"
                        // fill="#F0B90B"
                        variants={icon}
                        initial="hidden"
                        animate={"open"}
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                    }}
                    />
                    <motion.path
                        d="M0 10.75V0.75L10 6.08333L0 10.75Z"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                        }}
                    />
                    <motion.path
                        d="M14.0572 4.04187L18.1169 0L36.1589 17.9627L22.759 31.3038L18.7346 27.2971L28.0749 17.9979L22.7527 12.6992L13.4125 21.9984L9.35693 17.9607L18.6972 8.66145L14.0572 4.04187ZM18.1169 3.4124L17.4847 4.04187L22.1246 8.66145L12.7844 17.9607L13.4125 18.586L22.7527 9.28678L31.5023 17.9979L22.1621 27.2971L22.759 27.8914L32.7315 17.9627L18.1169 3.4124Z"
                        // fill="#F0B90B"
                        variants={variants}
                        initial="hidden"
                        animate={"open"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                        }}
                    />
                </svg> */}
            </div>
        </>
    )
}

export default Svg
