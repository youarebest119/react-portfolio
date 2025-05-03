import { motion, scroll, useMotionValue } from 'framer-motion';
import React from 'react';
import dummyImg from "../../../assets/images/on-scroll-zoom/background.jpg";
import car from "../../../assets/images/on-scroll-zoom/car.png";
import LoremText from '../LoremText/LoremText';
import styles from "./OnScrollZoom.module.scss";

const OnScrollZoom = () => {
    const value = useMotionValue(0);
    scroll(progress => value.set(progress));
    // useEffect(() => {
    //     let controller = new ScrollMagic.Controller();

    //     new ScrollMagic.Scene({
    //         triggerElement: ".my_tag",
    //         triggerHook: 1,
    //         duration: "100%",
    //     })
    //         .setTween(tl)
    //         .addIndicators({
    //             name: "indicators"
    //         })
    //         .addTo(controller);
    // }, [])

    return (
        <>
            {/* <Controller>
                <div className={styles.main_section}>
                    <Scene
                        // indicators={true}
                        // end='+=3000px'
                        // duration="200%"
                        // pin={true}
                        // progressEvents={true}
                        triggerHook={1}
                        pin={true}
                    >
                        <Timeline
                            wrapper={<div className={styles.parallax} />}
                        >
                            <Tween
                                from={{
                                    transform: "scale(1)"
                                }}
                                to={{
                                    transform: "scale(2)"
                                }}
                            >
                                <img
                                    src={dummyImg}
                                    alt=""
                                    style={{
                                        height: "100vh",
                                        width: "100%",
                                        objectFit: "cover",
                                        background: "black"
                                    }}
                                />
                            </Tween>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, dicta?</h2>
                        </Timeline>
                    </Scene>

                    <LoremText />
                    <LoremText />
                    <LoremText />
                </div>
            </Controller> */}

            <div className={styles.main_img}>
                <img
                    src={dummyImg}
                    alt=""
                    className={styles.main_bg}
                />
                <motion.img
                    src={car}
                    style={{
                        scale: value,
                    }}
                />
            </div>
            <div className={styles.sampel_text}>
                <LoremText />
                <LoremText />
                <LoremText />
            </div>
        </>
    )
}

export default OnScrollZoom
