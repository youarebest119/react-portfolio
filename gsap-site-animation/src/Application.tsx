import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap-trial/SplitText";
import { useRef } from "react";
import { Curves, SequenceIcon, SnapIcon, Star } from "./assets/icons/icons";

const Application = () => {
  const scope = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const nice = useRef<HTMLSpanElement>(null);
  const easy = useRef<HTMLSpanElement>(null);
  const easing = useRef<HTMLSpanElement>(null);
  const superr = useRef<HTMLSpanElement>(null);
  const play = useRef<HTMLSpanElement>(null);
  const star = useRef<HTMLSpanElement>(null);
  const curves = useRef<HTMLSpanElement>(null);
  const plug = useRef<HTMLSpanElement>(null);
  const choreograph = useRef<HTMLSpanElement>(null);
  const animation = useRef<HTMLSpanElement>(null);
  const sequenceIcon = useRef<HTMLSpanElement>(null);
  const sequences = useRef<HTMLSpanElement>(null);
  const snap = useRef<HTMLSpanElement>(null);
  const snapIcon = useRef<HTMLSpanElement>(null);
  const addPara = useRef<HTMLSpanElement>(null);
  const easesPara = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    // pin banner
    const sections = gsap.utils.toArray("section");
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        pin: true,
        trigger: scope.current,
        end: "+=8000",
        scrub: 1,
        // toggleActions: "play pause reverse reset",
      }
    })

    // nice
    gsap.from(nice.current, {
      rotate: -90,
      y: -100,
      opacity: 0,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: nice.current,
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    });
    // easy
    gsap.from(easy.current, {
      y: -100,
      ease: "elastic",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: easy.current,
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    });
    // easing
    gsap.from(easing.current, {
      y: -300,
      opacity: 0,
      rotate: 180,
      ease: "elastic.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: easing.current,
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    });
    // add para
    const addParaSplit = new SplitText(addPara.current);
    const getChars = (word: Element) => {
      return gsap.utils.toArray(word.childNodes);
    }
    // "add"
    gsap.from(addParaSplit.words[0], {
      y: 100,
      opacity: 0,
      ease: "elastic.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: addParaSplit.words[0],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    })
    // "personality"
    gsap.from(gsap.utils.shuffle(getChars(addParaSplit.words[1])), {
      y: i => i % 2 === 0 ? gsap.utils.random(150, 200) : gsap.utils.random(-150, -200),
      ease: "elastic.inOut",
      stagger: 0.05,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: addParaSplit.words[1],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    })
    // to your animation with a  
    gsap.from(addParaSplit.words.slice(2, 7), {
      y: 100,
      opacity: 0,
      ease: "elastic.inOut",
      duration: 1,
      stagger: 0.05,
      delay: 0.5,
      scrollTrigger: {
        trigger: addParaSplit.words[2],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    })
    // huge
    gsap.from(addParaSplit.words[7], {
      scale: 4,
      opacity: 0,
      ease: "power1.in",
      duration: 0.5,
      scrollTrigger: {
        trigger: addParaSplit.words[7],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    })
    // variety
    gsap.from(addParaSplit.words.slice(8, 10), {
      y: 200,
      opacity: 0,
      ease: "power1.in",
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: addParaSplit.words[8],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      },
    })
    // star
    gsap.to(star.current, {
      x: 400,
      scrollTrigger: {
        trigger: star.current,
        scrub: 1,
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    })
    gsap.to(star.current, {
      rotate: 360,
      ease: "back",
      duration: 1,
      repeat: -1,
    })
    // super
    gsap.from(superr.current, {
      y: -200,
      rotateX: -100,
      ease: "back",
      scrollTrigger: {
        trigger: superr.current,
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    })
    // plug
    gsap.from(new SplitText(plug.current, { wordDelimiter: "-", wordsClass: "w", }).words, {
      width: 0,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: plug.current,
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    })
    // curves
    gsap.to("#curve", {
      morphSVG: "#semi-circle",
      scrollTrigger: {
        trigger: "#curve",
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        scrub: 1,
        toggleActions: "restart none none reverse",
      }
    })
    gsap.to("#home-animate__icon--curve", {
      x: 560,
      scrollTrigger: {
        trigger: "#home-animate__icon--curve",
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        scrub: 1,
        toggleActions: "restart none none reverse",
      }
    })
    gsap.to("#curved-line-toggle-one", {
      x: 560,
      rotate: -90,
      scrollTrigger: {
        trigger: "#curve",
        containerAnimation: scrollTween,
        start: "left 60%",
        markers: true,
        scrub: 1,
        end: "left 20%",
        toggleActions: "restart none none reverse",
      }
    })
    gsap.to("#curved-line-toggle-two", {
      x: 400,
      rotate: 90,
      scrollTrigger: {
        trigger: "#curve",
        containerAnimation: scrollTween,
        start: "left 60%",
        markers: true,
        scrub: 1,
        end: "left 20%",
        toggleActions: "restart none none reverse",
      }
    })
    // easespara
    const easesParaSplit = new SplitText(easesPara.current);
    // eases
    gsap.from(easesParaSplit.words[0], {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: easesParaSplit.words[0],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    });
    // or build
    gsap.from(easesParaSplit.words.slice(1, 3), {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: easesParaSplit.words[1],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    });
    // your own 
    gsap.from(easesParaSplit.words.slice(3, 5), {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: easesParaSplit.words[3],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    });
    // custom
    gsap.from(getChars(easesParaSplit.words[5]), {
      rotateX: 90,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: easesParaSplit.words[5],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    })
    // curves
    gsap.from(getChars(easesParaSplit.words[6]), {
      rotateX: 90,
      opacity: 0,
      stagger: 0.1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: easesParaSplit.words[6],
        containerAnimation: scrollTween,
        start: "left 90%",
        markers: true,
        toggleActions: "restart none none reverse",
      }
    })
  })
  return (
    <>
      <div style={{ height: "100dvh" }} />
      <div ref={scope} className="aplication">
        <div className="content" ref={content}>
          <section>
            <h4>This is just a Page</h4>
          </section>
          <section>
            <h2 ref={title}>
              <span className="nice" ref={nice}>Nice and</span>
              <span className="easy" ref={easy}>
                <span>Easy</span>
              </span>
              <span className="easing" ref={easing}>Easing</span>
              <span ref={addPara}>
                Add Personality to your animations with a huge variety of
              </span>
              <span className="super"><span ref={superr}>Super</span></span>
              <span className="play" ref={play}>
                <span className="star" ref={star}>
                  <Star />
                </span>
                <span className="curves" ref={curves}>
                  <Curves />
                </span>
                <span className={"plug_outer"}>
                  <span className="plug" ref={plug}>
                    Plug-and-play
                  </span>
                </span>
              </span>
              <span ref={easesPara}>eases, or build your own <span className="custom">custom</span> <span className="custom">curves</span></span>
              <span className="choreograph" ref={choreograph}>Choreograph</span>
              <span className="animation" ref={animation}><span>animation</span></span>
              <span className="sequence_icon" ref={sequenceIcon}>
                <SequenceIcon />
              </span>
              <span className="sequences" ref={sequences}>sequences</span>
              in a
              <span className="snap" ref={snap}>
                <span className="snap_icon" ref={snapIcon}>
                  <SnapIcon />
                </span>
                snap
              </span>
            </h2>
          </section>
        </div>
      </div>
      <div style={{ height: "100dvh" }} />
    </>
  )
}

export default Application
