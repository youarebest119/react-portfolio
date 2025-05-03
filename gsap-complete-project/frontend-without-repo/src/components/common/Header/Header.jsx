import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo/logo.png";
import "./Header.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
    const [active, setActive] = useState(false);
    const { contextSafe } = useGSAP(() => {
        if (active) {
            gsap.timeline()
                .to([".sidebar_design", "sidebar_nav"], {
                    yPercent: 0,
                    xPercent: 0,
                    transform: "none",
                    clipPath: "inset(0 round 0px 0px 0px 0px)",
                    duration: 1,
                    ease: "power3.inOut",
                })
                .to(".sidebar_nav li a span", {
                    yPercent: 0,
                })
        } else {
            gsap.timeline()
                .to(".sidebar_nav li a span", {
                    yPercent: 100,
                })
                .to([".sidebar_design", "sidebar_nav"], {
                    yPercent: -100,
                    xPercent: 100,
                    clipPath: "inset(0 round 0px 0px 100% 100%)",
                    duration: 1,
                    ease: "power3.inOut",
                })
        }

        gsap.set("body", { overflow: () => active ? "hidden" : "" })

    }, { dependencies: [active] });
    const handleActive = contextSafe(() => {
        setActive(!active)
    })
    return (
        <header className="header">
            <div className="header_in">
                <Link className="header_logo" to="/"><img src={logo} alt="logo" /></Link>
                <div className="sidebar_design">
                    <div className="sidebar_nav">
                        <ul>
                            <li>
                                <NavLink onClick={handleActive} to="/">
                                    <span>Homepage</span>
                                    {/* <span>Homepage</span> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleActive} to="/about">
                                    <span>About</span>
                                    {/* <span>About</span> */}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={handleActive} to="/contact">
                                    <span>Contact</span>
                                    {/* <span>Contact</span> */}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header_right">
                    <button type="button" className={`toggle_btn ${active ? "active" : ""}`} onClick={handleActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
