import React, { useCallback, useEffect, useState } from 'react'
import styles from "./AnimatedTable.module.scss";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import Pagination from 'react-bootstrap/Pagination';
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTable = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const variants = {
        visible: {
            opacity: 1,
            // x: "0",
        },
        hidden: {
            opacity: 0,
            // x: "100px",
        },
    }

    const getData = useCallback(async () => {
        setLoading(true);
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}?page=${page}&per_page=${process.env.REACT_APP_RESPONSE_PER_PAGE}`);
            setData(response.data)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, [page])



    useEffect(() => {
        getData();
    }, [page, getData])

    return (
        <section className={styles.animated_table}>
            <Container>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Tagline</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading ?
                                <>
                                    <tr>
                                        <td colSpan={4}>
                                            loading....
                                        </td>
                                    </tr>
                                </>
                                :
                                data.length > 0 ?
                                    <AnimatePresence mode="sync">
                                        {
                                            data.map((item, index) => {
                                                return (
                                                    <motion.tr
                                                        key={item.id}
                                                        layout
                                                        initial="hidden"
                                                        animate="visible"
                                                        variants={variants}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                        }}
                                                    >
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.tagline}</td>
                                                        <td>{item.description}</td>
                                                    </motion.tr>
                                                )
                                            })
                                        }
                                    </AnimatePresence>
                                    :
                                    <>
                                        <tr>
                                            <td colSpan={4}>
                                                No Record Found
                                            </td>
                                        </tr>
                                    </>
                        }
                    </tbody>
                </Table>
                <Pagination className='justify-content-center mt-5'>
                    <Pagination.Prev
                        disabled={page === 1}
                        onClick={() => {
                            setPage(page - 1)
                        }}
                    />
                    <Pagination.Item active>{page}</Pagination.Item>
                    <Pagination.Next
                        onClick={() => {
                            setPage(page + 1)
                        }}
                    />
                </Pagination>
            </Container>
        </section>
    )
}

export default AnimatedTable
