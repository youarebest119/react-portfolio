import React, { useEffect, useState } from 'react'
import styles from "./Home.module.scss";
import { ROUTES } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'
import { Container } from "react-bootstrap"
import { motion, useIsPresent } from "framer-motion";
const Home = () => {
    const isPresent = useIsPresent();
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     setData(Object.keys(ROUTES));
    // }, [])

    useEffect(() => {
        setData(Object.keys(ROUTES).filter(item => {
            return item.toLowerCase().includes(search.toLowerCase())
        }));
    }, [search])
    return (
        <div className={styles.home}>
            <Container>
                <input value={search} onChange={e => setSearch(e.target.value)} className={styles.input} placeholder='Search' />
                <ul>
                    {
                        data.map(item => {
                            return (
                                <li key={item}>
                                    <NavLink to={`${ROUTES[item]}`}>
                                        {ROUTES[item]}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className={styles.overlay}
            />
        </div>
    )
}

export default Home
