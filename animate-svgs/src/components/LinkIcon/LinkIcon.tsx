import "./LinkIcon.scss";
import { motion, Variants } from "framer-motion";

const LinkIcon = () => {
    const variants: Variants = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 1,
            },
        },
        hover: {
            pathLength: [0, 1],
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.button
            whileHover={"hover"}
            initial="hidden"
            animate="visible" className="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                <motion.path
                    variants={variants}
                    strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
        </motion.button>
    )
}

export default LinkIcon
