import gsap from "gsap"
import SplitText from "gsap-trial/SplitText";

export const animateLines = (ref, exit = false, isElement) => {
    const tl = gsap.timeline();
    let element = ref.current;
    if (isElement) {
        element = ref;
    }
    const split = new SplitText(element, { linesClass: "l" });
    if (exit) {
        tl.to(split.words, {
            yPercent: 100,
            ease: "power1",
            duration: 1,
            stagger: 0.01,
        })
        return tl;
    }
    tl.from(split.words, {
        yPercent: 100,
        ease: "power1",
        duration: 3,
        stagger: 0.05,
    })
    return tl;
}

export const animateModel = (ref, exit) => {
    const tl = gsap.timeline();
    if (exit) {
        tl.to(ref.current, {
            scale: 0,
            rotate: -360,
            ease: "back",
            duration: 2,
        })
        return tl;
    }
    tl.from(ref.current, {
        rotate: 360,
        ease: "back.inOut",
        duration: 2,
    })
    return tl;
}