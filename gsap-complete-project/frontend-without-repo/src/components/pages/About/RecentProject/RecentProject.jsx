import React from 'react'
import work from "../../../../assets/images/recent-work-long-image.webp";
import "./RecentProject.scss";
import { Container } from 'react-bootstrap';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const RecentProject = () => {
    useGSAP(() => {
        gsap.
            to(".recent_project_image img", {
                yPercent: -50,
                scrollTrigger: {
                    trigger: ".recent_project_image",
                    start: "top center",
                    scrub: 2,
                }
            })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".recent_project_design h3 span",
                    scrub: 1,
                    start: "top 100%",
                    end: "center 20%",
                }
            })
            .to(".recent_project_design h3 span", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            })
            .from(".recent_project_design h3 div", {
                x: i => (i + 1) * 125,
            }, "<")


        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".recent_project_design h2 span",
                    scrub: 1,
                    start: "top 100%",
                    end: "center 20%",
                }
            })
            .to(".recent_project_design h2 span", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            })
            .from(".recent_project_design h2 div", {
                x: i => (i + 1) * (i%2 === 0 ? -125 : 125),
            }, "<")

    })
    return (
        <section className="recent_project_design">
            <Container>
                <h3><div>TECHNIS <span>TECHNIS</span></div></h3>
            </Container>
            <div className='recent_project_image'>
                <img src={work} alt="work" />
            </div>
            <h2>
                <div>intuitive <span>intuitive</span></div>
                <div>ux <span>ux</span></div>
                <div>prolongs <span>prolongs</span></div>
                <div>user stay. <span>user stay.</span></div>
            </h2>
        </section>
    )
}

export default RecentProject
