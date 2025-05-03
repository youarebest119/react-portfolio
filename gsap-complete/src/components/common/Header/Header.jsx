import React from 'react'
import "./Header.scss";
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { router } from '../../../Application';

const Header = () => {
    const routes = [
        {
            name: "Gsap",
            dropdown: [
                {
                    name: "gsap.to()",
                    to: "/to",
                },
                {
                    name: "gsap.timeline()",
                    to: "/timeline",
                },
            ],
        },
        {
            name: "Smooth Scroll",
            to: "/smooth-scroll",
        },
        {
            name: "Scroll Trigger",
            dropdown: [
                {
                    name: "Home",
                    to: "/scroll-trigger",
                },
                {
                    name: "Snapping",
                    to: "/snapping",
                },
                {
                    name: "Toggle Action",
                    to: "/toggle-actions",
                }
            ],
        },
        {
            name: "Flip",
            dropdown: [
                {
                    name: "Home",
                    to: "/flip",
                },
                {
                    name: "Example",
                    to: "/flip-example",
                },
                {
                    name: "Example 2",
                    to: "/flip-example-2",
                },
                {
                    name: "Example 3",
                    to: "/flip-example-3",
                },
            ],
        },
        {
            name: "Text animation 1",
            to: "/text-animation-one",
        }
    ]
    return (
        <header className='header'>
            <Container>
                <div className="header_in">
                    <ul>
                        {
                            routes.map(item => {
                                return (
                                    <li key={item.name}>
                                        {
                                            item.dropdown ?
                                                <div className="header_nav_dropdown">
                                                    <Link
                                                        to="#"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <div className="header_nav_menu">
                                                        <ul>
                                                            {
                                                                item.dropdown.map(item => {
                                                                    return (
                                                                        <li key={item.to + item.name}>
                                                                            <NavLink to={item.to}>{item.name}</NavLink>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                                :
                                                <NavLink to={item.to}>
                                                    {item.name}
                                                </NavLink>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Container>
        </header>
    )
}

export default Header
