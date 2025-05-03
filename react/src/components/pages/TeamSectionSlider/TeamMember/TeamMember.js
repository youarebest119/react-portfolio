import React, { useRef } from 'react'
import styles from "./TeamMember.module.scss";
import { useInView, motion } from "framer-motion"

const TeamMember = ({ item, index }) => {
    const ref = useRef();
    const isInView = useInView(ref)
    return (
        <>
            <div
                ref={ref}
                className={styles.member}
            >
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{
                        scale: isInView ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        bounce: 5,
                        stiffness: 150,
                    }}
                    src={item.img}
                    alt=""
                />
                <motion.div
                    className={styles.member_info}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <h3>{index}-{item.name}</h3>
                    <p>{item.designation}</p>
                </motion.div>
            </div>
        </>
    )
}

export default TeamMember
