import { motion, useIsPresent } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const isPresent = useIsPresent();

    return (
        <div>
            <div>
                Contact page
                <div style={{ height: "100vh", }}>
                    <h1 style={{ marginTop: "100px" }}>Contact Page</h1>
                </div>
                <Link to="/">Home</Link>
            </div>
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

export default ContactUs
