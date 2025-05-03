import React from 'react'
import sample from "../../../../assets/images/scroll-animations/background.jpg"
import sample3 from "../../../../assets/images/scroll-animations/img.jpg"
import sample4 from "../../../../assets/images/scroll-animations/img2.jpg"
import sample5 from "../../../../assets/images/scroll-animations/img3.jpg"
import sample6 from "../../../../assets/images/scroll-animations/img4.jpg"
import sample2 from "../../../../assets/images/scroll-animations/nature-thumbnail.jpg"
import styles from "./Animation3.module.scss"
import Element from "./Element"

const Animation3 = () => {
    return (
        <>
            <section className={styles.animation}>
                <ul>
                    <Element img={sample} />
                    <Element img={sample2} />
                    <Element img={sample3} />
                    <Element img={sample4} />
                    <Element img={sample5} />
                    <Element img={sample6} />
                </ul>
            </section>
        </>
    )
}

export default Animation3
