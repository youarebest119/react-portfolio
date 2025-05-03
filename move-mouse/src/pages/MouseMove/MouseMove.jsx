import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "https://esm.sh/react@18.3.1";
import { useRef } from "react";

function MouseMove() {
    const xTo = useRef();
    const yTo = useRef();
    const app = useRef();

    const { context, contextSafe } = useGSAP(() => {
        xTo.current = gsap.quickTo(".flair", "x", { duration: 0.8, ease: "power3" }),
            yTo.current = gsap.quickTo(".flair", "y", { duration: 0.8, ease: "power3" });
    }, { scope: app });

    const moveShape = contextSafe((e) => {
        xTo.current(e.clientX);
        yTo.current(e.clientY);
    });

    return (
        <div className="mouse_move" ref={app} onMouseMove={(e) => moveShape(e)} >
            <p>Move your mouse around</p>
            <div className="flair" />
        </div>
    );
}


export default MouseMove;