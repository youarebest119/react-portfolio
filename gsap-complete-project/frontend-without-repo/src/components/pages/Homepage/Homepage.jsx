import React from 'react';
import Banner from './Banner/Banner';
import "./Homepage.scss";
import Electric from './Electric/Electric';
import Feature from './Features/Feature';
import Freedom from './Freedom/Freedom';
import Gallery from './Gallery/Gallery';
import Join from './Join/Join';
import Trailer from './Trailer/Trailer';

const Homepage = () => {
    return (
        <>
            <Banner />
            <Electric />
            <Feature />
            <Trailer />
            <Gallery />
            <Freedom />
            <Join />
        </>
    )
}

export default Homepage
