import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { motion } from "framer-motion";
import React, { useState } from 'react'

const content = [
    { name: 1, content: "qB1sPz" },
    { name: 2, content: "xY8wVl" },
    { name: 3, content: "aR9kGt" },
    { name: 4, content: "nW3mJv" },
    { name: 5, content: "pF6rHv" },
    { name: 6, content: "mK4zQl" },
    { name: 7, content: "vT2xNz" },
    { name: 8, content: "oU1cLp" },
    { name: 9, content: "gE7vWt" },
    { name: 10, content: "jC5bQf" },
    { name: 11, content: "zM4kNp" },
    { name: 12, content: "fP3lJw" },
    { name: 13, content: "rX6nLm" },
    { name: 14, content: "hV9xRt" },
    { name: 15, content: "dW8zMt" },
    { name: 16, content: "yR7kQn" },
    { name: 17, content: "eX2bWp" },
    { name: 18, content: "iN1vKl" },
    { name: 19, content: "wT5nQv" },
    { name: 20, content: "lU3mXt" },
];
const Application = () => {
    const slice = 4;
    const [data, setData] = useState(content);

    const handleUpdate = () => {
        if (data.length === slice) {
            setData(content);
        } else {
            setData(content.slice(0, 4));
        }
    }

    return (
        <>
            <ul>
                <AnimatePresence mode="sync">
                    {
                        data.map((item, index) => {
                            return (
                                <motion.li
                                    initial={{ opacity: 0, }}
                                    layout
                                    animate={{ opacity: 1, }}
                                    exit={{ opacity: 0, }}
                                    transition={{}}
                                    key={item.name}
                                >
                                    {item.content}
                                </motion.li>
                            )
                        })
                    }
                    <motion.li
                        initial={{ opacity: 0, }}
                        layout
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0, }}
                        transition={{}}
                        key={"show-btn"}
                    >
                        <button
                            onClick={handleUpdate}
                        >
                            {
                                data.length === slice ?
                                    "Show More"
                                    :
                                    "Show Less"
                            }
                        </button>
                    </motion.li>
                </AnimatePresence >
            </ul>
        </>
    )
}

export default Application
