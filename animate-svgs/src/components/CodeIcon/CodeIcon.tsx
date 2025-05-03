import { HTMLAttributes } from "react";
import "./CodeIcon.scss";
import { motion, MotionProps, Variants } from "framer-motion";

const CodeIcon = ({ ...rest }: HTMLAttributes<HTMLButtonElement> & MotionProps) => {
    const variants: Variants = {
        initial: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
        },
        hover: {
            pathLength: [0, 1],
        }
    }
    return (
        <motion.button
            initial="initial"
            animate="visible"
            whileHover={"hover"}
            className='code-icon'
            {...rest}
        >
            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    variants={variants}
                    d="M13.5 1L9 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path
                    variants={variants}
                    d="M17 4L22.25 9.25L17 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path
                    variants={variants}
                    d="M6.25 14.5L1 9.25L6.25 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </motion.button>
    )
}

export default CodeIcon
