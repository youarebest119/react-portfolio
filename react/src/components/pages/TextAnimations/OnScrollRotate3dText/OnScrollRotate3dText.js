import React from 'react';
import styles from "./OnScrollRotate3dText.module.scss";
import OnScrollRotate3dTextElement from './OnScrollRotate3dTextElement';
import OnViewRotate3dTextElement from './OnViewRotate3dTextElement';

const OnScrollRotate3dText = () => {
    return (
        <>
            <div style={{ height: '50vh', backgroundColor: "#514747" }} />
            <section className={styles.rotate_text}>
                <OnScrollRotate3dTextElement>Our Services</OnScrollRotate3dTextElement>
                <OnScrollRotate3dTextElement>Are from World's</OnScrollRotate3dTextElement>
                <OnScrollRotate3dTextElement>Best Developers</OnScrollRotate3dTextElement>
            </section>
            <div style={{ height: '50vh', backgroundColor: "#514747" }} />
            <section className={styles.rotate_text}>
                <OnViewRotate3dTextElement>Our Services</OnViewRotate3dTextElement>
                <OnViewRotate3dTextElement>Are from World's</OnViewRotate3dTextElement>
                <OnViewRotate3dTextElement>Best Developers</OnViewRotate3dTextElement>
            </section>
            <div style={{ height: '50vh', backgroundColor: "#514747" }} />
        </>
    )
}

export default OnScrollRotate3dText
