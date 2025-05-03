import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from 'gsap-trial/SplitText'
import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'
import sidhu from "../../../assets/images/sidhu.png"
import karan from "../../../assets/images/karan.png"
import "./Contact.scss";

gsap.registerPlugin(Observer, SplitText, ScrollTrigger);
gsap.config({
    trialWarn: false,
})


const Contact = () => {
    const isAnimating = useRef(false);
    const slide = useRef(1);
    const panels = useRef();
    useGSAP(() => {
        panels.current = gsap.utils.toArray(".contact .slider_item")
        new SplitText(".slider_item h2", {
            linesClass: "l",
            wordsClass: "w",
            charsClass: "c",
        })
        Observer.create({
            dragMinimum: 1,
            target: ".contact",
            tolerance: 0,
            onRelease: (event) => {
                !isAnimating.current && handleAnimate(event.deltaX > 0 ? -1 : 1)
            }
        })
        gsap.fromTo(".contact .img img", {
            x: -10,
        }, {
            x: 10,
            ease: "linear",
            duration: 5,
            repeat: -1,
            yoyo: true,
            yoyoEase: "back"
        })
        gsap.timeline({

        })
            .from(".contact .slider_item .img", {
                yPercent: 100,
                ease: "back.inOut",
                duration: 1,
            })
            .from(".contact .slider_item h2 .c", {
                yPercent: 100,
                duration: 1,
                ease: "back.inOut",
                stagger: 0.01,
            }, "<")

    })
    const handleAnimate = (direction = 1) => {
        if (slide.current === 2 && direction === 1) {
            return;
        }
        else if (slide.current === 1 && direction === -1) {
            return;
        }

        slide.current += direction;
        isAnimating.current = true;
        const currentSlide = panels.current[slide.current - 1];

        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating.current = false;
            }
        })
        tl.to(".slider", {
            xPercent: -100 * (slide.current - 1),
            ease: "power4.inOut",
            duration: 2,
        })
        tl.from(currentSlide.querySelector(".img"), {
            x: direction * 800,
            ease: "power4.inOut",
            duration: 2.4,
        }, "0")
        tl.from(gsap.utils.toArray(currentSlide.querySelectorAll(".c")), {
            x: direction * 30,
            ease: "power4.inOut",
            opacity: 0,
            duration: 2.4,
            stagger: 0.05,
        }, "<")

    }
  return (
      <>
          <div className="contact">
              <div className="slider" id="slider">
                  <div className="slider_item">
                      <h2>SIDHU MOOSE WALA</h2>
                      <div className="img">
                          <img src={sidhu} alt="sidhu" />
                      </div>
                  </div>
                  <div className="slider_item">
                      <h2>KARAN AUJLA</h2>
                      <div className="img">
                          <img src={karan} alt="karan" />
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Contact
