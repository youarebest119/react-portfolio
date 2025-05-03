import { motion, Variants } from "framer-motion";
import "./RedirectIcon.scss";

const RedirectIcon = () => {
    const arrowVariantStart: Variants = {
        initial: {
            y: 0,
            x: 0,
        },
        hover: {
            x: 25,
            y: -25,
            transition: {
                duration: 0.3,
                ease: "backOut",
            },
        },
    };
    const arrowVariantEnd: Variants = {
        initial: {
            y: 25,
            x: -25,
        },
        hover: {
            x: 0,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "backOut",
            },
        },
        tap: {
            x: 5,
            y: -5,
            transition: {
                duration: 0.1,
                ease: "easeInOut",
            },
        },
    };
    return (
        <motion.button
            className="redirect-icon"
            whileHover={"hover"}
            initial="initial"
            whileTap="tap"
        >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={arrowVariantStart} d="M16.9998 6V8H20.5898L10.7598 17.83L12.1698 19.24L21.9998 9.41V13H23.9998V6" fill="white" />
                <motion.path variants={arrowVariantEnd} d="M16.9998 6V8H20.5898L10.7598 17.83L12.1698 19.24L21.9998 9.41V13H23.9998V6" fill="white" />
                <motion.path d="M22 22H8V8H15V6H8C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8V22C6 22.5304 6.21071 23.0391 6.58579 23.4142C6.96086 23.7893 7.46957 24 8 24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V15H22V22Z" fill="white" />
            </svg>
        </motion.button>
    )
}

export default RedirectIcon
