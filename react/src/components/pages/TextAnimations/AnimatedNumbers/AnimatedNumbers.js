import React from 'react'
import styles from "./AnimatedNumbers.module.scss";
import SpinNumbers from "react-animated-numbers";

const AnimatedNumbers = () => {
    const myNum = 9999;
    return (
        <div className={styles.numbers}>
            <SpinNumbers
                includeComma
                transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.2,
                })}
                className={styles.number}
                animateToNumber={myNum}
                fontStyle={{
                    fontSize: 100,
                    fontWeight: 800,
                }}
            />
        </div>
    )
}

export default AnimatedNumbers
