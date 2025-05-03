import React from 'react'
import styles from "./Card1.module.scss";
import { getCoords, text } from '../../../../utils/utils';
import { motion, useAnimate, useInView } from "framer-motion";
import Element from '../../TextAnimations/WriteAnimation/Element';

const Card1 = () => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    const getSmallScaleValue = (total, value) => {
        return -1 + value / (total / 3);
    }

    function handleMouse(event) {
        let width = event.currentTarget.clientWidth,
            height = event.currentTarget.clientHeight;

        animate(
            scope.current,
            {
                rotateY: getSmallScaleValue(width, event.pageX - getCoords(event.currentTarget).left),
                rotateX: -getSmallScaleValue(height, event.pageY - getCoords(event.currentTarget).top)
            },
            {
                type: "tween",
                duration: 0,
            }
        )
    }
    return (
        <>
            <div className={styles.box}>
                <motion.div
                    className={`${styles.get_started_code}`}
                    onMouseMove={handleMouse}
                    onMouseLeave={() => {
                        animate(scope.current, { rotateX: 0, rotateY: 0, })
                    }}
                >
                    <div
                        ref={scope}
                        className={styles.get_started_code_tabs}>
                        <div className={styles.get_started_code_nav}>
                            <button>
                                getStarted.ts
                            </button>
                        </div>
                        <div className={styles.get_started_code_content}>
                            <h3>typescript</h3>
                            <Element
                                text={isInView ? text : []}
                                speed={20}
                                elementType="div"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Card1
