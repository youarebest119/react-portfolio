import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "./AnimateText.scss";

type animateProps = {
    children: string[],
    id: string,
}

const AnimateText = (props: animateProps) => {
    const scope = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        gsap.from(`#${props.id} li`, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            scrollTrigger: {
                trigger: `#${props.id}`,
                start: "top 80%",
                toggleActions: "restart pause resume reverse"
            }
        })
    }, { scope })
    return (
        <>
            <div ref={scope}>
                <ul id={props.id} className="animate_txt">
                    {
                        props.children.map((item, index) => {
                            return (
                                <li key={item + index}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default AnimateText
