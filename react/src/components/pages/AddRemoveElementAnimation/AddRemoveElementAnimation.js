import React, { useState } from 'react'
import styles from "./AddRemoveElementAnimation.module.scss";
import { Container } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import Label from './Label/Label';

const ITEMS = [
    {
        id: 1,
        text: 'Hey there 👋',
    },
    {
        id: 2,
        text: 'What"s your problem 💥',
    },
    {
        id: 3,
        text: 'Why would you do that 🎉!',
    },
    {
        id: 4,
        text: 'Erorr ✅',
    },
    {
        id: 5,
        text: 'hello world ⚠️',
    },
    {
        id: 6,
        text: 'Welcome 👋',
    },
    {
        id: 7,
        text: 'An error occurred 💥',
    },
    {
        id: 8,
        text: 'You did it 🎉!',
    },
    {
        id: 9,
        text: 'Success ✅',
    },
    {
        id: 10,
        text: 'Warning ⚠️',
    }

];

const AddRemoveElementAnimation = () => {
    const [list, setList] = useState([]);
    const [otherList, setOtherList] = useState(ITEMS);
    return (
        <section className={styles.section}>
            <Container>
                <div className="d-flex">
                    <ul>
                        <h2>Added Items</h2>
                        <AnimatePresence mode="sync">
                            {
                                list.map(item => (
                                    <motion.li
                                        key={item.id}
                                        exit={{
                                            opacity: 0,
                                            x: "100%"
                                        }}
                                        initial={{
                                            opacity: 0,
                                            x: "100%",
                                        }}
                                        layout
                                        animate={{
                                            opacity: 1,
                                            x: "0%",
                                        }}
                                    >
                                        <Label
                                            text={item.text}
                                            onRemove={() => {
                                                setList(list.filter(listItem => listItem.id !== item.id));
                                                setOtherList([item, ...otherList]);
                                            }}
                                        />
                                    </motion.li>
                                ))
                            }
                        </AnimatePresence>
                    </ul>
                    <ul>
                        <h2>Total Items</h2>
                        <AnimatePresence>
                            {
                                otherList.map(item => (
                                    <motion.li
                                        key={item.id}
                                        exit={{
                                            opacity: 0,
                                            x: "100%"
                                        }}
                                        layout
                                        initial={{
                                            opacity: 0,
                                            x: "100%",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: "0%",
                                        }}
                                    >
                                        <Label
                                            onAdd={() => {
                                                setOtherList(otherList.filter(listItem => listItem.id !== item.id));
                                                setList([item, ...list]);
                                            }}
                                            text={item.text}
                                        />
                                    </motion.li>
                                ))
                            }
                        </AnimatePresence>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default AddRemoveElementAnimation
