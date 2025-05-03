import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, } from "framer-motion";
import styles from "./TeamSectionSlider.module.scss";
import TeamMember from './TeamMember/TeamMember';
import team1 from "../../../assets/images/team-slider/team-1.jpg";
import team2 from "../../../assets/images/team-slider/team-2.jpg";
import team3 from "../../../assets/images/team-slider/team-3.jpg";
import team4 from "../../../assets/images/team-slider/team-4.jpg";
import LoremText from '../LoremText/LoremText';

const TeamSectionSlider = () => {
    const ref = useRef();
    const [width, setWidth] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
    })
    // console.dir(ref.current.clientWidth)
    const x = useTransform(scrollYProgress, [0, 1], [0, -width])

    useEffect(() => {
        setWidth(ref.current.scrollWidth);
    }, [])

    const data = [
        {
            name: "Alex",
            designation: "CEO",
            img: team1,
        },
        {
            name: "Hardy",
            designation: "CTO",
            img: team2,
        },
        {
            name: "Max",
            designation: "Product Designer",
            img: team3,
        },
        {
            name: "John",
            designation: "Product Manager",
            img: team4,
        },
        {
            name: "Alex",
            designation: "CEO",
            img: team1,
        },
        {
            name: "Hardy",
            designation: "CTO",
            img: team2,
        },
        {
            name: "Max",
            designation: "Product Designer",
            img: team3,
        },
        {
            name: "John",
            designation: "Product Manager",
            img: team4,
        },
        {
            name: "Alex",
            designation: "CEO",
            img: team1,
        },
        {
            name: "Hardy",
            designation: "CTO",
            img: team2,
        },
        {
            name: "Max",
            designation: "Product Designer",
            img: team3,
        },
        {
            name: "John",
            designation: "Product Manager",
            img: team4,
        },
        {
            name: "Alex",
            designation: "CEO",
            img: team1,
        },
        {
            name: "Hardy",
            designation: "CTO",
            img: team2,
        },
        {
            name: "Max",
            designation: "Product Designer",
            img: team3,
        },
        {
            name: "John",
            designation: "Product Manager",
            img: team4,
        },
        {
            name: "Alex",
            designation: "CEO",
            img: team1,
        },
        {
            name: "Hardy",
            designation: "CTO",
            img: team2,
        },
        {
            name: "Max",
            designation: "Product Designer",
            img: team3,
        },
        {
            name: "John",
            designation: "Product Manager",
            img: team4,
        },
        {
            name: "Alex",
            designation: "CEO",
            img: team1,
        },
        {
            name: "Hardy",
            designation: "CTO",
            img: team2,
        },
        {
            name: "Max",
            designation: "Product Designer",
            img: team3,
        },
        {
            name: "Last John",
            designation: "Product Manager",
            img: team4,
        },
    ]
    return (
        <>
            <LoremText />
            <LoremText />
            <section
                className={styles.team_slider}
                ref={ref}
            >
                <motion.ul
                    style={{ x }}
                >
                    {
                        data.map((item, index) => (
                            <li>
                                <TeamMember index={index} item={item} />
                            </li>
                        ))
                    }
                    <li>
                        <h3>The End</h3>
                    </li>
                </motion.ul>
            </section>
            <LoremText />
            <LoremText />
        </>
    )
}

export default TeamSectionSlider
