import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from "./HomeLayout.module.scss";

const HomeLayout = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <>
            <main className={styles.layout}>
                <div className={styles.inner}>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default HomeLayout
