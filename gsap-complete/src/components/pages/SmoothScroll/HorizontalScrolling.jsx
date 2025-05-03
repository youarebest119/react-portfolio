import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const HorizontalScrolling = () => {
    const sections = useRef([]);
    useGSAP(() => {
        gsap.to(sections.current, {
            xPercent: -100 * (sections.current.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal_container",
                pin: true,
                scrub: true,
                end: "+max"
            }
        })
    })

    return (
        <div>
            <h2 className="title">
                Horizontal Scrolling
            </h2>
            <section className="horizontal_container d-flex">
                {
                    [
                        "#0d0d92",
                        "rgb(173 12 55)",
                        "rgb(80 92 22)",
                        "rgb(146 100 13)",
                    ]
                        .map((item, index) => {
                            return (
                                <div key={item} style={{
                                    height: "100dvh",
                                    minHeight: 200,
                                    width: "100vw",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minWidth: 400,
                                    background: item,
                                    flexShrink: 0,
                                }}
                                    ref={ele => sections.current[index] = ele}
                                >
                                    <h2>
                                        Section {index + 1}
                                    </h2>
                                </div>
                            )
                        })
                }
            </section>
        </div>
    )
}

export default HorizontalScrolling
