import gsap from "gsap";

export const animateArrow = (final, arrow, duration) => {
    const tl = gsap.timeline();
    tl.fromTo(
        final.current,
        {
            drawSVG: "0%",
        },
        {
            drawSVG: "100%",
            duration: duration || 2,
            ease: "expo.inOut",
        }
    )
    tl.to(arrow.current, {
        duration: duration || 2,
        ease: "expo.inOut",
        motionPath: {
            path: final.current,
            align: final.current,
            autoRotate: true,
            alignOrigin: [0, 0.5]
        }
    }, 0);
    return tl;
}