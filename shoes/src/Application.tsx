import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import { Shoes } from "./assets/icons/icons";
import mountainLeft from "./assets/images/mountain-left.webp";
import mountainRight from "./assets/images/mountain-right.webp";
import vid from "./assets/videos/video.mp4";
import "./style.scss";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { Flip } from "gsap/Flip";
import ScrollSmoother from "gsap-trial/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, Flip, ScrollSmoother)
const Application = () => {
  // smooth scroll

  const smoother = useRef<ScrollSmoother>();
  useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 2,
      speed: 0.98,
      effects: true
    })
  })

  // smoother scroller end

  const shuffle = useCallback((arr: HTMLSpanElement[] | null[]) => {
    return arr.sort(() => Math.random() - 0.5)
  }, [])
  const favTitle = [
    {
      title: "YOUR",
    },
    {
      title: "NEW",
    },
    {
      title: "FAVORITE",
      stroke: true,
    },
    {
      title: "TRAIL",
    },
    {
      title: "COMPANION,",
    },
    {
      title: "CONQUERING",
    },
    {
      video: vid,
    },
    {
      title: "ANY",
    },
    {
      title: "TERRAIN",
      stroke: true,
    },
    {
      title: "WITH",
      stroke: true,
    },
    {
      title: "STYLE",
      stroke: true,
    },
    {
      title: "AND",
      stroke: true,
    },
    {
      title: "COMFORT.",
      stroke: true,
    },
  ]
  // banner
  const bannerTitleText = ["PATH FOR", "EVeryoneE", "EverywhEre"]
  const h1Title = useRef<HTMLSpanElement[] | null[]>([]);
  const banner = useRef<HTMLDivElement>(null);
  const mountains = useRef<HTMLDivElement[] | null[]>([]);
  useGSAP(() => {
    gsap.from(shuffle(h1Title.current), {
      y: -20,
      opacity: 0,
      scale: 2,
      stagger: 0.02,
      duration: i => {
        return 0.5 * (i < 10 ? 1 : (i / 20))
      },
    })
    gsap.from(mountains.current, {
      x: i => i % 2 ? 100 : -100,
      duration: 1.2,
      ease: "power4.out",
      opacity: 0,
    })
  }, { scope: banner });

  const secondShoe = useRef<HTMLDivElement>(null);
  const dominanceText = "THE AGIILITY PEAK 5 REPRESENTS THE EVOLUTION OF EXCELELENCE IN TRAIL RUNNING, FEATURING A NEW DESIGN, LIGHTNESS, AND EXECEPTIONAL GRID. THIS SHOE REDEFINES OUTDOOR RUNNIG STANDARDS, ENSURING COMPLETE CONFIGDENCE IN YOUR EQUIPMENT, NO MATTER THE DISTANCE.";
  const dominanceWords = useRef<HTMLSpanElement[] | null[]>([]);
  const dominanceTitle = useRef<HTMLSpanElement[] | null[]>([]);
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: banner.current,
        start: "top 0%",
        markers: true,
        scrub: true,
        pin: true,
        end: "+=300"
      },
      onComplete: () => {
        const secondShowState = Flip.getState(secondShoe.current)
        Flip.fit(
          "#shoe_first",
          secondShowState,
          {
            simple: true,
            duration: 1,
            absolute: true,
            scale: true,
            scrollTrigger: {
              start: "top top",
              trigger: banner.current,
              id: "ghost-one",
              scrub: true,
              markers: true,
              endTrigger: ".dominate_sec",
              end: "end 20%",
            },
            onComplete: () => {
              const statethree = Flip.getState(".shoe_third");
              Flip.fit(
                secondShoe.current,
                statethree,
                {
                  duration: 1,
                  scale: true,
                  absolute: true,
                  ease: 'power1.inOut',
                  scrollTrigger: {
                    start: "end top",
                    trigger: ".dominate_sec",
                    endTrigger: ".perf_sec",
                    scrub: true,
                    id: "ghost-two",
                    markers: true,
                    end: "top center",
                  },
                }
              )
            }
          },
        )
      }
    })
    tl.to(mountains.current, {
      xPercent: i => i % 2 ? 100 : -100,
    })
    tl.to(".banner_content", {
      opacity: 0,
    }, 0)
    tl.from(".shoe_first", {
      yPercent: 100,
      opacity: 0,
    }, 0);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".dominate_sec",
          scrub: true,
          start: "top 20%",
          pin: ".dominate_sec",
          markers: true,
          // end: '+=800'
        }
      })
      .from(
        [...shuffle(dominanceWords.current), ...dominanceTitle.current],
        {
          y: -25,
          scale: 2,
          opacity: 0,
          stagger: 0.02,
          duration: 0.1,
        }
      )
      .to(
        [...shuffle(dominanceWords.current), ...dominanceTitle.current],
        {
          y: -25,
          scale: 1.4,
          opacity: 0,
          duration: 0.1,
          stagger: 0.008
        },
        ">1"
      )

  })

  // banner end

  let previousArLenght = useRef(0);
  return (
    <>
      <div className="lines">
        {
          Array.from({ length: 8 }).map((_, index) => {
            return (
              <div key={index} className="line"></div>
            )
          })
        }
      </div>
      <div className="lines horizontal">
        {
          Array.from({ length: 6 }).map((_, index) => {
            return (
              <div key={index} className="line"></div>
            )
          })
        }
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="banner" ref={banner}>
            <div ref={el => mountains.current[0] = el} className="banner_left">
              <img src={mountainLeft} alt="moutain-left" />
            </div>
            <div ref={el => mountains.current[1] = el} className="banner_right">
              <img src={mountainRight} alt="moutain-right" />
            </div>
            <div className="banner_in">
              <div className="container">
                <div className="banner_content">
                  <h3>MARRELL</h3>
                  <h1 className="">
                    {
                      bannerTitleText.map((line, index, arr) => {
                        previousArLenght.current += arr[index - 1]?.length || 0;
                        return (
                          <div key={line + index}>
                            {
                              line.split("").map((item, i) => {
                                let position = 0;
                                position += previousArLenght.current + i;
                                return (
                                  <span ref={el => h1Title.current[position] = el} key={item + i}>
                                    {item === " " ? <>&nbsp;</> : item}
                                  </span>
                                )
                              })
                            }
                          </div>
                        )
                      })
                    }
                  </h1>
                </div>
              </div>
              <div id="shoe_first" className="shoe_first ghost_shoe">
                <Shoes />
              </div>
            </div>
          </div>
          <div className="dominate_sec">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div ref={secondShoe} style={{ opacity: 1, }} id="shoe_second" className="shoe_second ghost_shoe">
                    <Shoes />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dominate_text">
                    <h3>
                      {
                        "DOMINATE THE SUMMITS SUMIITS".split(" ").map((item, index) => {
                          return (
                            <span
                              key={item + index}
                              ref={el => dominanceWords.current[dominanceText.length + index] = el}
                            >
                              {item}
                            </span>
                          )
                        })
                      }
                    </h3>
                    <h2>
                      <span></span>
                      <span></span>
                      <span ref={el => dominanceTitle.current[1] = el}>THE QUINTESSENCE OF</span>
                      <span ref={el => dominanceTitle.current[0] = el}>TRAIL PERFORMANCE</span>
                    </h2>
                    <p>
                      {
                        dominanceText.split(" ").map((item, index) => {
                          return (
                            <span
                              key={item + index}
                              ref={el => dominanceWords.current[index] = el}
                            >
                              {item}
                            </span>
                          )
                        })
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="perf_sec">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="perf_txt">
                    <h3>PERFORMANCE, COMFORMance and durability</h3>
                    <h2>
                      <span>designed to exceed</span>
                      <span>your expectations</span>
                    </h2>
                    <p>
                      THE AGIILITY PEAK 5 REPRESENTS THE EVOLUTION OF EXCELELENCE IN TRAIL RUNNING, FEATURING A NEW DESIGN, LIGHTNESS, AND EXECEPTIONAL GRID. THIS SHOE REDEFINES OUTDOOR RUNNIG STANDARDS, ENSURING COMPLETE CONFIGDENCE IN YOUR EQUIPMENT, NO MATTER THE DISTANCE.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="shoe_third ghost_shoe">
                    <Shoes />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="view_shoe_banner">
            <div className="container">
              <div className="shoe_forth ghost_shoe">
                <Shoes />
              </div>
            </div>
          </div>
          <div className="fav_sec">
            <div className="container-fluid">
              <h3>AGILITY PEAK 5 GORE-TEXT@</h3>
              <h2>
                {
                  favTitle.map((item, index) => {
                    return (
                      <span key={String(item.title) + index} className={item.stroke ? "stroked" : ""}>
                        {
                          item.video ?
                            <video
                              loop
                              autoPlay
                              muted
                            >
                              <source
                                src={item.video}
                              />
                            </video>
                            :
                            item.title
                        }
                      </span>
                    )
                  })
                }
              </h2>
            </div>
          </div>
          <div className="fav_video">
            <video
              loop
              autoPlay
              muted
            >
              <source
                src={vid}
              />
            </video>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="footer_shoes">
                <div className="footer_shoe footer_shoe_one">
                  <Shoes />
                </div>
                <div className="footer_shoe footer_shoe_two">
                  <Shoes />
                </div>
              </div>
              <button className="shop_btn">
                Shop NOW
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Application;