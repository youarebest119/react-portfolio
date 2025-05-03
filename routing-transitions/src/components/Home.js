import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useIsPresent } from "framer-motion";

const Home = () => {
    const isPresent = useIsPresent();

    return (
        <div>
            <Link to="/about-us">About</Link>
            <Link to="/contact">Contact Us</Link>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className="privacy-screen"
            />
        </div>
    )
}

export default Home
