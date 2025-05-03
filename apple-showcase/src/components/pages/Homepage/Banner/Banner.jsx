import React from 'react';
import { Container } from 'react-bootstrap';
import "./Banner.scss";
import BannerExperience from './BannerExperience/BannerExperience';

const Banner = () => {
    return (
        <section className="banner_design"
        // style={{ borderBottom: "2px solid red" }}
        >
            <div className="banner_in">
                <div className="banner_content">
                    <Container>
                        <div className="h1">
                            <h1>Headphones Pro</h1>
                        </div>
                        <h2>Groundbreaking Sound.</h2>
                    </Container>
                </div>
                <BannerExperience />
            </div>
        </section>
    )
}

export default Banner
