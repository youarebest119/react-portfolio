import { useGSAP } from '@gsap/react';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import React, { useRef } from 'react'

const svglines = [
    <line x1="207" y1="0.389648" x2="207" y2="237.949" stroke="#404040" strokeWidth="2" />,
    <line x1="235.454" y1="11.2373" x2="235.454" y2="237.949" stroke="#404040" strokeWidth="2.5" />,
    <line x1="263.907" y1="25.3389" x2="263.907" y2="237.949" stroke="#404040" strokeWidth="3" />,
    <line x1="292.36" y1="40.5254" x2="292.36" y2="237.949" stroke="#404040" strokeWidth="3.5" />,
    <line x1="320.813" y1="50.2881" x2="320.813" y2="237.949" stroke="#404040" strokeWidth="4" />,
    <line x1="349.267" y1="64.3896" x2="349.267" y2="237.949" stroke="#404040" strokeWidth="4.5" />,
    <line x1="377.72" y1="77.4072" x2="377.72" y2="237.95" stroke="#404040" strokeWidth="5" />,
    <line x1="406.174" y1="91.5088" x2="406.174" y2="237.949" stroke="#404040" strokeWidth="5.5" />,
    <line x1="434.627" y1="102.355" x2="434.627" y2="237.949" stroke="#404040" strokeWidth="6" />,
    <line x1="463.081" y1="117.542" x2="463.081" y2="237.949" stroke="#404040" strokeWidth="6.5" />,
    <path d="M488.034 128.39L488.034 237.949" stroke="#404040" strokeWidth="7.5" />,
    <line x1="520.237" y1="143.576" x2="520.237" y2="237.949" stroke="#404040" strokeWidth="8" />,
    <line x1="376.898" y1="553.61" x2="376.898" y2="261.814" stroke="#B8E280" strokeWidth="2" />,
    <line x1="343.021" y1="540.286" x2="343.021" y2="261.814" stroke="#B8E280" strokeWidth="2.5" />,
    <line x1="309.144" y1="522.965" x2="309.144" y2="261.814" stroke="#B8E280" strokeWidth="3" />,
    <line x1="275.267" y1="504.312" x2="275.267" y2="261.814" stroke="#B8E280" strokeWidth="3.5" />,
    <line x1="241.39" y1="492.32" x2="241.39" y2="261.814" stroke="#B8E280" strokeWidth="4" />,
    <line x1="207.513" y1="474.998" x2="207.513" y2="261.813" stroke="#B8E280" strokeWidth="4.5" />,
    <line x1="173.636" y1="459.01" x2="173.636" y2="261.814" stroke="#B8E280" strokeWidth="5" />,
    <line x1="139.758" y1="441.688" x2="139.758" y2="261.814" stroke="#B8E280" strokeWidth="5.5" />,
    <line x1="105.881" y1="428.364" x2="105.881" y2="261.814" stroke="#B8E280" strokeWidth="6" />,
    <line x1="72.0044" y1="409.711" x2="72.0044" y2="261.814" stroke="#B8E280" strokeWidth="6.5" />,
    <path d="M41.627 396.387L41.627 261.814" stroke="#B8E280" strokeWidth="7.5" />,
    <line x1="4" y1="377.733" x2="4" y2="261.814" stroke="#B8E280" strokeWidth="8" />,
    <line x1="161.61" y1="106.694" x2="161.61" y2="408.254" stroke="#787E32" strokeWidth="2" />,
    <line x1="194.403" y1="121.881" x2="194.403" y2="412.593" stroke="#787E32" strokeWidth="2.5" />,
    <line x1="227.195" y1="137.067" x2="227.195" y2="421.271" stroke="#787E32" strokeWidth="3" />,
    <line x1="259.987" y1="151.169" x2="259.987" y2="428.864" stroke="#787E32" strokeWidth="3.5" />,
    <line x1="292.78" y1="170.694" x2="292.78" y2="433.203" stroke="#787E32" strokeWidth="4" />,
    <path d="M323.322 186.423L323.322 441.913" stroke="#787E32" strokeWidth="4.5" />,
    <line x1="358.365" y1="201.067" x2="358.365" y2="448.389" stroke="#787E32" strokeWidth="5" />,
    <line x1="391.157" y1="216.254" x2="391.157" y2="457.067" stroke="#787E32" strokeWidth="5.5" />,
    <line x1="424.449" y1="230.355" x2="424.449" y2="461.406" stroke="#787E32" strokeWidth="7" />,
    <line x1="457.492" y1="248.796" x2="457.492" y2="467.915" stroke="#787E32" strokeWidth="8" />,
]
const Faq = () => {
    const lines = useRef([]);
    useGSAP(() => {
        ScrollSmoother.create({
            content: "#smooth-content",
            wrapper: "#smooth-wrapper",
            smooth: 1.5,
            effects: true,
        })
    })
    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div style={{ height: "100dvh" }} />
                    <div id="faq">
                        <svg xmlns="http://www.w3.org/2000/svg" width="525" height="554" viewBox="0 0 600 600" fill="none">
                            {
                                svglines.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <g data-speed={index * 0.05}>
                                                {item}
                                            </g>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </svg>
                    </div>
                    <div style={{ height: "100dvh" }} />
                </div>
            </div>
        </>
    )
}

export default Faq
