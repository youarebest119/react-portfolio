import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { RightArrow } from '../../../../assets/icons/icons';

const OfferBox = ({ icon, title, }) => {
    const ref = useRef();
    const shadow = useRef();
    const text = useRef();
    const btn = useRef();
    const iconRef = useRef();
    const btnText = useRef();
    const { contextSafe } = useGSAP(() => { })
    const [active, setActive] = useState(false);
    const handleClick = contextSafe(() => {
        setActive(true);
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "back.inOut"
            }
        });
        tl
            .to(shadow.current, {
                width: "100%",
                opacity: 1,
                filter: "blur(0.8rem)",
            })
            .to(text.current, {
                x: 60,
            }, "0")
            .to(btn.current, {
                x: () => ref.current.clientWidth - 208,
                width: 200,
                ease: "back.inOut",
                duration: 1,
            }, "0")
            .to(iconRef.current, {
                opacity: 0,
                duration: 0.4,
            }, "0")
            .to(btnText.current, {
                opacity: 1,
                duration: 0.4,
            }, "0.5")
    })
    const handleEnter = contextSafe(() => {
        gsap.timeline({
            defaults: {
                duration: 0.6,
                ease: "sine.inOut"
            }
        })
            .to(shadow.current, {
                opacity: 1,
            })
            .to(text.current, {
                x: active ? 60 : 6,
            }, "0")
    });
    const handleOut = contextSafe(() => {
        if (!active) {
            gsap.timeline()
                .to(shadow.current, {
                    opacity: 0,
                })
                .to(text.current, {
                    x: 0,
                }, "0")
        }
    });
    return (
        <div ref={ref} className="offer_box" onMouseEnter={handleEnter} onMouseLeave={handleOut}>
            <div className="offer_box_shadow_outline">
                <span className="offer_box_shadow" ref={shadow}></span>
            </div>
            <div className="offer_box_text" ref={text}>
                <h3>{title}</h3>
            </div>
            <div className="offer_box_btn" ref={btn} onClick={handleClick}>
                <div className="offer_box_btn_icon" ref={iconRef}>{icon}</div>
                <div className="offer_box_btn_text" ref={btnText}>
                    Discover <RightArrow />
                </div>
            </div>
        </div>
    )
}

export default OfferBox
