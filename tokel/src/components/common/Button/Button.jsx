import React, { useEffect, useRef, useState } from 'react'
import "./Button.scss";
import coin1 from "../../../assets/icons/coin.png";
import coin2 from "../../../assets/icons/crypto.png";
import coin3 from "../../../assets/icons/avalanche.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Button = ({ className, children, fluid, ...rest }) => {
    const coin = useRef([]);
    const wrap = useRef();
    const tl = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const x = useRef();
    const y = useRef();
    const button = useRef(null);

    const { contextSafe } = useGSAP(() => {
        tl.current = gsap.timeline();
        tl.current.to(button.current, {
            scale: 1.2,
            ease: "back",
        }, 0)
        tl.current.to(coin.current[0], {
            xPercent: -200,
            yPercent: -40,
            scale: 1,
        }, 0)
        tl.current.to(coin.current[1], {
            xPercent: 50,
            yPercent: 100,
            scale: 1,
        }, 0)
        tl.current.to(coin.current[2], {
            xPercent: 140,
            yPercent: -60,
            scale: 1,
        }, 0)
        tl.current.pause();

        x.current = gsap.quickTo(
            wrap.current,
            "x",
            {
                duration: 0.6, ease: "power3"
            }
        );
        y.current = gsap.quickTo(
            wrap.current,
            "y",
            {
                duration: 0.6, ease: "power3"
            }
        );
    })

    useEffect(() => {
        x.current(-mousePosition.x / 6);
        y.current(-mousePosition.y / 6);
    }, [mousePosition.x, mousePosition.y])


    const handleMouseMove = (event) => {
        if (button.current) {
            const rect = button.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };
    const handleEnter = contextSafe(() => {
        tl.current.play();
    })
    const handleLeave = contextSafe(() => {
        tl.current.reverse();
    })
    return (
        <button
            type="button"
            {...rest}
            className={`${className || ""} custom_btn`}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onMouseMove={handleMouseMove}
            ref={button}
        >
            <div ref={wrap}>
                <img src={coin1} className="coin coin_1" ref={el => coin.current[0] = el} alt="" />
                <img src={coin2} className="coin coin_2" ref={el => coin.current[1] = el} alt="" />
                <img src={coin3} className="coin coin_3" ref={el => coin.current[2] = el} alt="" />
            </div>
            {children}
        </button>
    )
}

export default Button
