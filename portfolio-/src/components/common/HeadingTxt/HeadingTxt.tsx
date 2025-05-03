import { ReactNode } from "react";
import styles from "./HeadingTxt.module.scss";

interface propTypes {
    className?: string,
    children?: ReactNode,
}

const HeadingTxt = (props: propTypes) => {
    return (
        <>
            <div className={`${styles.heading} ${props.className || ""}`}>
                {props.children}
            </div>
        </>
    )
}

export default HeadingTxt
