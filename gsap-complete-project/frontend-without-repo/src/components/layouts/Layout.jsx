import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'
import "./Layout.scss";
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import ScrollToPlugin from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollToPlugin);
const Layout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'});
    }, [location])
    return (
        <div className="layout_design">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
