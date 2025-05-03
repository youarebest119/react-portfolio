import React from 'react'
import video from "../../../../assets/videos/about-slider-video.mp4";
import "./RecentWork.scss";
import { useGSAP } from '@gsap/react';
import { Container } from 'react-bootstrap';
import gsap from 'gsap';
import SplitText from 'gsap-trial/SplitText';
import WorkCard from './WorkCard/WorkCard';
import recentwork1 from "../../../../assets/images/recent-work-1.webp";
import recentwork2 from "../../../../assets/images/recent-work-2.webp";
import recentwork3 from "../../../../assets/images/recent-work-3.webp";

const RecentWork = () => {
    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".video_point",
                    start: "top 80%",
                    scrub: true,
                    end: "center 60%",
                }
            })
            .to(".video_source", {
                yPercent: -50,
                top: "50%",
                width: "calc(100% - 8rem)",
                height: "calc(100% - 8rem)",
            })
            .to(".video_source video", {
                scale: 1,
            }, "<")

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".recent_work_in span",
                    scrub: 1,
                    start: "top 100%",
                    end: "center 20%",
                }
            })
            .to(".recent_work_in h3 span", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            })
            .from(".recent_work_in h3 div", {
                x: i => (i + 1) * 125,
            }, "<")

        const paragraph = new SplitText(".recent_work_description p", {
            linesClass: "l",
            wordsClass: "w",
            charsClass: "c",
        })
        gsap
            .timeline()
            .from(paragraph.words, {
                yPercent: 100,
                scrollTrigger: {
                    trigger: ".recent_work_description",
                    start: "top 70%",
                    scrub: 1,
                    end: "bottom 40%",
                }
            })

        gsap.from(".recent_work_design hr", {
            scaleX: 0,
            duration: 1,
            ease: "back.inOut",
            scrollTrigger: {
                trigger: ".recent_work_design hr",
                start: "top 80%",
                end: "bottom: 40%",
                toggleActions: "play none none reverse",
            }
        })

    })
    return (
        <section className="recent_work_design">
            <Container fluid>
                <div className="recent_work_in">
                    <Container>
                        <h3>
                            <div>Recent <span>Recent</span></div>
                            <div>Work <span>Work</span></div>
                        </h3>
                        <div className="recent_work_description">
                            <p>
                                In the creative wilderness,
                                clients find our work truly
                                beloved.
                            </p>
                        </div>
                    </Container>
                    <div className="video_point">
                        <div className="video_source">
                            <video
                                loop
                                autoPlay
                                muted
                            >
                                <source src={video} />
                            </video>
                        </div>
                    </div>
                    <hr />
                    <div className="recent_work_data">
                        <WorkCard image={recentwork1} title="LOftloom" description="UI Design, UX, Wireframe" />
                        <WorkCard image={recentwork2} title="imusic" description="Research, UX, UI Design" direction='right' />
                        <WorkCard image={recentwork3} title="technis" description="Research, UX, UI Design" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default RecentWork
