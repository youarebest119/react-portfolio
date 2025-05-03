import React, { useRef } from 'react'
import image from "../../../../assets/images/car.png";
import "./ImageBlur.scss";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import catRow1Col1 from "../../../../assets/images/cat/row-1-column-1.png";
import catRow1Col2 from "../../../../assets/images/cat/row-1-column-2.png";
import catRow1Col3 from "../../../../assets/images/cat/row-1-column-3.png";
import catRow1Col4 from "../../../../assets/images/cat/row-1-column-4.png";
import catRow1Col5 from "../../../../assets/images/cat/row-1-column-5.png";
import catRow1Col6 from "../../../../assets/images/cat/row-1-column-6.png";
import catRow1Col7 from "../../../../assets/images/cat/row-1-column-7.png";
import catRow1Col8 from "../../../../assets/images/cat/row-1-column-8.png";
import catRow1Col9 from "../../../../assets/images/cat/row-1-column-9.png";
import catRow1Col10 from "../../../../assets/images/cat/row-1-column-10.png";

import catRow2Col1 from "../../../../assets/images/cat/row-2-column-1.png";
import catRow2Col2 from "../../../../assets/images/cat/row-2-column-2.png";
import catRow2Col3 from "../../../../assets/images/cat/row-2-column-3.png";
import catRow2Col4 from "../../../../assets/images/cat/row-2-column-4.png";
import catRow2Col5 from "../../../../assets/images/cat/row-2-column-5.png";
import catRow2Col6 from "../../../../assets/images/cat/row-2-column-6.png";
import catRow2Col7 from "../../../../assets/images/cat/row-2-column-7.png";
import catRow2Col8 from "../../../../assets/images/cat/row-2-column-8.png";
import catRow2Col9 from "../../../../assets/images/cat/row-2-column-9.png";
import catRow2Col10 from "../../../../assets/images/cat/row-2-column-10.png";

import catRow3Col1 from "../../../../assets/images/cat/row-3-column-1.png";
import catRow3Col2 from "../../../../assets/images/cat/row-3-column-2.png";
import catRow3Col3 from "../../../../assets/images/cat/row-3-column-3.png";
import catRow3Col4 from "../../../../assets/images/cat/row-3-column-4.png";
import catRow3Col5 from "../../../../assets/images/cat/row-3-column-5.png";
import catRow3Col6 from "../../../../assets/images/cat/row-3-column-6.png";
import catRow3Col7 from "../../../../assets/images/cat/row-3-column-7.png";
import catRow3Col8 from "../../../../assets/images/cat/row-3-column-8.png";
import catRow3Col9 from "../../../../assets/images/cat/row-3-column-9.png";
import catRow3Col10 from "../../../../assets/images/cat/row-3-column-10.png";

import catRow4Col1 from "../../../../assets/images/cat/row-4-column-1.png";
import catRow4Col2 from "../../../../assets/images/cat/row-4-column-2.png";
import catRow4Col3 from "../../../../assets/images/cat/row-4-column-3.png";
import catRow4Col4 from "../../../../assets/images/cat/row-4-column-4.png";
import catRow4Col5 from "../../../../assets/images/cat/row-4-column-5.png";
import catRow4Col6 from "../../../../assets/images/cat/row-4-column-6.png";
import catRow4Col7 from "../../../../assets/images/cat/row-4-column-7.png";
import catRow4Col8 from "../../../../assets/images/cat/row-4-column-8.png";
import catRow4Col9 from "../../../../assets/images/cat/row-4-column-9.png";
import catRow4Col10 from "../../../../assets/images/cat/row-4-column-10.png";

import catRow5Col1 from "../../../../assets/images/cat/row-5-column-1.png";
import catRow5Col2 from "../../../../assets/images/cat/row-5-column-2.png";
import catRow5Col3 from "../../../../assets/images/cat/row-5-column-3.png";
import catRow5Col4 from "../../../../assets/images/cat/row-5-column-4.png";
import catRow5Col5 from "../../../../assets/images/cat/row-5-column-5.png";
import catRow5Col6 from "../../../../assets/images/cat/row-5-column-6.png";
import catRow5Col7 from "../../../../assets/images/cat/row-5-column-7.png";
import catRow5Col8 from "../../../../assets/images/cat/row-5-column-8.png";
import catRow5Col9 from "../../../../assets/images/cat/row-5-column-9.png";
import catRow5Col10 from "../../../../assets/images/cat/row-5-column-10.png";

