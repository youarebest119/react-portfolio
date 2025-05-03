import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Text.module.scss";

type propTypes = {
    item: {
        title?: string,
        details?: string,
    },
}

const Text = (props: propTypes) => {

    const ref = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const color = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["rgba(#183D3D, 0.2)", "rgba(#183D3D, 1)", "rgba(#183D3D, 1)", "rgba(#183D3D, 0.2)",])
    const filter = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)",])
    const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["0", "1", "1", "0",])
    return (
        <>
            <li className={styles.item}>
                <m.h3 style={{ color, filter, opacity }} ref={ref}>{props.item.title}</m.h3>
            </li>
        </>
    )
}

export default Text