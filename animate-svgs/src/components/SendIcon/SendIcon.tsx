import { motion, Variants } from "framer-motion";
import "./SendIcon.scss";

const SendIcon = () => {
    const variants: Variants = {
        initial: {
            opacity: 0,
        },
        render: {
            opacity: 1,
            transition: {
                duration: 0.8,
            }
        },
        hover: {
            scale: 1.05,
        },
        tap: {
            scale: 0.8,
        },
    }
    return (
        <motion.button
            className="send-icon"
            whileTap="tap"
            whileHover="hover"
            animate="render"
            initial="initial"
            variants={variants}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message">
                <motion.path
                    fill="currentColor" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></motion.path></svg>
        </motion.button>
    )
}

export default SendIcon
