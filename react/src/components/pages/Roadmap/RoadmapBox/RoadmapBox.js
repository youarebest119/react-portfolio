import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import "./RoadmapBox.scss";

const RoadmapBox = ({ jst, roadmapRef, title, text, variant }) => {
    const ref = useRef();
    let [open, setOpen] = useState(false);
    useEffect(() => {
        if (ref.current && roadmapRef.current) {
            let jstValue = Math.round(jst * 10) / 10;
            let elementValue = Math.round((ref.current.offsetTop + 34) / roadmapRef.current.offsetHeight * 10) / 10
            setOpen(jstValue >= elementValue);
        }
    }, [jst, roadmapRef])
    const variants = {
        initial: {
            width: "100%",
        },
        animate: {
            width: "0%",
        }
    }
    return (
        <motion.div
            className={"box"}
            data-variant={variant}
            ref={ref}
        >
            <motion.div
                className={"box_line"}
            >
                <motion.span
                    className={"completed"}
                    variants={variants}
                    animate={open ? "animate" : ""}
                    initial="initial"
                ></motion.span>
                <span className={"circle"}></span>
            </motion.div>
            <div className={"box_in"}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </motion.div>
    )
}

export default RoadmapBox
