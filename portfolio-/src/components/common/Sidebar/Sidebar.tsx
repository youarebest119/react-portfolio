
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import { lenis } from "../../../App";
import logo from "../../../assets/logo/logo.png";
import { LIST_CONTENT } from "../../../utils/constants";
import styles from "./Sidebar.module.scss";

interface propTypes {
    active: boolean,
    setActive?: (param: boolean) => void,
}


const Sidebar = (props: propTypes) => {
    const [socialLinkActive, setSocialLinkActive] = useState<number | null>(null);
    const [navLinkActive, setNavlinkActive] = useState<number | null>(null);

    const variants = {
        hidden: {
            scale: 0,
        },
        open: {
            scale: 1,
        }
    };

    const bgVariants = {
        hidden: {
            scale: 0,
            x: "50%",
            y: "-50%",
            // transform: "translate(50%, -50%)",
        },
        open: {
            scale: 3,
            x: "50%",
            y: "-50%",
            // transform: "translate(50%, -50%)",
        }
    };

    const navLinkVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        open: {
            opacity: 1,
            y: 0,
        },
    };

    useEffect(() => {
        if (props.active) {
            lenis.stop();
        } else {
            lenis.start();
        }
    }, [props.active])
    return (
        <>
            <m.aside
                className={`${styles.sidebar} ${props.active ? styles.active : ""}`}
                initial={{
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none",
                }}
                animate={props.active ? {
                    opacity: 1,
                    visibility: "visible",
                    pointerEvents: "all",
                } : {}}
                transition={{
                    delay: props.active ? 0.3 : 0.6,
                }}
            >
                <div className={styles.header}>
                    <a href=""><img src={logo} alt="logo" /></a>
                </div>
                <div className={styles.sidebar_nav}>
                    <ul>
                        {
                            LIST_CONTENT.SIDEBAR_NAV.map(item => (
                                <li
                                    key={item.label}
                                >
                                    <a
                                        href={item.to}
                                        className={`${navLinkActive === item.index ? styles.active : ""} ${navLinkActive === null ? styles.inactive : ""}`}
                                        onMouseEnter={() => {
                                            setNavlinkActive(item.index);
                                        }}
                                        onMouseLeave={() => setNavlinkActive(null)}
                                    >
                                        <m.div
                                            initial={"hidden"}
                                            variants={navLinkVariants}
                                            exit={"hidden"}
                                            transition={{
                                                delay: !props.active ? item.index * 0.05 : 0.4 + (item.index * 0.1),
                                                type: "tween",
                                                ease: "easeInOut",
                                                duration: 0.6,
                                            }}
                                            animate={props.active ? "open" : ""}
                                        >
                                            {item.label}
                                        </m.div>
                                        <m.div
                                            variants={variants}
                                            animate={item.index === navLinkActive ? "open" : ""}
                                            initial={"hidden"}
                                            transition={{
                                                duration: 0.5,
                                                stiffness: 100,
                                                // mass: 1,
                                                bounce: 0,
                                                type: "tween",
                                            }}
                                            className={styles.link_bg}
                                        >
                                        </m.div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.footer}>
                    <ul>
                        {
                            LIST_CONTENT.SIDEBAR_SOCIAL_MEDIA.map(item => {
                                let Icon = item.icon;
                                return (
                                    <li key={item.key}>
                                        <a
                                            href={item.to}
                                            onMouseEnter={() => {
                                                setSocialLinkActive(item.index);
                                            }}
                                            onMouseLeave={() => setSocialLinkActive(null)}
                                        >
                                            <m.div
                                                initial={"hidden"}
                                                variants={navLinkVariants}
                                                exit={"hidden"}
                                                animate={props.active ? "open" : ""}
                                                transition={{
                                                    delay: !props.active ? item.index * 0.05 : 0.1 + (item.index * 0.1),
                                                    type: "tween",
                                                    ease: "easeInOut",
                                                    duration: 0.4,
                                                }}
                                            >
                                                <Icon />
                                            </m.div>
                                            <m.div
                                                variants={variants}
                                                animate={item.index === socialLinkActive ? "open" : ""}
                                                initial={"hidden"}
                                                transition={{
                                                    // duration: 1,
                                                    // stiffness: 400,
                                                    // mass: 1,
                                                    // bounce: 1,
                                                    type: "tween",
                                                }}
                                                className={styles.link_bg}
                                            >
                                            </m.div>
                                            <m.div
                                                variants={variants}
                                                animate={item.index === socialLinkActive ? "open" : ""}
                                                initial={"hidden"}
                                                transition={{
                                                    // duration: 1,
                                                    // stiffness: 400,
                                                    // mass: 1,
                                                    // bounce: 1,
                                                    type: "tween",
                                                }}
                                                style={{
                                                    transformOrigin: "bottom right",
                                                }}
                                                className={`${styles.link_bg}`}
                                            >
                                            </m.div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </m.aside>
            <m.div
                className={`${styles.sidebar_bg_one}`}
                initial="hidden"
                variants={bgVariants}
                transition={{
                    duration: 1,
                    stiffness: 150,
                    bounce: 4,
                    delay: props.active ? 0 : 0.4,
                }}
                animate={props.active ? "open" : ""}
            />
            <m.div
                className={`${styles.sidebar_bg_two}`}
                initial="hidden"
                variants={bgVariants}
                transition={{
                    duration: 1,
                    delay: props.active ? 0.4 : 0,
                    stiffness: 150,
                    bounce: 4,
                }}
                animate={props.active ? "open" : ""}
            />
        </>
    )
}
export default Sidebar