import catRow6Col1 from "../../../../assets/images/cat/row-6-column-1.png";
import catRow6Col2 from "../../../../assets/images/cat/row-6-column-2.png";
import catRow6Col3 from "../../../../assets/images/cat/row-6-column-3.png";
import catRow6Col4 from "../../../../assets/images/cat/row-6-column-4.png";
import catRow6Col5 from "../../../../assets/images/cat/row-6-column-5.png";
import catRow6Col6 from "../../../../assets/images/cat/row-6-column-6.png";
import catRow6Col7 from "../../../../assets/images/cat/row-6-column-7.png";
import catRow6Col8 from "../../../../assets/images/cat/row-6-column-8.png";
import catRow6Col9 from "../../../../assets/images/cat/row-6-column-9.png";
import catRow6Col10 from "../../../../assets/images/cat/row-6-column-10.png";

import catRow7Col1 from "../../../../assets/images/cat/row-7-column-1.png";
import catRow7Col2 from "../../../../assets/images/cat/row-7-column-2.png";
import catRow7Col3 from "../../../../assets/images/cat/row-7-column-3.png";
import catRow7Col4 from "../../../../assets/images/cat/row-7-column-4.png";
import catRow7Col5 from "../../../../assets/images/cat/row-7-column-5.png";
import catRow7Col6 from "../../../../assets/images/cat/row-7-column-6.png";
import catRow7Col7 from "../../../../assets/images/cat/row-7-column-7.png";
import catRow7Col8 from "../../../../assets/images/cat/row-7-column-8.png";
import catRow7Col9 from "../../../../assets/images/cat/row-7-column-9.png";
import catRow7Col10 from "../../../../assets/images/cat/row-7-column-10.png";

import catRow8Col1 from "../../../../assets/images/cat/row-8-column-1.png";
import catRow8Col2 from "../../../../assets/images/cat/row-8-column-2.png";
import catRow8Col3 from "../../../../assets/images/cat/row-8-column-3.png";
import catRow8Col4 from "../../../../assets/images/cat/row-8-column-4.png";
import catRow8Col5 from "../../../../assets/images/cat/row-8-column-5.png";
import catRow8Col6 from "../../../../assets/images/cat/row-8-column-6.png";
import catRow8Col7 from "../../../../assets/images/cat/row-8-column-7.png";
import catRow8Col8 from "../../../../assets/images/cat/row-8-column-8.png";
import catRow8Col9 from "../../../../assets/images/cat/row-8-column-9.png";
import catRow8Col10 from "../../../../assets/images/cat/row-8-column-10.png";

import catRow9Col1 from "../../../../assets/images/cat/row-9-column-1.png";
import catRow9Col2 from "../../../../assets/images/cat/row-9-column-2.png";
import catRow9Col3 from "../../../../assets/images/cat/row-9-column-3.png";
import catRow9Col4 from "../../../../assets/images/cat/row-9-column-4.png";
import catRow9Col5 from "../../../../assets/images/cat/row-9-column-5.png";
import catRow9Col6 from "../../../../assets/images/cat/row-9-column-6.png";
import catRow9Col7 from "../../../../assets/images/cat/row-9-column-7.png";
import catRow9Col8 from "../../../../assets/images/cat/row-9-column-8.png";
import catRow9Col9 from "../../../../assets/images/cat/row-9-column-9.png";
import catRow9Col10 from "../../../../assets/images/cat/row-9-column-10.png";

import catRow10Col1 from "../../../../assets/images/cat/row-10-column-1.png";
import catRow10Col2 from "../../../../assets/images/cat/row-10-column-2.png";
import catRow10Col3 from "../../../../assets/images/cat/row-10-column-3.png";
import catRow10Col4 from "../../../../assets/images/cat/row-10-column-4.png";
import catRow10Col5 from "../../../../assets/images/cat/row-10-column-5.png";
import catRow10Col6 from "../../../../assets/images/cat/row-10-column-6.png";
import catRow10Col7 from "../../../../assets/images/cat/row-10-column-7.png";
import catRow10Col8 from "../../../../assets/images/cat/row-10-column-8.png";
import catRow10Col9 from "../../../../assets/images/cat/row-10-column-9.png";
import catRow10Col10 from "../../../../assets/images/cat/row-10-column-10.png";



