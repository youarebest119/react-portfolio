import React, { useRef } from 'react'
import "./Text1.scss";
import { useGSAP } from '@gsap/react';
import SplitText from 'gsap-trial/SplitText';
import gsap from 'gsap';

const Text1 = () => {
    const scope = useRef();
    useGSAP(() => {
        let splitted = new SplitText("#basic-split", {
            charsClass: "c",
            wordsClass: "w",
            linesClass: "l",
        });
        // words - splitted.words
        // chars - splitted.chars
        // splitted.lines

        gsap.from(splitted.chars, {
            opacity: 0,
            scale: 0,
            y: 80,
            rotateX: 180,
            transformOrigin: "0% 50% -50%",
            ease: "back.out",
            stagger: 0.01,
            onComplete: () => splitted.revert(),
        })


        let linesOverflow = new SplitText("#lines-overflow", {
            charsClass: "lc",
            wordsClass: "lw",
            linesClass: "ll",
        })
        gsap.from(linesOverflow.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.03,
            onComplete: () => linesOverflow.revert(),
            scrollTrigger: "#lines-overflow",
        })
    }, { scope })
    return (
        <>
            <div ref={scope} className="text-1" id="text-1">
                <div
                    style={{
                        margin: "100px auto",
                        maxWidth: 800,
                    }}
                >
                    <h2 id="basic-split" style={{ perspective: 400, lineHeight: 2, letterSpacing: 1 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut expedita e sseprovident voluptates magni earum. Deserunt quae molestiae hic fuga, quasi cupiditate alias dignissimos. Illo vero aperiam, fugiat aliquid repellat hic?
                    </h2>
                </div>
                <div style={{ height: "100dvh" }} />
                <div
                    style={{
                        margin: "100px auto",
                        maxWidth: 800,
                    }}
                >
                    <h2 id="lines-overflow" style={{ lineHeight: 2, letterSpacing: 1 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut expedita e sseprovident voluptates magni earum. Deserunt quae molestiae hic fuga, quasi cupiditate alias dignissimos. Illo vero aperiam, fugiat aliquid repellat hic?
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Text1
