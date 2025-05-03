import { useGSAP } from "@gsap/react";
import "./FollowPath.scss";
import gsap from "gsap";
import MotionPathHelper from 'gsap-trial/MotionPathHelper';

const FollowPath = () => {
    useGSAP(() => {
        gsap.set("#box", {
            // xPercent: -100,
            yPercent: -150,
            // transformOrigin: "0% 50%",
        })
        gsap.to("#box", {
            duration: 2,
            motionPath: {
                path: "#path",
                autoRotate: true,
                start: 0,
                end: 0.04
            },
            // scrollTrigger: {
            // trigger: ".follow_path_design",
            // markers: true,
            // scrub: true,
            // }
        })
        MotionPathHelper.create("#box")
    })
    return (
        <div className="follow_path_design">
            <div className="in">
                {/* <div id="box" className="box"></div> */}

                <svg width="1647" height="344" viewBox="0 0 1700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="path" d="M1.5 234.501C1.5 234.501 252.5 -226.999 831.5 149.501C1410.5 526.001 1645.5 234.501 1645.5 234.501" stroke="white" stroke-width="2" />
                    <rect id="box" y="33" width="32" height="35" fill="#D9D9D9" />
                </svg>
            </div>
        </div>
    )
}

export default FollowPath
