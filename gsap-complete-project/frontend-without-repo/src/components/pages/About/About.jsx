import React from 'react';
import "./About.scss";
import AboutGallery from './AboutGallery/AboutGallery';
import Banner from './Banner/Banner';
import Me from './Me/Me';
import RecentProject from './RecentProject/RecentProject';
import RecentWork from './RecentWork/RecentWork';
import Services from './Services/Services';
import CyberConvoy from './CyberConvoy/CyberConvoy';
import Bts from './Bts/Bts';
import Heights from './Heights/Heights';
import Responsibility from './Responsibility/Responsibility';
import ImageBlur from "./ImageBlur/ImageBlur";
import ThreeDCard from './ThreeDCard/ThreeDCard';

const About = () => {
    return (
        <>
            <Banner />
            <Me />
            <Services />
            <RecentWork />
            <RecentProject />
            <AboutGallery />
            <CyberConvoy />
            <Bts />
            <Responsibility />
            <ImageBlur />
            <Heights />
            <ThreeDCard />
            {/* <Jungle /> */}
            {/* <div style={{ height: "100dvh", border: "2px solid white" }} /> */}
            {/* <AboutSlider /> */}
        </>
    )
}

export default About
