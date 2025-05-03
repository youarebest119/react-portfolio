import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from 'react';
const GetQuotesWithAnimations = () => {
    const [quotes, setQuotes] = useState([]);
    const [index, setIndex] = useState(0);
    let getData = useCallback(async () => {
        setTimeout(() => {
            setQuotes([index, ...quotes]);
            setIndex(index + 1)
        }, 1000);
    }, [index, quotes])
    useEffect(() => {
        if (index < 20) {
            getData();
        }
    }, [quotes, index, getData])

    return (
        <>
            <ul style={{
                overflow: "hidden"
            }}>
                <AnimatePresence mode="sync">
                    {
                        quotes.map((item) => (
                            <motion.li
                                key={item}
                                layout
                                initial={{
                                    x: "-100%",
                                    opacity: 0,
                                }}
                                animate={{
                                    x: "0%",
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                            >
                                {item}
                            </motion.li>
                        ))
                    }
                </AnimatePresence>
            </ul>
        </>
    )
}

export default GetQuotesWithAnimations
