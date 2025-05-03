import React, { useState } from 'react'
import styles from "./FramerModal.module.scss";
import { Container } from 'react-bootstrap';
import img1 from "../../../assets/images/framer-modal/framer-modal-1.jpg";
import img2 from "../../../assets/images/framer-modal/framer-modal-2.jpg";
import img3 from "../../../assets/images/framer-modal/framer-modal-3.jpg";
import img4 from "../../../assets/images/framer-modal/framer-modal-4.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { CrossIcon } from '../../../assets/icons/svgicons';

const FramerModal = () => {
    const [selectedId, setSelectedId] = useState(null)
    const data = [
        {
            id: 1,
            title: "Lorem, ipsum dolor.",
            subText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nobis cumque dolorum sit vel.",
            img: img1,
        },
        {
            id: 2,
            title: "Lorem, ipsum dolor. dolor sit, amet con",
            subText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nobis cumque dolorum sit vel. mque dolorum sit vel",
            moreText: "Read More",
            img: img2,
        },
        {
            id: 3,
            title: "Lorem, ipsum dolor. sit",
            subText: "Lorem ipsum dolor sit, amet consectetur.",
            img: img3,
        },
        {
            id: 4,
            title: "Lorem, ipsum ",
            subText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse nobis cumque dolorum sit vel.",
            img: img4,
        },
    ];
    return (
        <section className={styles.framer}>
            <Container>
                <div className="position-relative">
                    <ul>
                        {
                            data.map((item, index) => (
                                <>
                                    <motion.li key={index} layoutId={item.id} onClick={() => setSelectedId(item)}>
                                        <motion.img src={item.img} alt="" />
                                        <motion.h3>{item.title}</motion.h3>
                                        <motion.p>{item.subText}</motion.p>
                                    </motion.li>
                                </>
                            ))
                        }
                    </ul>
                    <AnimatePresence>
                        {selectedId && (
                            <div className={styles.modal}>
                                <motion.div className={styles.modal_box} layoutId={selectedId.id}>
                                    <motion.img src={selectedId.img} alt="" />
                                    <motion.h3>{selectedId.title}</motion.h3>
                                    <motion.p>{selectedId.subText}</motion.p>
                                    <motion.button onClick={() => setSelectedId(null)} >
                                        <CrossIcon />
                                    </motion.button>
                                </motion.div>
                                <div className={styles.modal_backdrop} onClick={() => setSelectedId(null)} />
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    )
}

export default FramerModal