const ImageBlur = () => {
    const images = [
        catRow1Col1,
        catRow1Col2,
        catRow1Col3,
        catRow1Col4,
        catRow1Col5,
        catRow1Col6,
        catRow1Col7,
        catRow1Col8,
        catRow1Col9,
        catRow1Col10,
        catRow2Col1,
        catRow2Col2,
        catRow2Col3,
        catRow2Col4,
        catRow2Col5,
        catRow2Col6,
        catRow2Col7,
        catRow2Col8,
        catRow2Col9,
        catRow2Col10,
        catRow3Col1,
        catRow3Col2,
        catRow3Col3,
        catRow3Col4,
        catRow3Col5,
        catRow3Col6,
        catRow3Col7,
        catRow3Col8,
        catRow3Col9,
        catRow3Col10,
        catRow4Col1,
        catRow4Col2,
        catRow4Col3,
        catRow4Col4,
        catRow4Col5,
        catRow4Col6,
        catRow4Col7,
        catRow4Col8,
        catRow4Col9,
        catRow4Col10,
        catRow5Col1,
        catRow5Col2,
        catRow5Col3,
        catRow5Col4,
        catRow5Col5,
        catRow5Col6,
        catRow5Col7,
        catRow5Col8,
        catRow5Col9,
        catRow5Col10,
        catRow6Col1,
        catRow6Col2,
        catRow6Col3,
        catRow6Col4,
        catRow6Col5,
        catRow6Col6,
        catRow6Col7,
        catRow6Col8,
        catRow6Col9,
        catRow6Col10,
        catRow7Col1,
        catRow7Col2,
        catRow7Col3,
        catRow7Col4,
        catRow7Col5,
        catRow7Col6,
        catRow7Col7,
        catRow7Col8,
        catRow7Col9,
        catRow7Col10,
        catRow8Col1,
        catRow8Col2,
        catRow8Col3,
        catRow8Col4,
        catRow8Col5,
        catRow8Col6,
        catRow8Col7,
        catRow8Col8,
        catRow8Col9,
        catRow8Col10,
        catRow9Col1,
        catRow9Col2,
        catRow9Col3,
        catRow9Col4,
        catRow9Col5,
        catRow9Col6,
        catRow9Col7,
        catRow9Col8,
        catRow9Col9,
        catRow9Col10,
        catRow10Col1,
        catRow10Col2,
        catRow10Col3,
        catRow10Col4,
        catRow10Col5,
        catRow10Col6,
        catRow10Col7,
        catRow10Col8,
        catRow10Col9,
        catRow10Col10,
    ]
    const scope = useRef();
    const { contextSafe } = useGSAP(() => {
        gsap.utils.toArray("rect").forEach((box, index) => {
            box.addEventListener("mouseenter", (event) => {
                gsap.to(event.target, {
                    opacity: 1,
                    onComplete: () => {
                        gsap.to(event.target, {
                            opacity: 0,
                        })
                    }
                })
            })
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: scope.current,
                start: "top 50%",
                toggleActions: "restart none none reverse",
            }
        })
            .from(".box > img", {
                y: 400,
                opacity: 0,
                filter: "blur(1rem)",
                duration: 1.4,
                ease: "back.inOut",
            })
    }, { scope })
    return (
        <section ref={scope} className="image_blur_design">
            <div className="box">
                <img src={image} alt="" />
                {/* <div className="box_blur">
                    {
                        images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))
                    }
                </div> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="354" height="392" viewBox="0 0 354 392" fill="none">
                    <rect width="32" height="30" fill="#D9D9D9" />
                    <rect y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="64" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="181" width="33" height="30" fill="#D9D9D9" />
                    <rect x="97" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="257" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="181" width="33" height="30" fill="#D9D9D9" />
                    <rect x="290" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="181" width="32" height="30" fill="#D9D9D9" />
                    <rect y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="32" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="32" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="32" y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="64" y="30" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="211" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="60" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="241" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="90" width="33" height="31" fill="#D9D9D9" />
                    <rect x="64" y="271" width="33" height="31" fill="#D9D9D9" />
                    <rect x="64" y="121" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="302" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="151" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="332" width="33" height="30" fill="#D9D9D9" />
                    <rect x="64" y="362" width="33" height="30" fill="#D9D9D9" />
                    <rect x="97" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="97" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="97" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="97" y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="129" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="129" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="129" y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="161" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="161" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="161" y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="193" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="193" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="193" y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="225" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="225" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="225" y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="257" y="30" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="211" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="60" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="241" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="90" width="33" height="31" fill="#D9D9D9" />
                    <rect x="257" y="271" width="33" height="31" fill="#D9D9D9" />
                    <rect x="257" y="121" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="302" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="151" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="332" width="33" height="30" fill="#D9D9D9" />
                    <rect x="257" y="362" width="33" height="30" fill="#D9D9D9" />
                    <rect x="290" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="290" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="290" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="290" y="362" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="30" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="211" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="60" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="241" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="90" width="32" height="31" fill="#D9D9D9" />
                    <rect x="322" y="271" width="32" height="31" fill="#D9D9D9" />
                    <rect x="322" y="121" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="302" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="151" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="332" width="32" height="30" fill="#D9D9D9" />
                    <rect x="322" y="362" width="32" height="30" fill="#D9D9D9" />
                </svg>
            </div>
        </section>
    )
}

export default ImageBlur
