import React from 'react'
import LoremText from '../../LoremText/LoremText'
import styles from "./ZoomOut.module.scss";
import Element from "./Element.js";

const ZoomOut = () => {
    return (
        <>
            <LoremText />
            <LoremText />
            <section className={styles.animation}>
                <Element>
                    Lorem, ipsum.
                </Element>
                <Element>
                    Lorem, ipsum dolor.
                </Element>
                <Element>
                    Lorem ipsum dolor sit.
                </Element>
                <Element>
                    Lorem, ipsum.
                </Element>
            </section>
            <LoremText />
            <LoremText />
        </>
    )
}

export default ZoomOut
