import gsap from "gsap";

export const animateLines = (circleLine) => {
    const tl = gsap.timeline();
    tl.from(circleLine.current, {
        yPercent: -100,
        opacity: 0,
        duration: 2,
        stagger: 0.04,
        ease: "expo.inOut",
    })
    return tl;
}

export const animateText = (loaderText) => {
    const tl = gsap.timeline();

    tl.from(loaderText.current, {
        x: -100,
        opacity: 0,
        duration: 2,
        stagger: 0.02,
        ease: "expo.inOut"
    })
    return tl;
}

export const exitAnimation = (loader) => {
    const tl = gsap.timeline();

    tl.to(loader.current, {
        height: 0,
        duration: 2,
        ease: "expo.inOut"
    })
    return tl;
}