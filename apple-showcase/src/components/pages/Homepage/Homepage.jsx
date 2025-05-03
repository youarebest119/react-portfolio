import React from 'react'
import "./Homepage.scss";
import Banner from './Banner/Banner';
import Features from './Features/Features';
import { Container } from 'react-bootstrap';
import vd from "../../../assets/videos/video.mp4";
import About from './About/About';

const Homepage = () => {
    return (
        <>
            <Banner />
            <div className="page_video">
                <video playsInline autoPlay muted loop>
                    <source src={vd} type="video/mp4" />
                </video>
            </div>
            <div className="text_section">
                <Container>
                    <div className="text_section_in">
                        <h3>Audio performance</h3>
                        <h2>                H2. More
                            immersive by
                            every measure.</h2>
                        <p>The Apple-designed H2 chip is the force behind the advanced audio performance of AirPods Pro 2, working with the driver and amplifier to create crisp, high-definition sound. It uses computational algorithms to deliver noise cancellation, superior three-dimensional sound, efficient battery life and imperceivable end-to-end wireless audio latency for games — all at once.</p>
                    </div>
                </Container>
            </div>
            {/* <Features /> */}
            {/* <div className="next_section"></div> */}
            {/* <div style={{ height: "200dvh" }} /> */}
            <About />
            <div style={{ height: "500dvh" }} />
        </>
    )
}

export default Homepage
