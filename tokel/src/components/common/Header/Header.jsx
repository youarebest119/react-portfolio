import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import "./Header.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
    const nav = useRef([]);
    const action = useRef([]);
    const header = useRef();
    const navList = [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/" },
        { name: "Features", to: "/" },
        { name: "Solutions", to: "/" },
        { name: "RWA Coin", to: "/" },
    ]
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(nav.current, {
            y: -100,
            ease: "power4.inOut",
            stagger: 0.1,
        })
        tl.from(action.current, {
            y: -100,
            ease: "power4.inOut",
            stagger: 0.1,
        })
    }, { scope: header })
    return (
        <header ref={header} className="header">
            <Container>
                <div className="header_in">
                    <Logo />
                    <div className="header_nav">
                        <ul>
                            {
                                navList.map((item, index) => {
                                    return (
                                        <li ref={el => nav.current[index] = el} key={index}>
                                            <a href={item.to} className={index === 0 ? "active" : ""}>
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="header_action">
                        <div ref={el => action.current[0] = el}>
                            <Button>Login</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
