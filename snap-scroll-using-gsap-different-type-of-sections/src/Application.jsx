import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import { Observer } from 'gsap/Observer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText, Observer, ScrollToPlugin);
gsap.config({
    trialWarn: false,
});

const Application = () => {
    const isAnimating = useRef(false);
    const scrolled = useRef(0);
    const panels = useRef([]);
    const colors = ["black", "white", "black", "white", "black"]

    useGSAP(() => {
        panels.current = gsap.utils.toArray('.hero_box');
        new SplitText("h2", {
            charsClass: "c",
            wordsClass: "w",
            linesClass: "l"
        })
        Observer.create({
            wheelSpeed: -1,
            target: window,
            type: 'wheel,touch',
            onUp: () => !isAnimating.current && handleNext(),
            onDown: () => !isAnimating.current && handlePrev(),
            tolerance: 10,
        })
        animateToPanel(1);
    });

    const handleNext = () => {
        if (scrolled.current < panels.current.length - 1) {
            scrolled.current++;
            animateToPanel(1);
        }
    };

    const handlePrev = () => {
        if (scrolled.current > 0) {
            scrolled.current--;
            animateToPanel(-1);
        }
    };

    const animateToPanel = (direction) => {
        isAnimating.current = true;

        const targetPanel = panels.current[scrolled.current];

        let timeline = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false;
            },
        })
            .to(window, {
                scrollTo: targetPanel,
                ease: 'power4.inOut',
                duration: 1,
            })
            .fromTo(
                targetPanel.querySelectorAll('.c'),
                {
                    // y: direction * 200,
                    y: 200,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    color: colors[scrolled.current],
                    // stagger: 0.05,
                },
                '0'
            )
            .fromTo(targetPanel.querySelector('p'),
                {
                    xPercent: 100,
                },
                {
                    xPercent: 0,
                    duration: 1,
                    ease: "back.inOut",
                }, "0")
        const exitPanel = direction > 0 ? panels.current[scrolled.current - 1] : panels.current[scrolled.current + 1]
        if (exitPanel) {
            timeline
                .fromTo(exitPanel.querySelectorAll(".c"),
                    {
                        y: 0,
                    },
                    {
                        y: 200,
                        duration: 1,
                    }, "0")
                .fromTo(exitPanel.querySelector('p'),
                    {
                        xPercent: 0,
                    },
                    {
                        xPercent: 100,
                        ease: "back.inOut",
                        duration: 1,
                    }, "0")

        }
    };

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".box_5",
                start: "center center",
                toggleActions: "play none none reverse",
                end: "+=100%",
            },
        })
            .from(".box_5 h3", {
                opacity: 0,
                y: 100,
                duration: 1,
                ease: "back.inOut",
            })
    })

    return (
        <main className="application">
            <div className="action">
                <button onClick={handleNext}>Next</button>
                <button onClick={handlePrev}>Previous</button>
            </div>
            <div>
                <div className="hero_box box_1">
                    <h2>Snap 1</h2>
                    <p>The golden sunlight cascaded through the ancient forest, illuminating vibrant leaves as birds sang a melodious tune above.</p>
                </div>
                <div className="hero_box box_2">
                    <h2>Snap 2</h2>
                    <p>Beneath the azure sky, the waves crashed gently, whispering secrets to the soft, warm sands of the peaceful shore.</p>
                </div>
                <div className="hero_box box_3">
                    <h2>Snap 3</h2>
                    <p>In the bustling city square, laughter echoed as street performers danced gracefully, mesmerizing the crowd with their captivating movements and joy.</p>
                </div>
                <div className="hero_box box_4">
                    <h2>Snap 4</h2>
                    <p>The towering mountain peak gleamed under the full moon, casting shadows over the silent valley blanketed in shimmering snow.</p>
                </div>
                <div className="hero_box box_5">
                    <h2>Snap 5</h2>
                    <p>A gentle breeze carried the fragrant aroma of blooming flowers, weaving through the quaint village nestled in the hills.</p>
                </div>
                <div className="hero_box box_5">
                    <h3>Snap 5</h3>
                    <h4>A gentle breeze carried the fragrant aroma of blooming flowers, weaving through the quaint village nestled in the hills.</h4>
                </div>
            </div>
            {/* {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className={`hero_box box_${index + 1}`}>
                    <h2>Snap {index + 1}</h2>
                </div>
            ))} */}
        </main>
    );
};

export default Application;
