import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../../assets/logo/logo.png";
import styles from "./Header.module.scss";
import { Container } from "react-bootstrap";
import { LIST_CONTENT, ROUTES } from "../../../utils/constants";
import { NavLink } from "react-router-dom";
import { lenis } from "../../../App";
import Lenis from "@studio-freight/lenis/types";

const Header = () => {
    const [direction, setDirection] = useState("");
    useEffect(() => {
        lenis.on("scroll", (e: Lenis) => {
            setDirection(e.direction === -1 ? "up" : e.direction === 1 ? "down" : direction);
        })
    }, [])

    const [active, setActive] = useState(false);

    const variants = {
        initial: {
            rotate: 0,
            y: 0,
            opacity: 1,
        },
        animate: (item: number) => ({
            rotate: item === 1 ? 45 : item === 3 ? -45 : 0,
            x: item === 2 ? -100 : 0,
            opacity: item === 2 ? 0 : 1,
        })
    };

    const headerVariants = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "-100%",
        }
    }
    return (
        <>
            <div className={styles.nav}>
                <ul>
                    {
                        LIST_CONTENT.HEADER_NAV.map(item => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    activeClass={styles.active}
                                    spy={true}
                                    smooth
                                >
                                    <div>
                                        <span>{item.to}</span>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <m.header
                className={`${styles.header}`}
                initial={"initial"}
                animate={direction === "down" ? "animate" : ""}
                variants={headerVariants}
                transition={{
                    type: "tween",
                    ease: "easeInOut",
                }}
            >
                <Container>
                    <div className={styles.in}>
                        <NavLink className={styles.logo} to={ROUTES.HOME}>
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <button
                            className={`${styles.toggle} ${active ? styles.active : ""}`}
                            onClick={() => setActive(!active)}
                        >
                            <AnimatePresence mode={'wait'}>
                                {
                                    !active ?
                                        <m.p transition={{ duration: 0.2, }} key={"menu"} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>Menu</m.p>
                                        :
                                        <m.p transition={{ duration: 0.2, }} key={"close"} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>Close</m.p>
                                }
                            </AnimatePresence>
                            <div>
                                {[1, 2, 3].map(item => (<m.span transition={{ duration: 0.2, }} custom={item} animate={active ? "animate" : ""} initial={"initial"} variants={variants} key={item}></m.span>))}
                            </div>
                        </button>
                        <Sidebar active={active} setActive={setActive} />
                    </div>
                </Container>
            </m.header>
        </>
    )
}

export default Header
