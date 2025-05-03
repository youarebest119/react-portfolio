import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from 'react';
import { Container } from "react-bootstrap";
import "./Roadmap.scss";
import RoadmapBox from './RoadmapBox/RoadmapBox';
import LoremText from "../LoremText/LoremText";

const Roadmap = () => {
    const ref = useRef();
    const roadmapRef = useRef();
    const [jst, setJst] = useState(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["-50vh", "50vh start"],
    });
    useMotionValueEvent(scrollYProgress, "change", (LinelatestValue) => {
        setJst(LinelatestValue);
    })
    return (
        <section className={"roadmap_sec"}>
            <LoremText />
            <Container>
                <h2>The Roadmap</h2>
                <div
                    className={"roadmap"}
                    ref={roadmapRef}
                >
                    <div
                        className={"line"}
                        ref={ref}
                        data-active={scrollYProgress.get() === 1}
                    >
                        <motion.span
                            style={{
                                scaleY: scrollYProgress
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                            }}
                        ></motion.span>
                    </div>
                    <div>
                        <RoadmapBox
                            roadmapRef={roadmapRef}
                            jst={jst}
                            title="March 2015-2017"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="start"
                        />
                        <RoadmapBox
                            roadmapRef={roadmapRef}
                            jst={jst}
                            title="March 2017 - 2023"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="end"
                        />
                        <RoadmapBox
                            roadmapRef={roadmapRef}
                            jst={jst}
                            title="04 2018"
                            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed"
                            variant="start"
                        />
                        <RoadmapBox
                            roadmapRef={roadmapRef}
                            jst={jst}
                            title="March 2017 - 2023"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="end"
                        />
                    </div>
                </div>
            </Container>
            <LoremText />
        </section>
    )
}

export default Roadmap
