import Lenis from "@studio-freight/lenis/types";
import { m } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lenis } from "../../../App";
import { LIST_CONTENT } from "../../../utils/constants";
import styles from "./SocialMediaLinks.module.scss";

const SocialMediaLinks = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        lenis.on('scroll', (e: Lenis) => {
            setScrolled(e.animatedScroll > 0);
        })
    }, [])

    const variants = {
        initial: {
            y: 0,
        },
        animate: {
            y: 100,
        },
    };
    return (
        <>
            <div className={styles.social_media}>
                <ul>
                    {
                        LIST_CONTENT.SOCIAL_MEDIA.map((item, index) => {
                            let Icon = item.icon;
                            return (
                                <m.li
                                    initial="initial"
                                    key={item.to + String(index)}
                                    animate={scrolled ? "animate" : ""}
                                    variants={variants}
                                    transition={{
                                        delay: index * 0.05,
                                    }}
                                >
                                    <Link to={item.to}>
                                        <Icon />
                                    </Link>
                                </m.li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default SocialMediaLinks
